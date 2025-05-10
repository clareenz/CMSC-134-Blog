import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Footer from "../components/Footer";
import { IoMdArrowUp } from "react-icons/io";
import { styles } from "./writeUp2Styles";

const WriteUp_3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.headerContainer}>
          <h2 className={styles.largeTitle}>
            You Thought It Was Just Login and Posting?
          </h2>
          <h2 className={styles.largeTitle}>Well, So Did The Hackers.</h2>
          <br />
          <h3 className={styles.subHeader}>WRITEUP 3</h3>
          <br />
          <img src="MASK.png" alt="brain" className={styles.heroImage} />
          <br />
          <h3 className={styles.dateText}>May 10, 2025</h3>
        </div>
        <br />
        <br />
        {/* Section 1 */}
        <section>
          <div>
            <h2 className={styles.sectionTitle}>Security Threats</h2>
            <div className={styles.sectionText}>
              <p>
                So here we are — another machine problem, another web app that
                looks harmless until you start poking around. It’s got a login
                page and a posting feature. Cute. But behind that simplicity is
                a welcome mat for some of the most basic and dangerous security
                threats in the book: <strong>SQL Injection</strong>,{" "}
                <strong>XSS</strong>, and <strong>CSRF</strong>.
              </p>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />
        <br />

        {/* SQL Injection*/}
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.flexColumn}>
              <h2 className={styles.sectionTitle}>
                SQL Injection - “Your query is my playground
              </h2>
              <div className={styles.justifyCenter}>
                <img
                  src="SQL.png"
                  alt="howthecodeworks"
                  className={styles.imageFullRelative}
                />
              </div>
            </div>
            <div>
              <div className={styles.sectionText}>
                <p>
                  “What if I told you the login form was basically a backdoor
                  with no lock?”
                </p>
                <br />
                <p>
                  Let’s paint a picture: you're a user. You open the login page.
                  You type in your username and password. Everything works fine.
                  You log in. But now imagine someone types this instead:
                </p>
                <pre className={styles.codeBlock}>{`' OR '1'='1`}</pre>
                <p>in both the username and password fields.</p>
                <br />
                <p>And then they get in.</p>
                <br />
                <p>That’s not a bug — that’s SQL injection in action.</p>
                <br />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        {/* The Problem*/}
        <section>
          <div>
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <div className={styles.sectionText}>
              <p>
                In the original code, the login system constructed SQL queries
                like this:
              </p>
              <pre className={styles.codeBlock}>
                {`res = cur.execute("SELECT id from users WHERE username = '"
            + request.form["username"]
            + "' AND password = '"
            + request.form["password"] + "'")
`}
              </pre>
              <p>
                They basically glued user input straight into a SQL query. No
                filters. No checks. Just vibes.
              </p>
              <br />
              <p>
                This means the attacker controls part of the final SQL command.
                With the input ' OR '1'='1, the actual SQL becomes:
              </p>
              <pre className={styles.codeBlock}>
                {`SELECT id FROM users WHERE username = '' OR '1'='1' AND password = '' OR '1'='1'
`}
              </pre>
              <p>
                Since '1'='1' is always true, the query returns all users — and
                logs the attacker in as the first match.
              </p>
              <br />
              <p>
                At this point, you might as well rename your app to “Come In,
                We’re Open.”
              </p>
              <br />
            </div>
          </div>
        </section>
        <br />
        <br />
        {/* Why is this dangerous*/}
        <section>
          <div>
            <h3 className={styles.sectionTitle}>Why is this dangerous?</h3>
            <div className={styles.sectionText}>
              <ul className={styles.list}>
                <li>Attackers can bypass authentication.</li>
                <li>
                  They can potentially extract user data from other tables.
                </li>
                <li>
                  With more advanced SQL payloads, they could even modify or
                  delete your database content.
                </li>
              </ul>
              <br />
              <p>And all they needed was a single quote and some creativity.</p>
            </div>
          </div>
        </section>
        <br />
        <br />
        {/* The Fix*/}
        <section>
          <div>
            <h2 className={styles.sectionTitle}>The Fix</h2>
            <div className={styles.sectionText}>
              <p>
                We put an end to the madness using parameterized queries.
                Instead of handing raw SQL to the user like a sharp knife, we
                now say, “hey database, treat this like a regular value — not a
                command.”
              </p>
              <pre className={styles.codeBlock}>
                {`res = cur.execute(
    "SELECT id from users WHERE username = ? AND password = ?",
    (request.form["username"], request.form["password"])
)

`}
              </pre>
              <p>
                We applied this same safe practice to:
                <br />
                <ul className={styles.list}>
                  <li>Login authentications</li>
                  <li>Checking session tokens</li>
                  <li>Inserting session tokens after successful login</li>
                </ul>
              </p>
              <br />
              <p>We even set some extra cookie options just because we care:</p>
              <pre className={styles.codeBlock}>
                {`response.set_cookie(
    "session_token", 
    token,
    httponly=True,   # So JS can’t touch it
    samesite="Lax"   # Stops lazy CSRF attempts)`}
              </pre>
              <p>
                Now, no matter what chaotic input they provide, it’s treated as
                a value — not as part of the SQL syntax. That rogue
                <span className="text-green-700 font-bold">
                  ' OR '1'='1
                </span>{" "}
                input? It’s just a string now. No tricks. No backdoors.
              </p>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />

        {/*XSS*/}
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.flexColumn}>
              <h2 className={styles.sectionTitle}>
                XSS (Cross-Site Scripting) - “When Posts Turn Into Pop-ups”
              </h2>
              <div className={styles.justifyCenter}>
                <img
                  src="XSS.png"
                  alt="howthecodeworks"
                  className={styles.imageFullRelative}
                />
              </div>
            </div>
            <div>
              <div className={styles.sectionText}>
                <p>
                  There’s posting, and then there’s posting with malicious
                  intent. The kind that doesn’t say “hi” but instead goes:
                </p>
                <br />
                <pre
                  className={styles.codeBlock}
                >{`<script>alert('hacked')</script>`}</pre>
                <p>Yes. The original version of the app allowed this.</p>
                <br />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        {/* The Problem*/}
        <section>
          <div>
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <div className={styles.sectionText}>
              <p>Originally, we had this ticking time bomb:</p>
              <pre className={styles.codeBlock}>
                {`<li>{{ post[0] | safe }}</li>
`}
              </pre>
              <p>
                Now, what does
                <span className="text-green-700 font-bold"> |safe </span> do? It
                disables HTML escaping. It tells the browser: “Hey, I trust this
                data. Render it as-is.” This means if a user posts a{" "}
                <span className="text-green-700 font-bold">&lt;script&gt;</span>
                , it runs. Instantly. No warning. No filter. Just straight-up
                JavaScript execution in every visitor’s browser.
              </p>
              <br />
              <p>
                Let’s be real: no one intentionally builds an app to become a
                script kiddie playground, but here we are.
              </p>
              <br />
              <p>
                If this were a real system with logged-in users, XSS could’ve
                been used to:
              </p>
              <ul className={styles.list}>
                <li>Steal cookies</li>
                <li>Hijack sessions</li>
                <li>Redirect users</li>
                <li>Even plant malware</li>
              </ul>
              <br />
              <p>
                Basically, a “hello world” for hackers — and an “oh no” for your
                app.
              </p>
            </div>
          </div>
        </section>
        <br />
        <br />
        {/* The Fix*/}
        <section>
          <div>
            <h2 className={styles.sectionTitle}>The Fix</h2>
            <div className={styles.sectionText}>
              <p>
                The fix was blissfully simple — we just stopped trusting
                everyone.
              </p>
              <br />
              <p>
                We removed the{" "}
                <span className="text-green-700 font-bold"> |safe </span>{" "}
                filter:
              </p>
              <pre className={styles.codeBlock}>{`<li>{{ post[0] }}</li>`}</pre>
              <p>Now Flask automatically escapes HTML, so your post of:</p>
              <pre className={styles.codeBlock}>
                {`<script>alert('XSS')</script>`}
              </pre>
              <p>is rendered as plain text, like:</p>
              <pre className={styles.codeBlock}>
                {`&lt;script&gt;alert('XSS')&lt;/script&gt;`}
              </pre>
              <p>No pop-ups. No hijacks. No heart attacks.</p>
              <br />
              <p>We even set some extra cookie options just because we care:</p>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />

        {/*CSRF*/}
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.flexColumn}>
              <h2 className={styles.sectionTitle}>
                CSRF (Cross-Site Request Forgery) - “You Didn’t Even Know You
                Hit Submit”
              </h2>
              <div className={styles.justifyCenter}>
                <img
                  src="CSRF.png"
                  alt="howthecodeworks"
                  className={styles.imageFullRelative}
                />
              </div>
            </div>
            <div>
              <div className={styles.sectionText}>
                <p>
                  CSRF is that sneaky kind of attack where your browser gets
                  gaslit into doing things you never agreed to. Imagine minding
                  your own business, browsing memes, and suddenly — you’ve just
                  posted “HACKED!” on your own profile.
                </p>
                <br />
                <p>
                  You didn’t click anything in the app. But you were logged in,
                  and another page made a POST request on your behalf. That's
                  CSRF in action.
                </p>
                <br />
              </div>
            </div>
          </div>
        </section>
        {/* The Problem*/}
        <section>
          <div>
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <div className={styles.sectionText}>
              <p>
                In the original app, every form — login, post, you name it —
                looked like this:
              </p>
              <pre className={styles.codeBlock}>
                {`<form method="post" action="/posts">
    <input type="text" name="message">
    <input type="submit" value="Post!">
</form>
`}
              </pre>
              <p>
                What’s missing? <strong>Any kind of proof</strong> that the
                request came from the actual user and not some shady third-party
                website.
              </p>
              <br />
              <p>So, if a malicious site had this:</p>
              <pre className={styles.codeBlock}>
                {`<form action="http://127.0.0.1:5000/posts" method="post" id="evil-form">
  <input type="text" name="message" value="Hacked post!">
</form>
<script>
  document.getElementById('evil-form').submit();
</script>
`}
              </pre>
              <p>
                ...and you were logged into the vulnerable app? That post would
                go through. You just got forged, my friend.
              </p>
            </div>
          </div>
        </section>
        <br />
        <br />
        {/* The Fix*/}
        <section>
          <div>
            <h2 className={styles.sectionTitle}>The Fix</h2>
            <div className={styles.sectionText}>
              <p>
                To properly secure the app, we implemented Flask-WTF’s built-in
                CSRFProtect — a robust and standardized way to ensure that every
                POST request includes a valid, server-generated token.
              </p>
              <br />
              <p>Here’s how we made the app fight back:</p>
              <ul className={styles.list}>
                <li>Enabled CSRF protection globally:</li>
                <pre className={styles.codeBlock}>
                  {`from flask_wtf.csrf import CSRFProtect
csrf = CSRFProtect(app)`}
                </pre>
                <li>Generated a secure secret key:</li>
                <pre className={styles.codeBlock}>
                  {`app.config["SECRET_KEY"] = secrets.token_hex(16)`}
                </pre>
                <li>
                  Automatically injected CSRF tokens into all forms via
                  Flask-WTF:
                </li>
                <pre className={styles.codeBlock}>
                  {`<input type="hidden" name="csrf_token" value="{{ csrf_token() }}"/>`}
                </pre>
                <li>
                  Handled CSRF errors gracefully with a dedicated error handler:
                </li>
                <pre className={styles.codeBlock}>
                  {`@app.errorhandler(CSRFError)
def handle_csrf_error(e):
    return render_template('csrf_error.html', reason=e.description), 400`}
                </pre>
              </ul>
              <br />
              <p>
                Now, if a forged request doesn’t have the correct CSRF token?
                Blocked. The browser gets a polite “CSRF token missing or
                incorrect” instead of posting junk.
              </p>
            </div>
          </div>
          <br />
        </section>

        {/* Parting Words*/}
        <section>
          <div>
            <h2 className={styles.sectionTitle}>Parting Words</h2>
            <div className={styles.sectionText}>
              <p>
                Don’t trust input. Don’t trust browsers. And for the love of all
                things Flask, don’t trust users.
              </p>
              <br />

              <p>
                This project may seem basic, but it reflects real
                vulnerabilities that exist in production systems. With just a
                little care (and maybe a sprinkle of paranoia), most of these
                can be prevented.
              </p>

              <br />
              <p>Secure coding isn’t hard. Ignoring it is.</p>
            </div>
          </div>
        </section>
        <br />
        <br />
        <a
          href="https://github.com/nikkamendoza/MP134.git"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-2xl shadow-md bg-black text-white font-semibold hover:bg-gray-800 transition duration-200"
        >
          🔗 View Source on GitHub
        </a>
        <br />
        <br />
        <br />
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Back
        </button>
        {/* Up Button */}
        {showScroll && (
          <button onClick={scrollToTop} className={styles.upButton}>
            <IoMdArrowUp size={24} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WriteUp_3;

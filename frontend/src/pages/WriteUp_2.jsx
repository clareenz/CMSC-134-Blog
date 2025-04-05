import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Footer from "../components/Footer";
import { IoMdArrowUp } from "react-icons/io";
import { styles } from "./writeUp2Styles";

const WriteUp_2 = () => {
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
          <h2 className={styles.largeTitle}>Human</h2>
          <h2 className={styles.largeTitle}>Factors</h2>
          <br />
          <h3 className={styles.subHeader}>IN COMPUTER SECURITY</h3>
          <h3 className={styles.subHeader}>WRITEUP 2</h3>
          <br />
          <img src="/brain.png" alt="brain" className={styles.heroImage} />
          <br />
          <h3 className={styles.dateText}>February 8, 2025</h3>
        </div>
        <br />
        <br />
        {/* Section 1 */}
        <section>
          <div>
            <h2 className={styles.sectionTitle}>What is RSA?</h2>
            <div className={styles.sectionText}>
              <p>
                RSA is based on the mathematical difficulty of factoring large
                prime numbers, which makes it incredibly secure. The larger the
                key size, the harder it is to break the encryption using brute
                force or mathematical attacks.
              </p>
              <br />
              <p>
                RSA works by using two keys: a public key to encrypt messages
                and a private key to decrypt them. This allows for secure
                communication, even if the public key is shared openly. In
                addition to encryption, RSA can also be used for digital
                signatures, which verify the authenticity of a message and
                ensure it has not been tampered with.
              </p>
            </div>
          </div>
          <br />
          <br />
        </section>
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.flexColumn}>
              <h2 className={styles.sectionTitle}>How the Code Works</h2>
              <div className={styles.justifyCenter}>
                <img
                  src="how.png"
                  alt="howthecodeworks"
                  className={styles.imageFullRelative}
                />
              </div>
            </div>
            <div>
              <div className={styles.sectionText}>
                <p>
                  The code is designed to encrypt a message, sign it to verify
                  its authenticity, and then decrypt and verify it. So how does
                  it work?
                </p>
                <br />
                <div className={styles.flexColumn}>
                  <h2 className={styles.sectionTitle}>
                    1. Generating Key Pairs
                  </h2>
                </div>
                <p>
                  The code starts by generating two sets of RSA key pairs – one
                  for encryption and one for signing (a digital signature used
                  to verify authenticity and integrity of a message).
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <pre className={styles.codeBlock}>
            {`def generate_keypair():
    private_key = rsa.generate_private_key(
        public_exponent=65537,
        key_size=2048
    )
    return private_key, private_key.public_key()`}
          </pre>
          <p className={styles.sectionText}>
            The generate_keypair() function creates a private and public key
            pair using RSA with a key size of 2048 bits. This size is considered
            secure and widely used in practice. A 2048-bit key provides 112 bits
            of security—this means an attacker would need approximately 2^(112)
            operations to break it. This is considered safe against most modern
            computing power, including advanced supercomputers.
          </p>
        </section>
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid + " relative z-10"}>
            <div className={styles.flexColumn}>
              <h2 className={styles.sectionTitle}>
                2. Saving and Loading Keys
              </h2>
              <pre className={styles.codeBlock}>
                {`def save_key(key, filename, is_private=False):
    pem_data = key.private_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PrivateFormat.PKCS8,
        encryption_algorithm=serialization.NoEncryption()
    ) if is_private else key.public_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PublicFormat.SubjectPublicKeyInfo
    )

    with open(filename, "wb") as f:
        f.write(pem_data)`}
              </pre>
            </div>
            <div>
              <div className={styles.sectionTextWithPadding}>
                <p>
                  These keys are stored as files so they can be reused later
                  instead of regenerating them every time.
                </p>
                <br />
                <p>
                  The save_key() function writes the RSA keys to files in PEM
                  format. Private keys are saved using private_bytes() and
                  public keys use public_bytes(). This allows the program to
                  load the same keys later, which is useful for real-world
                  applications where consistent encryption and signing are
                  required.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.justifyCenter}>
            <img
              src="how.png"
              alt="howthecodeworks"
              className={styles.imageFullRelative}
            />
          </div>
        </section>
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid + " relative z-10"}>
            <div className={styles.flexColumn}>
              <h2 className={styles.sectionTitle}>3. Encrypting the Message</h2>
              <pre className={styles.codeBlock}>
                {`def encrypt_message(message, public_key):
    ciphertext = public_key.encrypt(
        message.encode(),
        asym_padding.OAEP(
            mgf=asym_padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )
    return base64.b64encode(ciphertext).decode()`}
              </pre>
            </div>
            <div>
              <div className={styles.sectionTextWithPadding}>
                <p>
                  When a message is provided, it is encrypted using the public
                  key and RSA-OAEP padding.
                </p>
                <br />
                <p>
                  The encrypt_message() function converts the plaintext message
                  into ciphertext. The code uses OAEP padding (Optimal
                  Asymmetric Encryption Padding) which adds random data to the
                  message before encryption. This randomness ensures that even
                  if you encrypt the same message multiple times, the resulting
                  ciphertext will be different each time.
                </p>
              </div>
            </div>
          </div>
          <pre className={styles.codeBlock}>
            {`#Current ciphertext and signature: Hi, sir Eli. When remedial for LE1? > < If ever naa.

Encrypted: GKmoTmS1zsw1TkAJEz2sV/g1WnnOHbcwqW0NE5ar1OBAXCB0wDG18e2jbsN2u01716hQEbO98IwzbX4Lh6Z5J/
5GAGjgIBvlklIa10jGb0bqXbgt7NqhICLg8QP/7gnS4hyTwivVS64p6ysmOJ+Qj3nIO6X6KEExqV6BkpVLUkBs8CR3RzB0gyL5ng
iBLmpsCjhD5iUSqkfmIEEeFzBL3EbgSpqHh9xHwc6IkJuFVLHvODKice665dOD5A0Wpb8N+MRQqyVus0uk2pmsSvqSoRFcJKmVQ5KPU1/
6OQ2NPyKRsPQcmawghAESvOKkGRx/L1iD1aFhIVWZsHbayIOm1A==
Signature: BY9wicFlpKVo59ZkouXbS9kXeCYbWqpern30A+0xJFtXxZzx2YI2Gs36ZtEvgqbAeE9T1cAGL5TB47ra/jL6sbAv5+SsN
9O6R7TeNTHZrCg4DaRJ2hXeBUP7qhW5KBkuJlhYxNXIpjqzcdmphrUOaf0Jz5bnjGAS1kFTrr/11RM5IWsodxIjvX3mJH90URTIj8Pyb
Sph5iT5nKl4VEOOjmyh4BX320Xcu9G4dbsDvSTYtH1I2NCbgRq1FAh0MaFHzdd578PCw/N9R1Q69yUnnCjRcytuKf/xYETiXfax9vQp
CglW7LNFymyIclh5z/KbfkWZ38YyrepZltdNKFU3zw==


#Another ciphertext and signature: Hi, sir Eli. When remedial for LE1? > < If ever naa.

Encrypted: qCiifQImzRyMvc7a7l35l0Napf1ikrkOOdPsa2lBBzA11IDQoD6Avy6VqSDgsAlgmtY0W+T8xQxCYTzrnHVbHgrUPER18E
KGUXDrD9389dll0WSJtx8/3L/DstIJIdIn7+++S7bK6WrYFOLFm6cKwnJWbSGhniMZY7F8nCtwtLfrAMTK1tyYZqx7y2P9xE4EvUg9LDf5
vEUVJchQqjniLXMrKDYI3RO/IW+0WaUjzZZMx9rmJ1NhvcWpX/czl5x724tILn+DRzeVMUl5fwNlXG5gd7XWbo0VCY+NKg0JtwRUDPPJqZ
a7qgDBtFE1iUgPFyalKRSmsl6QigRcbmSmQ==
Signature: Lzr+UsaAbVrWb8i6d7DgYezZhbZjObZNITflv4Uyue3fn+ljhg+atNGdFmq6ljQ1kOTC6JS3sANizzkVJ3RqbsOhWGw/biZZ
dwILfBlWCV/qt0Z7MNN3M0AByh/OboSxZdl0JewIQTwsDyv1X9CRAqhRV38rp/RDv4XYYgaY0qqv7I6SsV0pkDTqjYKthKERMEnw3/2BmSf
0e0H4zT5nskaSzsQ2Ra5lajyZ6dP6d2dSerqOl+LAtGoWU4FudeURyp0bFzgmBmzL49ycXJIH584iBV5ycvNoRwmZyy44eFlja8GoOzioa5
W66j09SUaKjR64ypZFgWUzxuVPO4RrHg==
`}
          </pre>
        </section>
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid + " relative z-10"}>
            <div className={styles.flexColumn}>
              <h2 className={styles.sectionTitle}>4. Decrypting the Message</h2>
              <p className={styles.sectionText}>
                The ciphertext can be decrypted only by the corresponding
                private key.
              </p>
              <pre className={styles.codeBlock}>
                {`def decrypt_message(ciphertext, private_key):
    ciphertext = base64.b64decode(ciphertext)
    plaintext = private_key.decrypt(
        ciphertext,
        asym_padding.OAEP(
            mgf=asym_padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )
    return plaintext.decode()`}
              </pre>
            </div>
            <div>
              <div className={styles.sectionTextWithPadding}>
                <p>
                  The decrypt_message() function reverses the encryption
                  process. It decodes the base64-encoded ciphertext, decrypts it
                  with the private key, and returns the original message.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid + " relative z-10"}>
            <div className={styles.flexColumn}>
              <h2 className={styles.sectionTitle}>5. Signing the Message</h2>
              <p className={styles.sectionText}>
                To ensure the message's authenticity, the encrypted message is
                signed with the signing private key.
              </p>
              <pre className={styles.codeBlock}>
                {`def sign_message(message, private_key):
    signature = private_key.sign(
        message.encode(),
        asym_padding.PSS(
            mgf=asym_padding.MGF1(hashes.SHA256()),
            salt_length=asym_padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    return base64.b64encode(signature).decode()`}
              </pre>
            </div>
            <div>
              <div className={styles.sectionTextWithPadding}>
                <p>
                  The sign_message() function generates a digital signature
                  using PSS padding (Probabilistic Signature Scheme). Similar to
                  encryption, the padding adds randomness, so the signature
                  differs even for the same message. This signature allows
                  others to verify that the message was signed by the legitimate
                  sender.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid + " relative z-10"}>
            <div className={styles.flexColumn}>
              <h2 className={styles.sectionTitle}>
                6. Verifying the Signature
              </h2>
              <pre className={styles.codeBlock}>
                {`def verify_signature(message, signature, public_key):
    signature = base64.b64decode(signature)
    public_key.verify(
        signature,
        message.encode(),
        asym_padding.PSS(
            mgf=asym_padding.MGF1(hashes.SHA256()),
            salt_length=asym_padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    return True`}
              </pre>
            </div>
            <div>
              <div className={styles.sectionTextWithPadding}>
                <p>
                  The receiver verifies the signature using the public key. The
                  verify_signature() function checks that the digital signature
                  matches the message. If the message or signature is tampered
                  with, the verification will fail.
                </p>
              </div>
            </div>
          </div>
          <br />
          <p className={styles.sectionText}>
            Thus, a message is verified as being from the legitimate sender
            using their public key. When the sender signs a message with their
            private key, it creates a unique digital signature. The receiver can
            then use the sender’s public key to verify this signature. If the
            signature is valid, it confirms that the message was created by the
            legitimate sender and was not altered. This works because only the
            private key can generate a valid signature, and the corresponding
            public key can authenticate it, ensuring both the sender’s identity
            and the message’s integrity.
          </p>
        </section>
        <br />
        <br />
        <section>
          <div>
            <h2 className={styles.sectionTitle}>
              PWhat if we attempt to simulate tampering?
            </h2>
            <div className={styles.sectionText}>
              <p>
                We modified the code so that it loads the previously saved
                encrypted message and signature from
                ciphertext_and_signature.txt instead of generating a new pair
                each time.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.sectionSpacingSmall}>
          <div className={styles.twoColumnGrid + " relative z-10"}>
            <div className={styles.flexColumn}>
              <pre className={styles.codeBlock}>
                {`# Encrypt-Then-Sign process
    encrypted_message = encrypt_message(message, enc_public)
    if encrypted_message:
        signature = sign_message(encrypted_message, sign_private)

        if signature:
            with open("ciphertext_and_signature.txt", "r") as f:
                lines = f.readlines()
                encrypted_message = lines[0].strip().split(": ")[1]
                signature = lines[1].strip().split(": ")[1]

            print("[TEST] Loaded previously saved encrypted message and signature.")`}
              </pre>
            </div>
            <div>
              <div>
                <pre className={styles.codeBlock}>
                  {`# Verify-Then-Decrypt process

    # Simulate tampering by modifying the last character of the encrypted message
    tampered_encrypted_message = encrypted_message[:-1] + ("A" if encrypted_message[-1] != "A" else "B")

    print("\n[TEST] Tampering the encrypted message before verification...")
    if not verify_signature(encrypted_message, signature, sign_public):
        print("[Error] Signature verification failed. Aborting decryption.")
        exit(1)  # Stop execution if verification fails

    # Normal verification and decryption process
    if verify_signature(encrypted_message, signature, sign_public):
        decrypted_message = decrypt_message(encrypted_message, enc_private)

        if decrypted_message:
            with open("decrypted.txt", "w") as f:
                f.write(decrypted_message)
            print("[Success] Decryption and verification complete.")
            print("Decrypted message:", decrypted_message)
        else:
            print("[Error] Failed to decrypt message.")
    else:
        print("[Error] Signature verification failed.")`}
                </pre>
              </div>
            </div>
          </div>
          <br />
          <p className={styles.sectionText}>
            The code successfully decrypts the message before any tampering,
            displaying the original content. However, if the
            ciphertext_and_signature.txt file is altered, the decryption process
            fails, and the decrypted message is not printed, as shown below.
          </p>
          <div className={styles.justifyCenter}>
            <img
              src="tamper.png"
              alt="tampering"
              className={styles.imageFullRelative}
            />
          </div>
          <p className={styles.sectionText}>
            Note: The code failed when we tried to erase the random text as
            “tampering”, it decrypted the message when the encrypted word was
            back to the original, but it was still considered as tampering,
            right?
          </p>
        </section>
        <section>
          <div>
            <h2 className={styles.sectionTitle}>
              Why Does the Same Message Produce Different Outputs?
            </h2>
            <div className={styles.sectionText}>
              <p>
                You might wonder why encrypting or signing the same message
                multiple times results in different outputs. This happens
                because of the random padding used in both the encryption
                (RSA-OAEP) and signature (RSA-PSS) processes. This randomness
                prevents attackers from recognizing repeated messages or
                signatures, adding an extra layer of security. Without padding,
                the same input would always produce the same output, which could
                reveal patterns and make the encryption vulnerable to attacks.
                By introducing randomness, RSA encryption and signatures remain
                unpredictable and secure, even if the same message is processed
                repeatedly.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2 className={styles.sectionTitle}>
              Why This Matters in Cybersecurity
            </h2>
            <div className={styles.sectionText}>
              <p>
                This program demonstrates core concepts of cybersecurity:
                confidentiality, integrity, and authentication.
              </p>
              <br />
              <ol className={styles.list}>
                <li>
                  Confidentiality: Encryption ensures that only the intended
                  recipient can read the message. Even if someone intercepts the
                  ciphertext, they cannot decrypt it without the private key.
                </li>
                <li>
                  Integrity: Digital signatures confirm that the message has not
                  been altered. If someone modifies the message, signature
                  verification will fail.
                </li>
                <li>
                  Authentication: The signature also verifies the sender’s
                  identity. Only someone with the signing private key could have
                  generated the signature.
                </li>
              </ol>
              <br />
              <p className={styles.sectionText}>
                These techniques are the backbone of secure communication on the
                internet. They protect sensitive information, authenticate
                users, and prevent data tampering. Without robust encryption and
                signature systems like RSA, secure online activities such as
                online banking, secure messaging, and e-commerce would not be
                possible.
              </p>
            </div>
          </div>
        </section>
        <br />
        <br />
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

export default WriteUp_2;

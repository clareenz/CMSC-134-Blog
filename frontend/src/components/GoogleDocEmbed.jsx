const GoogleDocEmbed = ({ docId, height = "600px" }) => {
    if (!docId) return <p>No document ID provided</p>;
  
    const iframeSrc = `https://docs.google.com/document/d/e/${docId}/pub?embedded=true`;
  
    return (
      <div style={styles.container}>
        <iframe
          src={iframeSrc}
          style={styles.iframe}
          width="100%"
          height={height}
          title={`Google Doc ${docId}`}
        ></iframe>
      </div>
    );
  };
  
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "auto",
      padding: "10px",
      border: "2px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      backgroundColor: "#f9f9f9",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
      borderRadius: "5px",
    },
  };
  
  export default GoogleDocEmbed;
  
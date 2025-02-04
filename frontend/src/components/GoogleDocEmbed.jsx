const GoogleDocEmbed = ({ docId, height = "600px" }) => {
    if (!docId) return <p>No document ID provided</p>;
  
    const iframeSrc = `https://docs.google.com/document/d/e/${docId}/pub?embedded=true`;
  
    return (
      <div className="h-screen" style={styles.container}>
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
      maxWidth: "900px",
      width: "1000px",
      backgroundColor: "transparent",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
      borderRadius: "5px",
    },
  };
  
  export default GoogleDocEmbed;
  

function Footer() {

  let customStyle = {
    color : "red",
    display: "inline",
    border: "1px solid violet",
    padding: "8px"
  };

  customStyle.color = "blue"

  return (
    <>
      <h2 style={customStyle}>Gnapi Technologies</h2>
    </>
  )
}

export default Footer;
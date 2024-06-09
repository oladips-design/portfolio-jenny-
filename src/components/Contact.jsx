import "../styles/contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact_container" id="contact">
        <h3 className="contact_heading">Contact</h3>
        <div className="contact_bigbox">
          <p className="contact_mess">
            Ready to bring your vision to life or explore exciting opportunities
            with you. Please do not hesitate to reach out via phone or email. To
            stay informed, you can also connect with me on social media,
          </p>
          <div className="contact1">
            <p>Email: Jeniferanieke@gmail.com</p>
            <p>X: @cherieammy</p>
          </div>
          <p className="para">Lets connect</p>
          <div className="contact_socials">
            <a target="_blank" href="https://x.com/cherieammy">
              X
            </a>
            <a target="_blank" href="https://www.behance.net/jenniferaniekeC">
              Behance
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jennifer-anieke/"
            >
              Linkedin
            </a>
            <a target="_blank" href="jeniferanieke@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>

      <h2 className="bye">THANK YOU FOR STOPPING BY!</h2>
    </>
  );
}

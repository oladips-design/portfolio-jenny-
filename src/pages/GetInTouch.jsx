import "../styles/getInTouch.css";

export default function GetInTouch() {
  return (
    <div className="form-container">
      <form className="contact-form">
        <input type="text" name="fullname" placeholder="Full Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

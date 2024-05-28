import "../styles/about.css";
import bigPicture from "../assets/WhatsApp Image 2023-05-29 at 12.25 1.png";

export default function About() {
  return (
    <>
      <div className="big_container">
        <div className="about_container">
          <div className="about_words">
            <h5 className="about_head">About me</h5>
            <p className="about_para para1">Hi, I’m Jennifer Anieke</p>

            <p className="about_para para2">
              I am a UI/Ux designer, with a passion for creating Aesthetical and
              functional products. I bring a creative and collaborative approach
              to every project, focusing on user-centered design. i specialize
              in crafting exceptional digital experience that empower my clients
              to reach their business goal I am a UI/Ux designer, with a passion
              for creating Aesthetical and functional products. I bring a
              creative and collaborative approach to every project, focusing on
              user-centered design. i specialize in crafting exceptional digital
              experience that empower my clients to reach their business goal
            </p>
            <p className="about_para para3">
              I am passionate about growth and learning in the ever-evolving
              field of ux design. I contribute a positive and collaborative work
              culture. Let’s connect and create remarkable user experience
              together.
            </p>

            <div className="about_buttons">
              <button className="btn btn_black">HIRE ME</button>
              <button className="btn btn_white">LETS TALK</button>
            </div>
          </div>
          <div className="about_image">
            <img src={bigPicture} alt="" />
          </div>
        </div>

        <div className="services_container">
          <h3>Services</h3>
          <div className="services_container_list">
            <ul className="services_option option1">
              <li>Prototying</li>
              <li>Ux research</li>
              <li>Design system</li>
            </ul>
            <ul className="services_option option2">
              <li>UI Design</li>
              <li>Web Design</li>
              <li>Product Design</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

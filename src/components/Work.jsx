import "../styles/work.css";
import workImage1 from "../assets/Group 49186.png";
import workImage2 from "../assets/Frame 49280 2.png";
import workImage3 from "../assets/Frame 49278 2.png";
import workImage4 from "../assets/Frame 49279 1(1).png";

export default function Work() {
  return (
    <>
      <section className="work" id="works">
        <div className="work_heading flex justify-between">
          <h4>SELECTED WORKS</h4>
          <h4>(2023 - 2024)</h4>
        </div>

        <div className="work_samples flex">
          <div className="work_container">
            <a
              target="_blank"
              href="https://www.behance.net/gallery/172036611/Mealy"
            >
              <div className="work_image">
                <img src={workImage1} alt="" />
              </div>
            </a>
            <p className="work_para">
              Mealy is a mobile application for ordering food and drink online.
              It provides convenience and efficient way for customers to order
              food and drinks.
            </p>
          </div>
          <div className="work_container">
            <a
              target="_blank"
              href="https://www.behance.net/gallery/198643173/Zimlora-Fashion-Website"
            >
              <div className="work_image">
                <img src={workImage2} alt="" />
              </div>
            </a>
            <p className="work_para">
              The Zim.lora project aimed to enhance the user experience and
              ensure a simple and seamless user purchase of fashion iteams on
              the website.
            </p>
          </div>
        </div>
        <div className="work_samples flex work_down">
          <div className="work_container">
            <a
              target="_blank"
              href="https://www.behance.net/gallery/191910287/Software-Agency-Website"
            >
              <div className="work_image">
                <img src={workImage3} alt="" />
              </div>
            </a>
            <p className="work_para">
              Quox is a software development company website, that provide
              cutting-edge solutions, expert insights, and a collaborative
              environment to enhance your software projects.
            </p>
          </div>
          <div className="work_container">
            <a
              target="_blank"
              href="https://www.behance.net/gallery/188316599/Avid-Reader-Website"
            >
              <div className="work_image">
                <img src={workImage4} alt="" />
              </div>
            </a>
            <p className="work_para">
              Avid Reader is a book store website where users can access various
              kinds of books. In addition,users can get book recommendations and
              make purchase of their favorite books.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

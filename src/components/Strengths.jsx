import "../styles/strength.css";
export default function Strengths() {
  return (
    <>
      <div className="strength_container">
        <h3 className="strength">Strengths</h3>
        <div className="strength_bigbox">
          <div className="strength_innerbox1">
            <p className="strength_box">User research</p>
            <p className="strength_box">User experience (ux)</p>
            <p className="strength_box">User centered design </p>
            <p className="strength_box">wireframing</p>
          </div>

          <div className="strength_innerbox2">
            <div className="strength_layerbox1">
              <p className="strength_box">prototyping</p>
              <p className="strength_box">User interface (ui)</p>
              <p className="strength_box">usability testing</p>
            </div>

            <div className="strength_layerbox2">
              <p className="strength_box">User experience stratagy</p>
              <p className="strength_box"> visual design </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import "./works.scss";

export default function Works() {
  const data = {};
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--sWV8Y0kc--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/kml9j34p9taplrnqtcez.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img src="assets\arrow.png" className="arrow left" alt="" />
      <img src="assets\arrow.png" className="arrow right" alt="" />
    </div>
  );
}

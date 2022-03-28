import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img
              className="user"
              src="https://www.buffalorising.com/wp-content/uploads/2021/04/Tech-Hub-Photo-6-scaled.jpg"
              alt=""
            />
            <img className="right" src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sapiente in vitae possimus impedit obcaecati, libero praesentium
            asperiores sint placeat perferendis neque quod accusantium, delectus
            quasi dolores reiciendis aut repellat?
          </div>
          <div className="bottom">
            <h3>Kevin</h3>
            <h4>TDP of M&T</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

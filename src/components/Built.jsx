function Built() {
  return (
    <section className="built">
      <div className="built__box">
        <h2 className="built__title">Built for real life</h2>
        <p className="built__text">
          <span>
            Cooking shouldn’t be complicated. These recipes come in under 30
            minutes of active time, fit busy schedules, and taste good enough to
            repeat.
          </span>
          <br />
          <br />
          <span>
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </span>
        </p>
      </div>
      <div>
        {" "}
        <img
          className="built__image"
          src="./images/image-home-real-life-large.webp"
          alt=""
        />
      </div>
    </section>
  );
}

export default Built;

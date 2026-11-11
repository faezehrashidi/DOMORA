import style from "./Whydomora.module.css";
const Whydomora = () => {
  return (
    <>
      <section className={style.whydomora}>
        <div className={style.head}>
          <h2>Why Choose DOMORA?</h2>
          <span>Your Trusted Partner in Every Property Decision.</span>
        </div>
        <div className={style.items}>
          <div className={style.card}>
            <h2>01. Professional Guidance</h2>
            <span>
              Expert advice and support to help you make the right property
              decisions.
            </span>
          </div>
          <div className={style.card}>
            <h2>02. Trusted Expertise</h2>
            <span>
              In-depth market knowledge and reliable real estate insights.
            </span>
          </div>
          <div className={style.card}>
            <h2>03. Personalized Solutions</h2>
            <span>
              Tailored property solutions designed around your needs and
              preferences.
            </span>
          </div>
          <div className={style.card}>
            <h2>04. Seamless Experience</h2>
            <span>
              A smooth, transparent, and stress-free property journey.
            </span>
          </div>
        </div>
        <div className={style.buttons}>
          <button className={style.Explore}>Explore Our Services</button>
          <button className={style.Contact}>Contact Our Experts</button>
        </div>
      </section>
    </>
  );
};

export default Whydomora;

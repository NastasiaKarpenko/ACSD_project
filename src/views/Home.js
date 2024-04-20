import Carousel from "../components/Carousel";
import Form from "../components/Form";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <div className="home-page">
      <div className="screen1-bg">
        <div className="screen1-motto">Innovate Your Shopping Journey</div>
      </div>

      <Carousel itemsLimit={5} />

      <div className="discount-section">
        <div className="inner-text">
          <h2>10% discount</h2>
          <Form />
        </div>
      </div>

      <div className="reasons-section">
        <div className="section3-text">
          <h2>Why should you choose our shop?</h2>
          <ul>
            <li>
              <strong>Exceptional Product Quality</strong>: We guarantee the
              highest quality products, carefully selected and rigorously tested
              to meet your standards.
            </li>
            <li>
              <strong>Outstanding Customer Service</strong>: Our dedicated
              support team ensures a seamless shopping experience from order to
              delivery.
            </li>
            <li>
              <strong>Fast and Reliable Shipping</strong>: We offer swift
              delivery with real-time tracking, so you always know where your
              package is.
            </li>
            <li>
              <strong>Competitive Prices and Deals</strong>: Enjoy attractive
              pricing and exclusive offers that make shopping with us even more
              beneficial.
            </li>
            <li>
              <strong>Flexible Return and Exchange Options</strong>: Your
              satisfaction is paramount. We offer easy returns and exchanges for
              a hassle-free experience.
            </li>
          </ul>
        </div>
      </div>

      <section className="FAQ-section">
        <div className="faq-image"></div>
        <FAQ />
      </section>
    </div>
  );
}
export default Home;

import "./Hero.css";


const Hero = ({ children }) => {
  return (
    <>
      {/* Green Background Section */}
      <div
        className="page-background"
      
      >
        <div className="background-content">
          {children}

          <section className="background-writeup">
            <h1>Earn extra cash online</h1>
            <p>
              ySense is a global online community with multiple earning
              options. <br />
              Join now and start earning with paid online surveys, cash
              offers and more!
            </p>
          </section>
        </div>
      </div>

      {/* White Section Below the Green Background */}
      <section className="features-section">
        <div className="feature-item">
          <h2>Paid Surveys</h2>
          <p>
            Earn cash for taking free paid surveys while influencing
            the next generation of products, services and much more.
          </p>
        </div>

        <div className="feature-item cash-offers">
          <h2>Cash Offers</h2>
          <p>
            Get paid for trying new products and services, downloading
            apps, signing up for websites, watching videos and more.
          </p>
        </div>

        <div className="feature-item">
          <h2>Referrals</h2>
          <p>
            Share Earn Daily with your friends and watch your earnings
            grow. You can earn rewards when people join through your
            referral link.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
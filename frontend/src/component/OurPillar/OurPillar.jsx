import React from "react";
import "./OurPillar.css";
import trusteddoctors from "../../assest/trustedDoctors.jpg";

const OurPillar = () => {
  return (
    <div className="OurPillerSection">
      <section className="WeTrusted">
        <div>
          <img src={trusteddoctors} alt="" />
        </div>
        <section className="EachTrusted">
          <div className="header">
            <h1>Why People Trust Us</h1>
            <p>
              With over 5 decades in the healthcare industry, we have built a
              reputation of being reliable and pioneers in Nigerian Healthcare
              and we remain leaders in our industry
            </p>
          </div>
          <div className="TrustUS">
            <div className="trust-us">
              <h2>Easy Access to Care</h2>
              <p>
                At St. Damian's Native Hospital, every aspect of your care is
                coordinated and teams of experts work together to provide
                exactly the care you need.
              </p>
            </div>
            <div className="trust-us">
              <h2>Unmatched Expertise</h2>
              <p>
                With over 52 years+ Experience. Our highly specialized experts
                are deeply experienced in treating complex conditions
              </p>
            </div>
            <div className="trust-us">
              <h2>Result Oriented</h2>
              <p>
                We prioritize making sure our results are what speak for us. And
                this is why our customers are happy.
              </p>
            </div>
            <div className="trust-us">
              <h2>We Listen</h2>
              <p>
                Our specialists will listen to your needs and evaluate your
                condition from every angle to make the very best healthcare plan
                for you.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default OurPillar;

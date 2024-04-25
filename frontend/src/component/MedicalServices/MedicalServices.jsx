import React from "react";
import "./MedicalServices.css";
import orthopedics from "../../assest/orthopedics.jpg";
import pharmacy from "../../assest/pharmacy.jpg";
import kidneytrans from "../../assest/kidneytrans.jpg";
const MedicalServices = () => {
  return (
    <div className="OurServices">
      <h1>Some Of Our Medical Services</h1>
      <section className="medicalServices">
        <div>
          <img src={orthopedics} alt="" />
          <h2>Orthopedics & Trauma</h2>
          <p>Learn More</p>
        </div>
        <div>
          <img src={pharmacy} alt="" />
          <h2>Pharmacy</h2>
          <p>Learn More</p>
        </div>
        <div>
          <img src={kidneytrans} alt="" />
          <h2>Kidney Transplantation</h2>
          <p>Learn More</p>
        </div>
      </section>
    </div>
  );
};

export default MedicalServices;

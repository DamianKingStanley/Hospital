import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import HeroSection from "../../component/HeroSection/HeroSection";
import SymptomChecker from "../../component/SymptomChecker/SymptomChecker";
import Footer from "../../component/Footer/Footer";
import MedicalServices from "../../component/MedicalServices/MedicalServices";
import OurPillar from "../../component/OurPillar/OurPillar";
import ContactUs from "../../component/ContactUs/ContactUs";
// import SkinDisease from "../../component/Disease/Disease";
// import BottomNavbar from "../../component/BottomNavbar/BottomNavbar";
// import HeartRateCalculator from "../../component/HeartRateCalculator/HeartRateCalculator";
// import Speed from "../../component/Speed/Speed";
// import DistanceCalculator from "../../component/DistanceCalculator/DistanceCalculator";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("distance");

  return (
    <div className="HomeSection">
      <Navbar />
      <NavigationBar />
      <HeroSection />
      <SymptomChecker />
      <MedicalServices />
      <OurPillar />
      <ContactUs />
      {/* <SkinDisease /> */}
      {/* <DistanceCalculator />
      {selectedTab === "speed" && <Speed />}
      {selectedTab === "heart" && <HeartRateCalculator />} */}
      {/* <BottomNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} /> */}
      <Footer />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import symptomsData from "../../component/SymptomChecker/SymptomData";
import "./SymptomChecker.css";
import check from "../../assest/checkdoctor.jpg";
import { FaTimes } from "react-icons/fa";

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [response, setResponse] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const matchedResponse = matchSymptoms(symptoms);
    setResponse(matchedResponse);
    setVisible(true); // Make the response visible when submitting
  };

  const matchSymptoms = (inputSymptoms) => {
    const matchedSymptom = symptomsData.find(
      (item) => item.symptom.toLowerCase() === inputSymptoms.toLowerCase()
    );
    return matchedSymptom
      ? matchedSymptom.response
      : "We couldn't identify the cause of your symptoms. Please check that your spelling is right or consult a doctor.";
  };

  const handleClose = () => {
    setVisible(false); // Hide the response when the close icon is clicked
  };

  return (
    <div id="symptomChecker">
      <section className="symptomChecker">
        <h1>Symptom Checker</h1>
        <div className="symptonContainer">
          <div>
            <img id="checkImage" src={check} alt="" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="symptoms">Enter your symptoms:</label> <br />
              <input
                type="text"
                id="symptoms"
                value={symptoms}
                onChange={handleSymptomsChange}
                placeholder="e.g., cough, fever"
              />{" "}
              <br /> <br />
              <button type="submit">Submit</button> <br />
              {visible && response && (
                <div className="responses">
                  <h6>Response:</h6>
                  <p>
                    {response}
                    <FaTimes className="close-button" onClick={handleClose} />
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SymptomChecker;

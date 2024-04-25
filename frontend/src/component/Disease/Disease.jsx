import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";

const SkinDisease = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedImage) return; // Exit early if no image is selected

    const data = new FormData();
    data.append("image", selectedImage);
    data.append("description", description);

    const options = {
      method: "POST",
      url: "https://detect-skin-disease.p.rapidapi.com/facebody/analysis/detect-skin-disease",
      headers: {
        "X-RapidAPI-Key": "d3e5930dd4msh94ac3edf05977a4p164700jsn5e2c7bf828e0",
        "X-RapidAPI-Host": "detect-skin-disease.p.rapidapi.com",
        // ...data.getHeaders(),
      },
      data: data,
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Skin Diseases</h1>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Selected"
          style={{ maxWidth: "100%", marginTop: "10px" }}
        />
      )}
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter description"
        style={{ width: "100%", marginTop: "10px" }}
      />
      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default SkinDisease;

import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const AddValue = ({ deviceId, onClose }) => {
  const [formData, setFormData] = useState({
    Test_id: "",
    Device_id: deviceId,
    OR: "",
    ISS: "",
    Concentration: "",
    Brix: "",
    Pol: "",
    Purity: "",
    SR: "",
    Longitude: "",
    Latitude: "",
    Temp_surronding: "",
    Temp_solution: "",
    Date_Time: new Date().toISOString(),
  });

  useEffect(() => {
    // Fetch geolocation data
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prevData) => ({
            ...prevData,
            Latitude: position.coords.latitude.toFixed(6),
            Longitude: position.coords.longitude.toFixed(6),
          }));
        },
        (error) => {
          console.error("Error obtaining location:", error.message);
          alert("Unable to fetch location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");

    try {
      // Replace with your API call
      const response = await fetch("/api/submit-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit data.");

      const result = await response.json();
      console.log("Server Response:", result);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error.message);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className="landing-page">
      {/* Close Button */}
      <button
        className="close-button"
        onClick={onClose}
        aria-label="Close form"
        title="Close"
      >
        ×
      </button>

      <h2>Device Data Submission</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Test ID:
          <input
            type="text"
            name="Test_id"
            value={formData.Test_id}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          OR:
          <input
            type="number"
            name="OR"
            value={formData.OR}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          ISS:
          <input
            type="number"
            name="ISS"
            value={formData.ISS}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Concentration:
          <input
            type="number"
            name="Concentration"
            value={formData.Concentration}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Brix:
          <input
            type="number"
            name="Brix"
            value={formData.Brix}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Pol:
          <input
            type="number"
            name="Pol"
            value={formData.Pol}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Purity:
          <input
            type="number"
            name="Purity"
            value={formData.Purity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          SR:
          <input
            type="number"
            name="SR"
            value={formData.SR}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Temp Surrounding:
          <input
            type="number"
            name="Temp_surronding"
            value={formData.Temp_surronding}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Temp Solution:
          <input
            type="number"
            name="Temp_solution"
            value={formData.Temp_solution}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Longitude:
          <input
            type="number"
            name="Longitude"
            value={formData.Longitude}
            readOnly
          />
        </label>
        <label>
          Latitude:
          <input
            type="number"
            name="Latitude"
            value={formData.Latitude}
            readOnly
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddValue;

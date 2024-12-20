import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    levelOfEducation: "",
    collegeName: "",
    collegeYear: "",
    stream: "",
    specialization: "",
    address: "",
    aadharCardNumber: "",
    phoneNumber: "",
    abcId: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(result.message);

    setFormData({
      studentName: "",
      levelOfEducation: "",
      collegeName: "",
      collegeYear: "",
      stream: "",
      specialization: "",
      address: "",
      aadharCardNumber: "",
      phoneNumber: "",
      abcId: "",
      email: "",
    });
  };

  return (
    <div className="form-container">
      <h1>Student Topic Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="aadharCardNumber"
          placeholder="Aadhar Card Number"
          value={formData.aadharCardNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="levelOfEducation"
          placeholder="Level of Education"
          value={formData.levelOfEducation}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="collegeName"
          placeholder="College Name"
          value={formData.collegeName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="collegeYear"
          placeholder="College Year"
          value={formData.collegeYear}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="stream"
          placeholder="Stream"
          value={formData.stream}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleChange}
        />
        <input
          type="text"
          name="abcId"
          placeholder="ABC ID"
          value={formData.abcId}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

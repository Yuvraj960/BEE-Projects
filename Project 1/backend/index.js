const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb://127.0.0.1:27017/studentSurvey", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const studentSchema = new mongoose.Schema({
    studentName: String,
    levelOfEducation: String,
    collegeName: String,
    collegeYear: String,
    stream: String,
    specialization: String,
    address: String,
    aadharCardNumber: String,
    phoneNumber: String,
    abcId: String,
    email: String,
});

const Student = mongoose.model("Student", studentSchema);

app.post("/submit", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred!", error });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

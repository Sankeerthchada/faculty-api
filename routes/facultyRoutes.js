const express = require("express");
const router = express.Router();
const Faculty = require("../models/faculty");


router.post("/faculties", async (req, res) => {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});

router.get("/faculty", async (req, res) => {
    const faculties = await Faculty.find();
    res.send(faculties);
});

module.exports = router;
const express = require("express")
const router = express.Router();
const Person = require("../Models/Person")

// Get all the persons details
router.get("/", async (req, res) => {
    try {
        const response = await Person.find();
        res.status(200).json(response)

    } catch (err) {
        console.log(err)
    }
})

// get perticular person details
router.get("/:workType", async (req, res) => {
    try {
        const work = req.params.workType;
        if (work == "chef" || work == "manager" || work == "waiter") {
            const response = await Person.find({ work });
            res.status(200).json(response);
            console.log(`all ${work} is feached`)
        } else {
            res.status(400).json("Invalid work")
        }


    } catch (error) {
        console.log(error)
        res.status(501).json({ "message": "internal server error" })
    }
})

// add new person in the list
router.post("/", async (req, res) => {
    try {
        const person = new Person(req.body);
        const response = await person.save();
        res.status(200).json(response);
        console.log("user entry successfully")
    } catch (error) {
        console.log(error);
    }
})

// update the person details

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const personNewData = req.body;
        const response = await Person.findByIdAndUpdate(id, personNewData, {
            new: true,
            runValidators: true
        })
        if (!response) {
            res.status(404).json({ error: "person not found" })
        }
        res.status(200).json(response)
        console.log("Data is successfully updated")
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

// delete perticular person data
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Person.deleteOne({ _id: id });
        res.status(200).json(response)
        console.log("data is successfully deleted")
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }


})

module.exports = router;
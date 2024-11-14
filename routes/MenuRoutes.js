const express = require("express")
const router = express.Router();
const Menu = require("../Models/Menu");

// get all menu items
router.get("/", async (req, res) => {
    try {
        const response = await Menu.find();
        res.status(200).json(response);
        console.log("all menu Intem is feached");
    } catch (error) {
        res.status(500).json({ error })
    }
})

// add new menu item

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const newMenu = new Menu(req.body);
        const response = await newMenu.save();
        console.log(response)
        res.status(200).json(response);
        console.log("Menu is successfully added");
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})


// update a menu 
router.put("/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const updateMenu = req.body;
        const response = await Menu.findByIdAndUpdate(id, updateMenu, {
            new: true,
            validators: true
        })
        console.log(response)
        if (!response) {
            res.status.json({
                error: "Menu not found"
            })
        }else{
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

// delete a mentu item

router.delete("/:id",async(req,res)=>{
try {
    const id = req.params.id;
    const response= await Menu.findByIdAndDelete(id);
    if(!response){
        console.log("menu is not found");
        res.status(404).json({error:"Menu is not found"})
    }else{
        console.log(response)
        res.status(200).json(response);
    }
} catch (error) {
    res.status(500).json({error:"Internal Server Error"})
}
})

module.exports = router;
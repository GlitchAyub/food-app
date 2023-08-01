const express = require("express");
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try{
        res.send([global.food_items,global.foodCategories])
        
    }catch(e){
        console.error(e.message);
        res.send("Server error")
    }
})

module.exports = router;
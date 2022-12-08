const express=require ('express')
const router = express.Router();
const blockcontroller=require('../controllers/blockcontroller')

router.get("/test-me",function (req,res){
    res.send("api")
})
router.get('/bitcoin', blockcontroller.getcrpto) 


module.exports=router
const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get all user
router.get('/all', async (req, res)=>{
    try{
        const users = await User.find();
        res.json(users);

    }catch(err){
        res.json({message: err});
    }
});

//submit a user
router.post('/register', async(req,res) => {
    const user =new User({
        fname : req.body.fname,
        lname : req.body.lname,
        phno : req.body.phno,
        password : req.body.password,
    });
    try{
    const savedUser =await user.save();
    res.json(savedUser);
    }
    catch(err)
    {
        res.json({message : err});
    }
});

//specific user
router.get('/particular/:userId',async(req,res)=>{
    try{
    const user = await Post.findById(req.params.userId);
    res.json(user);
    }catch(err){
        res.json({message: err});
    }
});

//Delete Post
router.delete('/delete/:userId',async(req,res)=>{
    try{
        const removedPost = await Post.remove({_id:req.params.userId});
        res.json(removedPost);
    }catch(err) {
        res.json({message : err});
    }
   
});


module.exports = router;
var express = require('express');
var router = express.Router();
const bcrypt =  require('bcrypt')
var User = require('../models/user');

router.get('/', async (req, res, next) =>{
	return res.render('index.ejs');
});
router.get('/login', async (req, res, next)=> {
	return res.render('login.ejs');
});
router.post('/', async(req, res, next)=> {
	var name =req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	var color = req.body.color
    if(!name || !email || !password || !color){
		res.status(400).json({msg : "Enter valid details"},)
	}
	else 
	{ 
		let user = await User.findOne({email})
		if (user){
			return res.status(400).json({msg : "User already exists"})
		}
		user = new User({
			email,
			name,
			color,
			password
		})
		const success = await user.save();
		if(success){
			res.status(200).json({msg: "User created successfully"})
		}
		else{
			res.status(400).json({msg:"User not created try again"})
		}
	}
});
router.post('/validate',async(req,res,next)=>{
	console.log(req.body);
	var email = req.body;
	if(!email){
		res.status(400).json('Enter valid email');
	}
	let user = await User.findOne({email});
	if(!user){
		res.status(400).json({msg:"User doesnt exist"});
	}
	colour = user.colour;
	password = user.password;
	res.json({colour : colour,
	          password : password})
})
router.post('/login',async(req,res,next)=>{
	console.log(req.body);
	const email = req.email;
	const pass = req.password;
	let user = await User.findOne({email : email});
	if(!user){
		return res.status(400).json({msg : "User doesn't exist"});
	}
	if(pass != user.password){
		res.json(400).json({msg: 'Invalid Password'});
	}
	res.json(200).json({msg : 'Authenticated',stats:true})
})
module.exports = router
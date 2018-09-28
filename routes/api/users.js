const express = require('express')
const router = express.Router()
var User = require("../../models/User")
var gravatar = require("gravatar")
var bcrypt = require("bcryptjs")


//@route    GET api/users/test
//@desc     test route
//@access   PUBLIC
router.get("/test",(req,res) => {res.json({msg:"it works"})})



//@route    POST api/users/register
//@desc     register route
//@access   PUBLIC
router.post("/register",(req,res) => {
  User.findOne({email:req.body.email})
  .then(user => {
  	if(user){
  		return res.status(400).json({email:"Email already registered"})
  	}else{
  		
        const avatar = gravatar.url(req.body.email,{s : "200",r : "pg",d : "mm"})


  		const newUser = new User({
  			name : req.body.name,
  			email: req.body.email,
  			avatar,
  			password:req.body.password
  		}) 

  		bcrypt.genSalt(10,(err,salt) => {
  			bcrypt.hash(newUser.password,salt,(err,hash) => {
  				if (err) throw err;
  				newUser.password = hash
  				newUser.save()
  				.then(user => res.json(user))
  				.catch(err => res.json(err))
  			})
  		})
  	}
  })
})















module.exports = router
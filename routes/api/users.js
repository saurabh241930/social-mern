const express = require('express')
const router = express.Router()
var User = require("../../models/User")
var gravatar = require("gravatar")
var bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys");
const passport = require("passport")


const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")



// @route   GET api/user/test
// @desc    Tests route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'API connected' }));


//@route    POST api/users/login
//@desc     login route
//@access   PUBLIC
router.post("/login",(req,res) => {

	const {errors,isValid} = validateLoginInput(req.body) 

	if(!isValid){
		return res.status(400).json(errors)
	}

 const email = req.body.email;
 const password = req.body.password

  User.findOne({email:email})
  .then(user => {
  	if(!user){
  		errors.email = "user not found"
  		return res.status(404).json(errors)
  	}else{

  		bcrypt.compare(password,user.password)
  		.then(isMatch => {
  			if (isMatch) {

              const payload = {id:user.id,name : user.name,avatar:user.avatar}

              jwt.sign(payload,
              	keys.secretOrKey,
              	{expiresIn : 3600},
              	(err,token) => {
                  res.json({
                  	success:true,
                  	token: 'Bearer' + token
                  })
              	})

              
  			} else {
  				errors.password = "Incorrect password"
              return res.status(400).json(errors)
  			}
  		})
  			}
  		})
  	})
  




  


//@route    POST api/users/register
//@desc     register route
//@access   PUBLIC
router.post("/register",(req,res) => {

	const {errors,isValid} = validateRegisterInput(req.body) 

	if(!isValid){
		return res.status(400).json(errors)
	}


  User.findOne({email:req.body.email})
  .then(user => {
  	if(user){
  		errors.email = "Oops! Email already registered"
  		return res.status(400).json(errors)
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



router.get('/current', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.json(req.user);
    }
);














module.exports = router
const express = require('express')
const router = express.Router()
var User = require("../../models/User")
var gravatar = require("gravatar")
var bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys");
const passport = require("passport")




//@route    POST api/users/login
//@desc     login route
//@access   PUBLIC
router.post("/login",(req,res) => {

 const email = req.body.email;
 const password = req.body.password

  User.findOne({email:email})
  .then(user => {
  	if(!user){
  		return res.status(404).json({email:"Email not found"})
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
              return res.status(400).json({password : "incorrect password"})
  			}
  		})
  			}
  		})
  	})
  




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



router.get('/current', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.json(req.user);
    }
);














module.exports = router
const express = require('express')
const router = express.Router()


//@route    GET api/users/test
//@desc     test route
//@access   PUBLIC
router.get("/test",(req,res) => {
  res.json({msg:"it works"})
})

module.exports = router
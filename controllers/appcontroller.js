const axios = require('axios');
const CircularJSON = require('circular-json');

exports.getNearby = async (req,res) => {

    const details = req.body
    

   const data = await axios.post('https://monkfish-app-29mfl.ondigitalocean.app/',details);
   console.log(data);
        res.status(200).json({
            "message":"success",
            "response":data.data
        })
}
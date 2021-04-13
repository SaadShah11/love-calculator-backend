var axios = require("axios").default;

const calculateLove = async (req, res, next) => {
var options = {
  method: 'GET',
  url: 'https://love-calculator.p.rapidapi.com/getPercentage',
  params: {fname: 'John', sname: 'Alice'},
  headers: {
    'x-rapidapi-key': '0a5ae335a8msh8eb50766018908ep1a2b3ejsnd057c1dd3f70',
    'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    res.status(200).send(JSON.stringify(response.data));
    
}).catch(function (error) {
	console.error(error);
});

}

exports.calculateLove = calculateLove

//const mongoose = require('mongoose')
const Love = require('../models/Love')

var unirest = require("unirest");

// mongoose.connect(
//     'mongodb+srv://saad:saad@schoolhub.zmtqr.mongodb.net/dashboard?retryWrites=true&w=majority'
// ).then(() => {
//     console.log("DB connected")
// }).catch(() => {
//     console.log('Error occured, DB connection failed ')
// })

const calculateLove = async (req, res, next) => {


    let firstName = req.body.firstName
    console.log(firstName)
    let secondName = req.body.secondName
    console.log(secondName)

    var req = unirest("GET", "https://love-calculator.p.rapidapi.com/getPercentage");

    req.query({
        "fname": firstName,
        "sname": secondName
    });
    //console.log(res.query)

    req.headers({
        "x-rapidapi-key": "0a5ae335a8msh8eb50766018908ep1a2b3ejsnd057c1dd3f70",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "useQueryString": true
    });

    req.end(function (res, next) {
        //if (res.error) throw new Error(res.error);

        console.log(res.body);
        //res.status(200).send(JSON.stringify(res.body));
    });
    //let response = res.body;
    //console.log(response)
    // res.send({ some: 'json' });
    // res.status(404).send('Sorry, we cannot find that!');
    // res.status(500).send({ error: 'something blew up' });
}

exports.calculateLove = calculateLove
var unirest = require("unirest");

var req = unirest("GET", "https://jayeshtharani-listcountries-v1.p.rapidapi.com/listallcountries");

req.headers({
	"authorization": "Basic YWljaGE6YWljaGE=",
	"x-rapidapi-key": "598abbf8e5mshccf3be0f812557bp174e30jsn119314496c4b",
	"x-rapidapi-host": "jayeshtharani-listcountries-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
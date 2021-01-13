const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4626ba7e25msh2ba7b913942c41bp1244b2jsn5912da288665",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
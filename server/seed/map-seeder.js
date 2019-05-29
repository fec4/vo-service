var Map = require("../models/maps");

var mongoose = require("mongoose");

mongoose.connect("localhost:3000/business");

var maps = [
	new Map({
		address: "1493 Ullamcorper, St.",
		city: "Springfield",
		state: "IL",
		zip_code: "20452"
	}),
	new Map({
		address: "3116 Ac, St.",
		city: "Bear",
		state: "DE",
		zip_code: "27170"
	}),
	new Map({
		address: "7204 Malesuada St.",
		city: "Wichita",
		state: "KS",
		zip_code: "99924"
	}),
	new Map({
		address: "P.O. Box 339, 2308 Donec Ave",
		city: "Nashville",
		state: "TN",
		zip_code: "28055"
	}),
	new Map({
		address: "P.O. Box 133, 6044 Sed Ave",
		city: "Idaho Falls",
		state: "ID",
		zip_code: "57122"
	}),
	new Map({
		address: "4710 Orci St.",
		city: "Boston",
		state: "MA",
		zip_code: "89997"
	}),
	new Map({
		address: "912-1244 Malesuada Rd.",
		city: "Racine",
		state: "WI",
		zip_code: "31051"
	}),
	new Map({
		address: "319 A Street",
		city: "Memphis",
		state: "TN",
		zip_code: "29450"
	}),
	new Map({
		address: "Ap #861-4477 Ornare, Ave",
		city: "Des Moines",
		state: "IA",
		zip_code: "32709"
	}),
	new Map({
		address: "Ap #740-3098 Semper St.",
		city: "Duluth",
		state: "MN",
		zip_code: "66665"
	}),
	new Map({
		address: "2627 Euismod Ave",
		city: "Kenosha",
		state: "WI",
		zip_code: "69754"
	}),
	new Map({
		address: "Ap #729-4517 Neque. Road",
		city: "Fort Smith",
		state: "AR",
		zip_code: "71788"
	}),
	new Map({
		address: "394-3899 Dignissim Rd.",
		city: "Mobile",
		state: "AL",
		zip_code: "35758"
	}),
	new Map({
		address: "1242 Nunc Avenue",
		city: "Frankfort",
		state: "KY",
		zip_code: "68145"
	}),
	new Map({
		address: "9950 Tristique St.",
		city: "Milwaukee",
		state: "WI",
		zip_code: "34772"
	}),
	new Map({
		address: "P.O. Box 992, 5431 Lobortis. Avenue",
		city: "Owensboro",
		state: "KY",
		zip_code: "17247"
	}),
	new Map({
		address: "P.O. Box 647, 4213 Sociis Avenue",
		city: "Meridian",
		state: "ID",
		zip_code: "48298"
	}),
	new Map({
		address: "P.O. Box 658, 5687 Nulla. Avenue",
		city: "Knoxville",
		state: "TN",
		zip_code: "83273"
	}),
	new Map({
		address: "989-4916 Tristique Road",
		city: "Rochester",
		state: "MN",
		zip_code: "97003"
	}),
	new Map({
		address: "Ap #689-8778 Nunc Road",
		city: "Tacoma",
		state: "WA",
		zip_code: "61155"
	}),
	new Map({
		address: "Ap #243-4369 Ipsum. Avenue",
		city: "Houston",
		state: "TX",
		zip_code: "83405"
	}),
	new Map({
		address: "P.O. Box 261, 951 Semper Street",
		city: "West Valley City",
		state: "UT",
		zip_code: "50588"
	}),
	new Map({
		address: "375-9745 Eleifend Avenue",
		city: "Huntsville",
		state: "AL",
		zip_code: "36725"
	}),
	new Map({
		address: "483-949 A, Road",
		city: "Orlando",
		state: "FL",
		zip_code: "95549"
	}),
	new Map({
		address: "1422 Eu, St.",
		city: "Erie",
		state: "PA",
		zip_code: "12620"
	}),
	new Map({
		address: "9927 Sapien, St.",
		city: "St. Petersburg",
		state: "FL",
		zip_code: "58857"
	}),
	new Map({
		address: "490-9050 Tincidunt St.",
		city: "Jackson",
		state: "MS",
		zip_code: "76431"
	}),
	new Map({
		address: "Ap #402-6807 Phasellus Street",
		city: "Pittsburgh",
		state: "PA",
		zip_code: "53635"
	}),
	new Map({
		address: "Ap #792-1296 Odio. St.",
		city: "Newark",
		state: "DE",
		zip_code: "54688"
	}),
	new Map({
		address: "Ap #574-2401 Porttitor Ave",
		city: "Baton Rouge",
		state: "LA",
		zip_code: "97465"
	}),
	new Map({
		address: "Ap #457-4220 Dui Rd.",
		city: "Springfield",
		state: "IL",
		zip_code: "71170"
	}),
	new Map({
		address: "Ap #315-3429 Eleifend St.",
		city: "Lincoln",
		state: "NE",
		zip_code: "65715"
	}),
	new Map({
		address: "7308 Metus. Rd.",
		city: "Oklahoma City",
		state: "OK",
		zip_code: "28187"
	}),
	new Map({
		address: "Ap #288-4982 Erat Rd.",
		city: "College",
		state: "AK",
		zip_code: "99660"
	}),
	new Map({
		address: "3306 Pellentesque Av.",
		city: "Idaho Falls",
		state: "ID",
		zip_code: "50265"
	}),
	new Map({
		address: "6545 Feugiat Avenue",
		city: "Independence",
		state: "MO",
		zip_code: "90657"
	}),
	new Map({
		address: "5303 Est Av.",
		city: "Montpelier",
		state: "VT",
		zip_code: "77085"
	}),
	new Map({
		address: "Ap #634-8448 Diam Rd.",
		city: "Grand Island",
		state: "NE",
		zip_code: "59495"
	}),
	new Map({
		address: "Ap #655-3606 Erat, Road",
		city: "Jonesboro",
		state: "AR",
		zip_code: "72316"
	}),
	new Map({
		address: "588-705 Enim. Rd.",
		city: "Reading",
		state: "PA",
		zip_code: "78905"
	}),
	new Map({
		address: "5393 Sed Rd.",
		city: "Kapolei",
		state: "HI",
		zip_code: "42748"
	}),
	new Map({
		address: "718-3455 Urna, Ave",
		city: "Lewiston",
		state: "ME",
		zip_code: "41168"
	}),
	new Map({
		address: "1303 Est, St.",
		city: "Madison",
		state: "WI",
		zip_code: "83663"
	}),
	new Map({
		address: "9552 Sit Ave",
		city: "Kearney",
		state: "NE",
		zip_code: "74030"
	}),
	new Map({
		address: "309-2618 Neque Street",
		city: "Aurora",
		state: "IL",
		zip_code: "70898"
	}),
	new Map({
		address: "435-4457 Nisi. Street",
		city: "Phoenix",
		state: "AZ",
		zip_code: "85400"
	}),
	new Map({
		address: "Ap #932-5409 Et St.",
		city: "Topeka",
		state: "KS",
		zip_code: "44632"
	}),
	new Map({
		address: "911 Lectus St.",
		city: "Missoula",
		state: "MT",
		zip_code: "92975"
	}),
	new Map({
		address: "621 Consectetuer Av.",
		city: "Owensboro",
		state: "KY",
		zip_code: "16061"
	}),
	new Map({
		address: "P.O. Box 808, 9567 Ut Ave",
		city: "Evansville",
		state: "IN",
		zip_code: "75092"
	}),
	new Map({
		address: "P.O. Box 667, 883 Nulla Rd.",
		city: "Dover",
		state: "DE",
		zip_code: "18165"
	}),
	new Map({
		address: "836-3526 Aliquam Ave",
		city: "Austin",
		state: "TX",
		zip_code: "40888"
	}),
	new Map({
		address: "P.O. Box 118, 2338 Lacus Road",
		city: "Gary",
		state: "IN",
		zip_code: "18937"
	}),
	new Map({
		address: "P.O. Box 344, 6381 Mauris Rd.",
		city: "Colorado Springs",
		state: "CO",
		zip_code: "23550"
	}),
	new Map({
		address: "Ap #574-7443 Eu St.",
		city: "Indianapolis",
		state: "IN",
		zip_code: "34238"
	}),
	new Map({
		address: "9665 Fusce Avenue",
		city: "Juneau",
		state: "AK",
		zip_code: "99575"
	}),
	new Map({
		address: "188-6947 Sodales Ave",
		city: "Wyoming",
		state: "WY",
		zip_code: "49259"
	}),
	new Map({
		address: "Ap #155-6991 Interdum Av.",
		city: "Dallas",
		state: "TX",
		zip_code: "94287"
	}),
	new Map({
		address: "Ap #445-5544 Egestas. St.",
		city: "Columbia",
		state: "MD",
		zip_code: "79568"
	}),
	new Map({
		address: "P.O. Box 347, 6592 Ultricies Road",
		city: "Olympia",
		state: "WA",
		zip_code: "83934"
	}),
	new Map({
		address: "541-8184 Per Ave",
		city: "Miami",
		state: "FL",
		zip_code: "69829"
	}),
	new Map({
		address: "216-1102 Tempus Rd.",
		city: "Omaha",
		state: "NE",
		zip_code: "30716"
	}),
	new Map({
		address: "9027 Erat St.",
		city: "Racine",
		state: "WI",
		zip_code: "84906"
	}),
	new Map({
		address: "922-9281 Elit, Av.",
		city: "Juneau",
		state: "AK",
		zip_code: "99862"
	}),
	new Map({
		address: "Ap #863-1123 Et Av.",
		city: "Hillsboro",
		state: "OR",
		zip_code: "21631"
	}),
	new Map({
		address: "556-2765 Nascetur Rd.",
		city: "Portland",
		state: "OR",
		zip_code: "82978"
	}),
	new Map({
		address: "Ap #597-7242 Lorem, St.",
		city: "Sterling Heights",
		state: "MI",
		zip_code: "55408"
	}),
	new Map({
		address: "Ap #225-6086 Netus Avenue",
		city: "Glendale",
		state: "AZ",
		zip_code: "85918"
	}),
	new Map({
		address: "P.O. Box 579, 9566 Diam Avenue",
		city: "Evansville",
		state: "IN",
		zip_code: "48292"
	}),
	new Map({
		address: "P.O. Box 696, 9524 Iaculis Ave",
		city: "Newark",
		state: "DE",
		zip_code: "86396"
	}),
	new Map({
		address: "Ap #645-4143 Elit Ave",
		city: "Iowa City",
		state: "IA",
		zip_code: "47761"
	}),
	new Map({
		address: "1741 Ut, Rd.",
		city: "Hattiesburg",
		state: "MS",
		zip_code: "77315"
	}),
	new Map({
		address: "Ap #925-7495 Nonummy St.",
		city: "Overland Park",
		state: "KS",
		zip_code: "50231"
	}),
	new Map({
		address: "184-9166 Senectus St.",
		city: "Cincinnati",
		state: "OH",
		zip_code: "79749"
	}),
	new Map({
		address: "423-9598 Dolor Rd.",
		city: "Pocatello",
		state: "ID",
		zip_code: "85949"
	}),
	new Map({
		address: "1165 Dictum. Street",
		city: "Spokane",
		state: "WA",
		zip_code: "57036"
	}),
	new Map({
		address: "Ap #333-3297 Congue Av.",
		city: "Nampa",
		state: "ID",
		zip_code: "80590"
	}),
	new Map({
		address: "991-7358 Metus St.",
		city: "Southaven",
		state: "MS",
		zip_code: "52244"
	}),
	new Map({
		address: "389-815 Inceptos Rd.",
		city: "Fort Smith",
		state: "AR",
		zip_code: "72550"
	}),
	new Map({
		address: "332-2092 Sapien. Av.",
		city: "Colorado Springs",
		state: "CO",
		zip_code: "10451"
	}),
	new Map({
		address: "P.O. Box 756, 110 Dapibus St.",
		city: "Wichita",
		state: "KS",
		zip_code: "32087"
	}),
	new Map({
		address: "P.O. Box 203, 9669 Eleifend Rd.",
		city: "New Orleans",
		state: "LA",
		zip_code: "88777"
	}),
	new Map({
		address: "440-2763 Felis. Street",
		city: "Tuscaloosa",
		state: "AL",
		zip_code: "36613"
	}),
	new Map({
		address: "1006 A, Street",
		city: "Kearney",
		state: "NE",
		zip_code: "45605"
	}),
	new Map({
		address: "P.O. Box 675, 2446 Ultricies Street",
		city: "Sandy",
		state: "UT",
		zip_code: "68501"
	}),
	new Map({
		address: "2765 Tempus St.",
		city: "Henderson",
		state: "NV",
		zip_code: "41000"
	}),
	new Map({
		address: "P.O. Box 584, 113 Metus. Av.",
		city: "Boston",
		state: "MA",
		zip_code: "13485"
	}),
	new Map({
		address: "620-7986 Proin Av.",
		city: "South Burlington",
		state: "VT",
		zip_code: "23864"
	}),
	new Map({
		address: "Ap #186-7469 Ipsum. St.",
		city: "Clarksville",
		state: "TN",
		zip_code: "61439"
	}),
	new Map({
		address: "837-5177 Ullamcorper, Road",
		city: "Lakewood",
		state: "CO",
		zip_code: "81344"
	}),
	new Map({
		address: "767-4321 Donec Avenue",
		city: "Hartford",
		state: "CT",
		zip_code: "19142"
	}),
	new Map({
		address: "1679 Iaculis, Rd.",
		city: "Allentown",
		state: "PA",
		zip_code: "35759"
	}),
	new Map({
		address: "518-521 Euismod Ave",
		city: "Chicago",
		state: "IL",
		zip_code: "75879"
	}),
	new Map({
		address: "417-3120 Adipiscing. Ave",
		city: "Savannah",
		state: "GA",
		zip_code: "63740"
	}),
	new Map({
		address: "P.O. Box 972, 5150 Ante Rd.",
		city: "Phoenix",
		state: "AZ",
		zip_code: "85214"
	}),
	new Map({
		address: "P.O. Box 558, 9586 Facilisis. Street",
		city: "San Francisco",
		state: "CA",
		zip_code: "93484"
	}),
	new Map({
		address: "Ap #485-2357 Luctus Ave",
		city: "Joliet",
		state: "IL",
		zip_code: "90429"
	}),
	new Map({
		address: "5246 Tristique Rd.",
		city: "Tuscaloosa",
		state: "AL",
		zip_code: "35503"
	}),
	new Map({
		address: "Ap #456-7608 Nibh St.",
		city: "Dover",
		state: "DE",
		zip_code: "92069"
	}),
	new Map({
		address: "Ap #608-1172 At Ave",
		city: "Springdale",
		state: "AR",
		zip_code: "71899"
	})
]

var done = 0;

for(var i = 0; i < maps.length; i++) {
  mongoose.save(function(err, result) {
    done++;
    if (done === maps.length) {
      exit();
    }
  })
}

function exit() {
  mongoose.disconnect();
}
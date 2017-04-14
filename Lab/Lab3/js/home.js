var dArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var zodiacYear = ["Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Hourse","Goat"];
// document.getElementById("after").onload = function() {retriveCookie()};
document.getElementById("firstname").value = getCookie("firstname");
document.getElementById("lastname").value = getCookie("lastname");
document.getElementById("citizenId").value = getCookie("citizenId");
document.getElementById("birthday").value = getCookie("birthday");
document.getElementById("dayofbirth").value = getCookie("dayofbirth");
document.getElementById("zodiacSign").value = getCookie("zodiacSign");
document.getElementById("zodiacYear").value = getCookie("zodiacYear");
document.getElementById("housenumber").value = getCookie("housenumber");
document.getElementById("street").value = getCookie("street");
document.getElementById("city").value = getCookie("city");
document.getElementById("province").value = getCookie("province");
document.getElementById("zipcode").value = getCookie("zipcode");
document.getElementById("phonenumber").value = getCookie("phonenumber");
document.getElementById("cellphonenumber").value = getCookie("cellphonenumber");



function calculateInfo(){
	
	var birthDay = document.getElementById("birthday").value ;
	birthDay = birthDay.split("-");
	var year = parseInt(birthDay[0]) ;
	var month = parseInt(birthDay[1]) ;
	var day = parseInt(birthDay[2]) ;
	// find zodiacSign
	document.getElementById("zodiacSign").value = calculateZodiacSign(day,month);
	
	// find  zodiacYear 
	document.getElementById("zodiacYear").value = calculateZodiacYear(year);
	
	// find day of  birth
	document.getElementById("dayofbirth").value = calculateDayOfBirth(day,month,year);


}

function calculateZodiacSign(day,month){
	var zodiacSign  ;
	if ((month == 12 && day >= 22 && day <= 31) || (month ==  1 && day >= 1 && day <= 19)){
		zodiacSign="Capricorn";
	}
	else if ((month ==  1 && day >= 20 && day <= 31) || (month ==  2 && day >= 1 && day <= 17)){
		zodiacSign="Aquarius";
	}
	else if ((month ==  2 && day >= 18 && day <= 29) || (month ==  3 && day >= 1 && day <= 19)){
		zodiacSign="Pisces";
	}
	else if ((month ==  3 && day >= 20 && day <= 31) || (month ==  4 && day >= 1 && day <= 19)){
		zodiacSign="Aries";
	}
	else if ((month ==  4 && day >= 20 && day <= 30) || (month ==  5 && day >= 1 && day <= 20)){
		zodiacSign="Taurus";
	}
	else if ((month ==  5 && day >= 21 && day <= 31) || (month ==  6 && day >= 1 && day <= 20)){
		zodiacSign="Gemini";
	}
	else if ((month ==  6 && day >= 21 && day <= 30) || (month ==  7 && day >= 1 && day <= 22)){
		zodiacSign="Cancer";
	}
	else if ((month ==  7 && day >= 23 && day <= 31) || (month ==  8 && day >= 1 && day <= 22)){
		zodiacSign="Leo";
	}
	else if ((month ==  8 && day >= 23 && day <= 31) || (month ==  9 && day >= 1 && day <= 22)){
		zodiacSign="Virgo";
	}
	else if ((month ==  9 && day >= 23 && day <= 30) || (month == 10 && day >= 1 && day <= 22)){
		zodiacSign="Libra";
	}
	else if ((month == 10 && day >= 23 && day <= 31) || (month == 11 && day >= 1 && day <= 21)){
		zodiacSign="Scorpio";
	}
	else if ((month == 11 && day >= 22 && day <= 30) || (month == 12 && day >= 1 && day <= 21)){
		zodiacSign="Sagittarius";
	}
	else{
		zodiacSign="Invalid date";
	}
	return zodiacSign;
}

function calculateDayOfBirth(day,month,year){
	var cen = parseInt(year.toString().substr(0,2));
	year = parseInt(year.toString().substr(2,4)) ;
	
	if (month == 1 ||  month == 2){
		month += 10 ;
		year -= 1;
	}else {
		month -= 2 ;
	}
	var dateOfBirth = (day+Math.floor((2.6*month)-0.2)-(2*cen)+year+Math.floor(year/4)+Math.floor(cen/4))%7;
	return dArray[Math.floor(dateOfBirth)];	
}

function calculateZodiacYear(year){
	var temp  = year % 12 ;
	return zodiacYear[temp];
}

function setCookie(name,value,exp){
	var date = new Date();
	date.setTime(date.getTime() + (exp*24*60*60*1000));
	var expires = "expires="+date.toUTCString();
	document.cookie  = name + "=" + value +";"+expires+";path=/";
	console.log(document.cookie);
}

function getCookie(name){
	var cname  = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length;i++){
		var c = ca[i];
		while(c.charAt(0) == ' '){
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return  c.substring(cname.length,c.length);
		}
	}
	return "" ;
}

// function retriveCookie(){
// 	console.log("i am not in");
// 	console.log(getCookie("firstname"));
// 	document.getElementById("firstname").value = getCookie("firstname");
// 	document.getElementById("lastname").value = getCookie("lastname");
// 	document.getElementById("citizenId").value = getCookie("citizenId");
// 	document.getElementById("birthday").value = getCookie("birthday");
// 	document.getElementById("dayofbirth").value = getCookie("dayofbirth");
// 	document.getElementById("zodiacSign").value = getCookie("zodiacSign");
// 	document.getElementById("zodiacYear").value = getCookie("zodiacYear");
// 	document.getElementById("housenumber").value = getCookie("housenumber");
// 	document.getElementById("street").value = getCookie("street");
// 	document.getElementById("city").value = getCookie("city");
// 	document.getElementById("province").value = getCookie("province");
// 	document.getElementById("zipcode").value = getCookie("zipcode");
// 	document.getElementById("phonenumber").value = getCookie("phonenumber");
// 	document.getElementById("cellphonenumber").value = getCookie("cellphonenumber");

// }

function save(){
	setCookie("firstname",document.getElementById("firstname").value,30);
	setCookie("lastname",document.getElementById("lastname").value,30);
	setCookie("citizenId",document.getElementById("citizenId").value,30);
	setCookie("birthday",document.getElementById("birthday").value,30);
	setCookie("dayofbirth",document.getElementById("dayofbirth").value,30);
	setCookie("zodiacSign",document.getElementById("zodiacSign").value,30);
	setCookie("zodiacYear",document.getElementById("zodiacYear").value,30);
	setCookie("housenumber",document.getElementById("housenumber").value,30);
	setCookie("street",document.getElementById("street").value,30);
	setCookie("city",document.getElementById("city").value,30);
	setCookie("province",document.getElementById("province").value,30);
	setCookie("zipcode",document.getElementById("zipcode").value,30);
	setCookie("phonenumber",document.getElementById("phonenumber").value,30);
	setCookie("cellphonenumber",document.getElementById("cellphonenumber").value,30);
	// console.log(getCookie("firstname"));
}

function validate(){
	var firstname = document.getElementById("firstname").value ;
	var lastname = document.getElementById("lastname").value ;
	var cId = document.getElementById("citizenId").value ;
	var house = document.getElementById("housenumber").value ;
	var zip = parseInt(document.getElementById("zipcode").value) ;
	console.log(zip);
	var ph = document.getElementById("phonenumber").value ;
	var cph = document.getElementById("cellphonenumber").value ;
	var reName = /^[a-zA-z].+$/ ;
	var reId = /^[0-9]{13}$/ ; 
	var reHouse = /^[0-9]*\/?[0-9]*$/ ;
	var reZip = /^[0-9]{5}$/;
	var rePhone = /^\+66[0-9]{8}$/;
	var reCell = /^\+66[0-9]{9}$/;
	var isFail = false ;

	if (! reName.test(firstname)){
		alert("Invalid firstname pattern");
		isFail = true ; 
	}
	if (! reName.test(lastname)){
		alert("Invalid lastname pattern");
		isFail = true ;
	}
	if (! reId.test(cId)){
		alert("Invalid citizenId pattern");
		isFail = true ;
	}
	if (! reHouse.test(house)){
		alert("Invalid housenumber pattern");
		isFail = true ;
	}
	if (! reZip.test(zip)){
		alert("Invalid zipcode pattern");
		isFail = true ;
	}
	if  (! rePhone.test(ph)){
		alert("Invalid phonenumber pattern");
		isFail = true ;
	}
	if  (! reCell.test(cph)){
		alert("Invalid cellphonenumber pattern");
		isFail = true ;
	}
	if (!isFail){
		save();
		showSomeCookie();
		clearElement();
		createTable();
	}


}

function  showSomeCookie(){
	alert("Cookie of "+getCookie("firstname")+" "+getCookie("lastname")+" has been submited.");
}

function clearElement(){
	var elem = document.getElementById('form');
    elem.parentNode.removeChild(elem);
    return false;
}

function createTable(){
	// var temp = document.createElement('table');
	// temp.setAttribute("myTable");

	var table = document.getElementById("myTable");
	var head = ["First name","Last name","Citizen number","Birthday","Birthday of week",
	"Zodiac Sign","Zodiac Year","House number","Street","City","Province","Zipcode","Phone number","Cellphone number"];
	var tail = [getCookie("firstname"),getCookie("lastname"),getCookie("citizenId"),getCookie("birthday"), getCookie("dayofbirth"),
	getCookie("zodiacSign"),getCookie("zodiacYear"),getCookie("housenumber"),getCookie("street"),getCookie("city"),getCookie("province"),
	getCookie("zipcode"),getCookie("phonenumber"), getCookie("cellphonenumber")] ;
	for (var i = 0; i <14; i++) {
		var row = table.insertRow(i);
	    var cell1 = row.insertCell(0);
	    var cell2 = row.insertCell(1);
	    cell1.innerHTML = head[i];
    	cell2.innerHTML = tail[i];
	}
}
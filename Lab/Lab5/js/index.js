function onSubmit(){
	var firstName = $('#firstname').val();
	var lastName = $('#lastname').val();
	var gender = $('input[name="gender"]:checked').val();
	var birthday = document.getElementById("birthday").value;

	// $.ajax({
 //    data: { firstname : firstName,
 //    	lastname : lastName,
 //    	gender : gender,
 //    	birthday : birthday
 //    },
 //    url: 'php/home.php',
 //    method: 'POST', // or GET
 //    success: function(msg) {
 //        console.log(msg);
 //    }
	// });

	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            document.getElementById("txtHint").innerHTML = this.responseText;
            
        };
        xmlhttp.open("GET", "gethint.php?a=" + str, true);
        xmlhttp.send();


	
	var age = calculate_age(birthday);
	var province = $('#province :selected').text();
	var tier = tierCheck(age,gender);
	// console.log(tier);
	if (tier != 0){
		clearDisplay("form");
		// $("#header").hide();
		// $("form").hide();
		if(tier == 1){
			alert("Hello Mr."+firstName+" "+lastName);
		}
		changeFont(tier);
		changeText("#header",province);
		changeBackGround(tier);

		$("body").append("<div></div>");
		$("div").append('<img src="data/sign/'+province+'.png" height="300px" width="300px">');
		appendText(province);
		
	}
	else {
		alert("Error something is missing . ");
	}


}

function appendText(url){
	var text ; 
	var client = new XMLHttpRequest();
	client.open('GET', 'data/motto/'+url+'.txt');
	client.onreadystatechange = function() {

		text = client.responseText;
		// alert(text);
		// console.log(text);
		$("p").empty();
		$("div").append('<p>'+text+'</p>');
		
	}
	client.send();
}

function changeText(tag,text){
	$(tag).text(text);
}

function clearDisplay(tag){
	var tag = $(tag) ;
	tag.animate({bottom: '100px',opacity:'0'}, "slow");
	tag.hide();

}

function calculate_age(date)
{
	var dob = new Date(date);
	var today = new Date();
	var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
	return age ;

}

function tierCheck(age,gender){
	if (age < 13) {
		return 1 ;
	}
	else if (gender == "male"){
		return 2 ;
	}
	else if (gender == "female"){
		return 3 ;
	}
	else {
		return 0 ;
	}

}


function changeFont(tier){
	if (tier == 1){
		$("body").css("font-family", " 'Chonburi' , cursive")
	}
}


function changeBackGround(tier){
	var url ;
	if (tier == 1){
		url = "Img/kid_bg.jpg";
	}
	if (tier == 2){
		url = "Img/men_bg.jpg";
	}
	if (tier == 3){
		url = "Img/girl_bg.jpg";
	}
	// console.log(url);
	// #fff url("+url+") repeat-y
	$("body").css("background","#fff url("+url+") repeat-y");
}

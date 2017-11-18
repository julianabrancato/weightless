$(document).ready(function() {
	$('#text_section1').css('visiblity','hidden');
	$('#text_section2').css('visiblity','hidden');
	$('#text_section3').css('visiblity','hidden');
	$('#text_section4').css('visiblity','hidden');
	$('#text_section5').css('visiblity','hidden');
	let section1_shown = false;
	let section2_shown = false;
	let section3_shown = false;
	let section4_shown = false;
	let section5_shown = false;
	$(document).click(function(){
		if(!section1_shown && !section2_shown && !section3_shown && !section4_shown && !section5_shown ){
			$('#text_section1').css('visiblity','');
			section1_shown = true;
		}
		else if(section1_shown && !section2_shown && !section3_shown && !section4_shown && !section5_shown ){
			$('#text_section2').css('visiblity','');
			section2_shown = true;
		}
		else if(section1_shown && section2_shown && !section3_shown && !section4_shown && !section5_shown ){
			$('#text_section3').css('visiblity','');
			section3_shown = true;
		}
		else if(section1_shown && section2_shown && section3_shown && !section4_shown && !section5_shown ){
			$('#text_section4').css('visiblity','');
			section4_shown = true;
		}
		else if(section1_shown && section2_shown && section3_shown && section4_shown && !section5_shown ){
			$('#text_section5').css('visiblity','');
			section1_shown = true;
		}
	});
  $('#response_submit').click(function() {
   	responses.push($('#response_form').val);
  });
  $('#get_answers_button').click(function(){
  	let password = $('get_answers_form').val;
  	if(pasword = "password"){
  		responses.foreach(function(response){
  			$('#result_area').append('<p>'+response+'</p>');
  		};
  	};
  });

let responses = [];


$(document).ready(function(){
	
	//hide all unused pages//
	$('.page2').hide();
	$('.page3').hide();
	$('.page4').hide();
	$('.page5').hide();
	$('.page6').hide();
	$('.page7').hide();

	//show question one and two//
	$('#startNow').click(function(){
		$('.page2').show(1000);
		$('.page1').hide(1000);
	});
	
	//show question three and four//
	$('.next2').click(function(){
		$('.page3').show(1000);
		$('.page2').hide(1000);
	});

	//show question five and six//
	$('.next3').click(function(){
		$('.page4').show(1000);
		$('.page3').hide(1000);
	});

	//show question seven and eight//
	$('.next4').click(function(){
		$('.page5').show(1000);
		$('.page4').hide(1000);
	});

	//show question nine and ten//
	$('.next5').click(function(){
		$('.page6').show(1000);
		$('.page5').hide(1000);
	});

	//show result page//
	$('.finish').click(function(){
		$('.page7').show(1000);
		$('.page6').hide(1000);
	});
	//previous pages//
	$('.previous2').click(function(){
		$('.page1').show(1000);
		$('.page2').hide(1000);
	});
	$('.previous3').click(function(){
		$('.page2').show(1000);
		$('.page3').hide(1000);
	});
	$('.previous4').click(function(){
		$('.page3').show(1000);
		$('.page4').hide(1000);
	});
	$('.previous5').click(function(){
		$('.page4').show(1000);
		$('.page5').hide(1000);
	});
	$('.previous6').click(function(){
		$('.page5').show(1000);
		$('.page6').hide(1000);
	});
	//selecting choices//
	//option color change//
	$('.option1').click(function(){
		$(this).addClass('clicked');
	});
	$('.option2').click(function(){
		$(this).addClass('clicked');
	});
	$('.option3').click(function(){
		$(this).addClass('clicked');
	});
	$('.option4').click(function(){
		$(this).addClass('clicked');
	});

});

	
   

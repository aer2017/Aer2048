function showNumberWithAnimation(i,j,randNumber){
	var numberCell = $('#number-cell-'+i+'-'+j);
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	numberCell.css('color',getNumberColor(randNumber));
	numberCell.text(randNumber);

	numberCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i,j),
		left:getPosLeft(i,j)

	},50);
}

function showMoveAnimation(fromx,fromy,tox,toy){
	var numberCell = $('#number-cell-'+fromx+'-'+fromy);
	numberCell.animate({
		top:getPosTop(tox,toy),
		left:getPosLeft(tox,toy)
	},200)
}

function undateScore(score,addScore){
	$('#score').text(score);
	var theScore = $('#addScore');
	theScore.text('+'+addScore);
	theScore.animate({
		fontSize:"25px",
		bottom:"20px",

	},300);
	setTimeout(function resScore(){
	var theScore = $('#addScore');
	theScore.animate({
		bottom:"-20px",
		fontSize:"0",
	},0)
},250);
}




function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(randomNumber){
	if(randomNumber == '1'){
		return 'kamień';
	}else if(randomNumber == '2'){
		return 'papier';
	}else(randomNumber == '3'){
		return 'nożyce';
	}	
}
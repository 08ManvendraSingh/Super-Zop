function my(){
	var a=document.getElementById('name').value;
	var b=document.getElementById('pass').value;

	var aa='';
	var bb='';


	if(a==''){
		aa='Enter your name';
		document.getElementById('names').innerHTML=aa;
	}

	if(b==''){
		bb='Enter your password';
		document.getElementById('passs').innerHTML=bb;
	}

	if(a=='superzop' && b==123){
       alert('Login Successful');
       window.location.href="file:///C:/Users/MANVENDRA/Desktop/MANU/superzop.html";
	}
	else{
		alert('enter right details');
	}



}
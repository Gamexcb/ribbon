#pragma strict

var action : boolean = false;

var hide : boolean;

var message : String;

function Start () {

renderer.enabled = false;

}

function Update () {

if(action == true){

if(hide == true){

	renderer.enabled = true;
	
}else{

	renderer.enabled = false;
		
}				

if(Input.GetKeyDown("x")){

print(message);

}

}



if(action == false){

if(hide == true){

	renderer.enabled = false;
	
}else{

	renderer.enabled = true;
		
}		

}

}

function OnTriggerEnter(theCollision : Collider){
	if(theCollision.gameObject.name == "Player"){
  
  		//renderer.enabled = true;
  		action = true;
  
	}
}


function OnTriggerExit(theCollision : Collider){
	if(theCollision.gameObject.name == "Player"){
  
  		//renderer.enabled = false;
  		action = false;
  
	}
}
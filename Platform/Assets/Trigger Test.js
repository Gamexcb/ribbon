#pragma strict

function Start () {

renderer.enabled = false;

}

function Update () {

}

function OnTriggerEnter(theCollision : Collider){
	if(theCollision.gameObject.name == "Player"){
  
  		renderer.enabled = true;
  
	}
}


function OnTriggerExit(theCollision : Collider){
	if(theCollision.gameObject.name == "Player"){
  
  		renderer.enabled = false;
  
	}
}
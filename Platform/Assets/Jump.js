#pragma strict

var power : float = 500.0;

var allow : boolean = false;

var jumpcount : int;

var jumplimit : int;

function Update () {

if(Input.GetKey(KeyCode.UpArrow) && jumpcount < jumplimit){
	//allow = false;
	
	jumpcount = jumpcount + 1;
	rigidbody.AddForce(Vector3(0,power - rigidbody.velocity.y,0));
	
	
} 


if(Input.GetKeyDown(KeyCode.UpArrow) && jumpcount < jumplimit){
	//allow = false;
	
	//jumpcount = jumpcount + 1;
	//rigidbody.AddForce(Vector3(0,power - rigidbody.velocity.y,0));
	
	
}



}

function OnCollisionEnter(theCollision : Collision){
	if(theCollision.gameObject.name == "Floor"){
  
		//if(theCollision.gameObject.transform.position.y < gameObject.transform.position.y){
		
			//allow = true;
			
			jumpcount = 0;
  
		//}
  
	}
}
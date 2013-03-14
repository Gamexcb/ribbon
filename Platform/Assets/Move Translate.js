var speed : float = 5.0;
 
var allowright : boolean = true; 

var allowleft : boolean = true; 
 
function Update () {


if(Input.GetKey(KeyCode.RightArrow) && allowright == true){
 transform.Translate(Vector3(speed,0,0) * Time.deltaTime);
}
 
if(Input.GetKey(KeyCode.LeftArrow) && allowleft == true){
 transform.Translate(Vector3(-speed,0,0) * Time.deltaTime);
}
 
 
}

function OnTriggerEnter(theCollision : Collider){
	if(theCollision.gameObject.name == "Wall"){
  
		if(theCollision.gameObject.transform.position.x > gameObject.transform.position.x){
		
			allowright = false;
			//transform.position.x = transform.position.x - 1; //(theCollision.gameObject.transform.localScale.y / 2);
  
		}
		
		if(theCollision.gameObject.transform.position.x < gameObject.transform.position.x){
		
			allowleft = false;
			//transform.position.x = transform.position.x + 1; //(theCollision.gameObject.transform.localScale.y / 2);
  
		}
  
	}
}

function OnTriggerExit(theCollision : Collider){
	if(theCollision.gameObject.name == "Wall"){
  
		if(theCollision.gameObject.transform.position.x > gameObject.transform.position.x){
		
			allowright = true;
  
		}
		
		if(theCollision.gameObject.transform.position.x < gameObject.transform.position.x){
		
			allowleft = true;
  
		}
  
	}
}

/*
function OnCollisionEnter(theCollision : Collision){
	if(theCollision.gameObject.name == "Wall"){
  
		if(theCollision.gameObject.transform.position.x > gameObject.transform.position.x){
		
			allowright = false;
			//transform.position.x = transform.position.x - 1; //(theCollision.gameObject.transform.localScale.y / 2);
  
		}
		
		if(theCollision.gameObject.transform.position.x < gameObject.transform.position.x){
		
			allowleft = false;
			//transform.position.x = transform.position.x + 1; //(theCollision.gameObject.transform.localScale.y / 2);
  
		}
  
	}
}

function OnCollisionExit(theCollision : Collision){
	if(theCollision.gameObject.name == "Wall"){
  
		if(theCollision.gameObject.transform.position.x > gameObject.transform.position.x){
		
			allowright = true;
  
		}
		
		if(theCollision.gameObject.transform.position.x < gameObject.transform.position.x){
		
			allowleft = true;
  
		}
  
	}
}
*/
#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(theCollision : Collision){
	if(theCollision.gameObject.name == "Player"){
  
		if(theCollision.gameObject.transform.position.y > gameObject.transform.position.y - 16){
		
			Destroy(gameObject);
			//transform.position.x = transform.position.x - 1; //(theCollision.gameObject.transform.localScale.y / 2);
  
		}else{
		
		
		//Destroy(theCollision.gameObject);
		
		Application.LoadLevel(Application.loadedLevelName);
		
		}
		
  
	}
	
}	
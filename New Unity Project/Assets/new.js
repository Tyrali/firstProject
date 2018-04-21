#pragma strict

var distanceRight = 1;
var startPosition : Vector2;
var limit = 10;


function Start () { //Starting frame
		startPosition = this.gameObject.transform.position;
	 	this.gameObject.transform.position.y += 10;
}

function Update () {//Reoccuring frame
 	this.gameObject.transform.position.x += distanceRight;
 	if(this.gameObject.transform.position.x - startPosition.x > limit){
 	this.gameObject.transform.position = startPosition;
 	}
}


#pragma strict

// Direction character should be facing.
var forwardDir : Vector3;

function Start () {
	forwardDir = Vector3.right * -1;
	
	// Remove renderers from rotators to hide them visually.
	var rotators : GameObject[];
	rotators = GameObject.FindGameObjectsWithTag("Rotator");
	for (var rotator : GameObject in rotators) {
		var rend : Renderer = rotator.GetComponent(Renderer);
		rend.enabled = false;
	}
}

function Update () {

}

function OnTriggerEnter(other : Collider) {
    if (other.tag != "Rotator") {
    	return;
  	}
  	
  	Debug.Log("Setting forward direction to rotator plane's normal vector.");

	transform.rotation = other.gameObject.transform.rotation;

	//forwardDir = -1 * other.gameObject.transform.up;
	//Debug.Log(forwardDir);
}
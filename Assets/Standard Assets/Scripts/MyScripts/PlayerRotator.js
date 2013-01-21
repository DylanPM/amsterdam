#pragma strict

private var rotationSpeed : float = 0.001;

// Direction character should be facing.
private var forwardDir : Quaternion;

function Start () {
	forwardDir = transform.rotation;
	
	// Remove renderers from rotators to hide them visually.
	var rotators : GameObject[];
	rotators = GameObject.FindGameObjectsWithTag("Rotator");
	for (var rotator : GameObject in rotators) {
		for (var rend : Renderer in rotator.GetComponentsInChildren(Renderer)) {
			rend.enabled = false;
		}
	}
}

function OnTriggerEnter(other : Collider) {
	var parent : GameObject = other.gameObject.transform.parent.gameObject;
    if (parent.tag != "Rotator") {
    	return;
  	}
  	
  	// Find the look target.
  	var lookTarget : Transform;
  	for (var child : Transform in parent.transform) {
  		if (child.gameObject.tag == "LookTarget") {
  			lookTarget = child;
  		}
  	}
  	
  	Debug.Log("Hit a rotator, facing player to little cube thingie.");
	//transform.LookAt(lookTarget);

	// Save the rotation that we'd have if we looked at the target.
	var looking : Transform;
	looking = Instantiate(transform, transform.position, transform.rotation);
	looking.LookAt(lookTarget);
	forwardDir = looking.rotation;
}

function Update () {
	// Slerp to a desired look direction.
	transform.rotation = Quaternion.Slerp(transform.rotation, forwardDir, 0.1 * Time.time);
}
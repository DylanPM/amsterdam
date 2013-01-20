#pragma strict

var numPillsGrabbed : uint = 0;
var pillCountGUI : GUIText;

function Start () {
	pillCountGUI = GameObject.Find("PillCount").GetComponent(GUIText);
}

function Update () {

}

function OnTriggerEnter(other: Collider) {
    if (other.tag != "Pill") {
    	return;
  	}
  	
	numPillsGrabbed += 1;
	Debug.Log("picking up a pill! Have " + numPillsGrabbed + " pills now.");
	Destroy(other.gameObject);
	
	pillCountGUI.text = "" + numPillsGrabbed;
}
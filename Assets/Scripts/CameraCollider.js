var target : Transform;
var smoothTime = 0.3;
private var velocity = Vector3.zero;
private var colliding : boolean = false;

function OnTriggerEnter (){
    colliding = true;
}

function OnTriggerExit (){
    colliding = false;
}

function Update(){
    if (colliding){
        transform.localPosition = Vector3.SmoothDamp(transform.localPosition, Vector3(0,1,0), velocity, smoothTime);
    }
    else{
        var hit : RaycastHit;
        if (Physics.Raycast(transform.position, -transform.forward, hit, 1.5)){
            print ("ray has hit");
        }
        else{
            transform.localPosition = Vector3.SmoothDamp(transform.localPosition, Vector3(0,3.5,-6), velocity, smoothTime);
        }
    }
}
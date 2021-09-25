img="";
function preload() {
    img=loadImage("pantry.jpg");
}
function setup() {
    canvas=createCanvas(800,500);
    canvas.center();
    objectdectect=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Object Detecting";
}
function gotResult(error,result) {
    if (error) {
        console.error();
    }
    else{
        console.log(result);
        object=result[0].label;  
        document.getElementById("objects").innerHTML=object;
    }
}

function draw() {
    image(img,0,0,800,500);
}
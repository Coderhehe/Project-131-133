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
    if (status!="") {
        for ( i = 0; i < result.length; i++) {
             result[i];
            con=results[i].confidence;
            conp=Math.floor(con*100);
            result[i].label;
            text(result[i].label+" "+conp+"%",result[i].x+15,result[i].y+15);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);  
            document.getElementById("objects").innerHTML="Cocossd Found "+result.length+" Objects";
             
        }
    }
}
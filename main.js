function preload() {

}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();


tint_coler = "";

}


function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_coler);

}

function take_snapshot(){
   save('person.png');

}

function filtercoler() {
tint_coler = document.getElementById("input_color").value;

}
peter_pang_Song = "";
harry_potter_Song = "";

function preload(){
    peter_pang_Song = loadSound("music2.mp3")
    harry_potter_Song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}
function play(){
    peter_pang_Song.play();
    harry_potter_Song.play();
}
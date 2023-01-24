function setup() {
    canvas = createCanvas(950, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function preload() {}

function draw() {
    image(video, 0, 0, 950, 600);
    fill(122, 0, 123);
    circle(10, 10, 20);
    circle(10, 590, 20);
    circle(940, 590, 20);
    circle(940, 10, 20);
}

function take_snapshot() {
    save('student_name.png');
}


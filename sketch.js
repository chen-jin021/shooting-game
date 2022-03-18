let x = 200;
let y = 200;
let r = 50;
let score = 0;
let start,
  end = false;
let elapse_time = 0;
let time_left = 60;
let shoots = 0;
let diff = 0;

function setup() {
  createCanvas(400, 400);
  dom_button();
}

function draw() {
  background(220);
  //initial
  if (!start && !end) {
    if (keyIsPressed) {
      button.hide();
    }
  } else if (start && !end) {
    //set timer
    show_timer();
    text("Score is: " + score, 300, 20);
    ellipse(x, y, r, r);
  } else {
    //end
    text('Your Final Score is:' + score ,width/2,height/2);
    text(" and you are " + round((score/shoots),2) * 100 + "% accurate", width/2, height/2 + 20);
  }
}

function show_timer() {
  elapse_time = round(millis() / 1000);
  time_left = 10-elapse_time;
  text(`${time_left} seconds left`, 10, 20);
  check_timer();
}
function check_timer(){
  if (time_left === 0){
    end = true;
  }
}
function dom_button() {
  button = createButton("Start Game");
  button.position(10, 10);
  button.mouseReleased(start_button);
}
function start_button() {
  start = true;
  button.hide();
}
function mouseClicked() {
  shoots++;
  if (dist(mouseX, mouseY, x, y) < r) {
    r = random(25, 35);
    x = random(0, width);
    y = random(0, height);
    score++;
  }
}

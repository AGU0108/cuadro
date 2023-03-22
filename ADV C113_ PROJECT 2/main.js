function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  //CREATE THE SHAPES BY USING fill, stroke, circle and rect
   
fill("#e1d6f6");
stroke("orange");
circle(600,440,100);

fill("#e1d6f6");
stroke("orange");
rect(1,390,100,100);

fill("#e1d6f6");
stroke("orange");
circle(30,50,100);

fill("#e1d6f6");
stroke("orange");
rect(540,1,100,100);









  
}

function take_snapshot(){    
  save('student_name.png');
}

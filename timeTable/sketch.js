var total = 0;
var r = 160;
var mul = 0;
function mapPOint(index) {
  let angle = map(index % total, 0, total, 0, TWO_PI);
  let pos = p5.Vector.fromAngle(angle)
  pos.mult(r)
  return pos;
}
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
  r = (height / 2)-20;


}

window.addEventListener('keypress',()=>{
    saveGif("p.gif",20);
})



function draw() {
  background(0);
  translate(width / 2, height / 2)
  total += 1;
  mul += 0.01;
  if(total > 10000)frameRate(0)
  //total = map(mouseX, 0, width, 1, 2000)
  for (let i = 0; i < total; i++) {
    let angle = map(i % total, 0, total, 0, TWO_PI);

    let r = map(angle, 0, TWO_PI, 0, 225)
    let g = map(angle, 0, TWO_PI, 225, 0)
    let a = map(angle, 0, TWO_PI,0, 255)


    let pos = mapPOint(i);
    let pos1 = mapPOint(i * mul);
    stroke(0, r, g,a)
    line(pos.x, pos.y, pos1.x, pos1.y)
  }
}

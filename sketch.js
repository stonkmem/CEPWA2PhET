let state=0, bot;
function setup() {
  createCanvas(900, 750);
  frameRate(500);
  bot = new Boat(width/2, height);
  noiseSeed(99);
}
function draw() {
  if(state === 0){
    background(255, 255, 167);
    stroke(0, 0, 255);
    let V = 0; //Volume Submerged
    for(let i=frameCount*10; i<frameCount*10+width; i+=1){
      let rand = (noise(i*0.0005))*300;
      let x = i-frameCount*10, waterLevel = height-rand-height/4;
      if(x > bot.s.x-25 && x<bot.s.x+25){
        if(bot.s.y+10>waterLevel){
          V += waterLevel - bot.s.y - 10;
        }
      }
      line(x, height, x, waterLevel+45);
    }
    bot.applyA(0, V*0.301*0.002*2);
    bot.applyA(0, 1.81*2);
    bot.applyA((mouseX-bot.s.x)/903, (bot.s.y-mouseY)/903);
    bot.applyA(-0.01 * Math.sign(bot.v.x) * bot.v.x * bot.v.x, Math.sign(bot.v.y) * -0.467*bot.v.y*bot.v.y);
    bot.epoch();
  }
}

function keyPressed(){
  if(key === "F2"){
     state+=1;
     state=state%5;
  }
}
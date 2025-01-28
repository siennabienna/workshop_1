# Workshop_1
Website (SWISS CHEESE RANDOMISER (MULTI-PLATFORM EDITION): https://siennabienna.github.io/workshop_1/ 

# Things I Looked at in this Workshop
- Using `if`
- Using `for` and `while` loops
- Using `random()`
- Using `second()`
- Creating my own functions
- Using text

# Using `if`
I first started with the varible `if`. I used this to make a square move in the direction of the bottom right corner, and then if it went off the canvas, to move it back to 0. 
```js
let x = 0

function setup(){
createCanvas(400, 400);
}

function draw(){
background(231, 143, 194);

stroke(143, 194, 231);
fill(143, 231, 224);
rect(x, x, x, x);

x = x + 3

if (x > width){
x = 0;
 }
}

```
This allowed me to make sure it would continuously stay on the canvas. I also made x the x, y, width, and height of the square so that it would expland in size as it moved. 

Link to p5 of 'LIT EXPANDING SQUARE': https://editor.p5js.org/siennabearbum/full/HY-5lSVXl 

# Experimenting with Background and Problem Solving for Mobile Use
Next, I had a play around with the background and colours. I was curious about what would happen if I removed the backround on a sketch, and I coded a bouncing ball squence to see this. These balls bounce from left to right and back again after they hit the side. For this I used another `if` conditional to make it bounce back the way it came. 

```js
let x = 0;
let bounce = 3

function setup() {
  createCanvas(400, 400);
}

function draw() {
   background(231, 143, 194);

  if (x > width) { 
  bounce = -3;
  }
  
  if (x < 0){
    bounce = 3;
  }
  
  stroke(143, 194, 231);
  fill(143, 217, 231);
  circle(x, 100, 40);
  
   stroke(143, 194, 231);
  fill(143, 173, 231);
  circle(x, 200, 40);
  
   stroke(143, 194, 231);
  fill(157, 143, 231);
  circle(x, 300, 40);
  
  x = x + bounce;
}
```

Link to p5 of 'AWESOME BOUNCING CIRCLE PINK VER.': https://editor.p5js.org/siennabearbum/full/2hVVw7J2b 

After making this, I removed the background and found that all of the balls that are drawn are visible. This is because when the background is included in the draw loop, before the ball is drawn in its new position, the background is drawn again too to cover the last ball. So by removing this, or putting it in the setup, you eliminate the coverup and all balls are visible. I found this very interesting and was helpful for my understanding of how backgrounds work.

Link to p5 of 'AWESOME BOUNCING CIRCLE': https://editor.p5js.org/siennabearbum/full/21uvnewp8

# Using a `while` Loop

Next, I made a very simple drawing with a 'while' loop, following the example in the workshop. This taught me how to use more compact code, and create many things on a canvas efficently. I made a series of squares as practice for this.

```js
function draw() {

  for (X = 0; X < width; X += 50){
    circle(X, 200, 10);
  }
```

Link to p5 of 'UGLY USELESS SQUARES': https://editor.p5js.org/siennabearbum/full/8F4KA204O

# Using a `for` Loop and `random`

My plan for this was to make a piece of swiss cheese with random holes. I wanted the hole shape and hole size to be random. For this, I used the variable `random`, and also created a few of my own variables. I created the varibles HOLEPUNCH (which acted as x and would bring it back to 1 at the beginning of the loop), HOLECOUNT (which would be how many holes the cheese had), and lastly HOLESIZE (which would be the range of sizes the holes could generate as). I popped these variables into a `for` loop, and then a randomiser. 

```js
function setup() {
  createCanvas(400, 400);

}

function draw() {


let holepunch = 1
let holecount = second()
  
  background(255);

  noStroke()
  fill (255, 224, 145)
   rect(50, 50, 300, 300);   
  

  
  for ( holepunch = 0; holepunch < holecount; holepunch+=1){
    

  let x = random(50, 350);
  let y = random(50, 350);
  let holesize = random(10, 50);
    
    fill(255);
    circle(x, y, holesize);

  }
  

}
```

I used function `mouseClicked` so that the cheese would randomise every time the mouse was clicked. However, after sending my cheese to a few friends on instagram, I found that it wouldn't run on mobile. To fix this, I used the function `touchStarted` instead of `mouseClicked`. This ran on both mobile and laptop. I also added some text that read 'click for cheese'.

```js

function touchStarted(){
cheeseArtist();
}
```

# Using `second()`

After this, I wanted to play around with some other stuff on the p5 reference page, and I made a cheese clock. The number of holes in the cheese corresponds to the number of seconds past the minute. If you update it every second, you can see the holes in the cheese increase.

```js
let holepunch = 1
let holecount = second()
```
Link to p5 for 'SWISS CHEESE CLOCK (JAVA EDITION)': https://editor.p5js.org/siennabearbum/full/c2dUp9KLi 

Not the best for telling the time, but still interesting.

# Creating My Own Function

I wanted to have anther go at the tappy trianges I made in the last workshop tasks. The way the triangles were made reminded me of fish tails, so I decided to attempt to draw my own fish in a function.

![image](https://github.com/user-attachments/assets/ad16bd01-a685-4a96-a7c2-a2c5d707b3b4)

This was my plan on how to draw the fish, and what shapes to use for it.

My plan was:
1. Make ellipse
2. Cutout mouth
3. Make tail
4. Cutout tail
5. Draw eye

So first, I found the ellipse page on the p5 reference.

https://p5js.org/reference/p5/ellipse/

I then connected the fish up to the triangle I already had, and then I worked out how to do the cutout for the mouth.

![image](https://github.com/user-attachments/assets/ad019f57-0538-4a59-a65f-bade1e9b1aec)

It required me to work out the distance from the center of the ellipse, and then create the parameters of the triangle appropriately. I did the same for cutting out the tail, and then just added a simple black circle for the eye. I removed the stroke so that it was all seamless. I then created the function `drawFish(fishX, fishY)`, and put all of my shapes into there. This allowed me to put the whole drawing under `mouseClicked` using my new function.

```js
function setup() {
  createCanvas(400, 400);
    background(0, 128, 120);
  textAlign(CENTER,CENTER);
  text('click for fish', 200, 200);
 
}

function draw() {


}
 


  function mouseClicked() {
    fill(random(0, 255), random(0,255), random(255));
    drawFish(mouseX, mouseY);
 
}

function drawFish(fishX, fishY){
  noStroke()
  ellipse(fishX, fishY, 80, 40);
  triangle (fishX + 25, fishY, fishX + 75, fishY -20, fishX + 75, fishY + 
  20);
  fill(0)
  circle(fishX - 20, fishY - 10, 5)
  fill (0, 128, 120);
  triangle(fishX -40, fishY + 5, fishX - 40, fishY -5, fishX - 25, fishY);
  triangle(fishX + 60, fishY, fishX + 75, fishY -20, fishX + 75, fishY + 20);
 
}
```

Link to p5 for 'tappy fish': https://editor.p5js.org/siennabearbum/full/kO9-dRDrF 

# Ideas for Further Development
- use more complex functions, perhaps multiple funtions in the same sketch
- Introduce some kind of function to the cheese code to make it more interesting
- Use text more - I like using it as a title screen for a sketch, but it would be interesting to have it play a larger role
- I think it would be interesting to try and figure out a way to draw the fish without using cutouts (shapes the same colour as the background) because when they overlap it's obvious - I could try using an arch function perhaps, or maybe some kind of bezier curve
- use more complex shapes, and perhaps even images - it would be interesting to try and tell some kind of story with the code




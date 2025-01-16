# Workshop_1
Website (SWISS CHEESE RANDOMISER (MULTI-PLATFORM EDITION): https://siennabienna.github.io/workshop_1/ 

#### In the task for workshop 1, I focused on variables, and also trying some loops out.

### I first started with the varible 'if'. I used this to make a square move in the direction of the bottom right corner, and then if it went off the canvas, to move it back to 0. 

![image](https://github.com/user-attachments/assets/59665f9f-20c1-4e86-b13f-45a1fabe7e2b)

### This allowed me to make sure it would continuously stay on the canvas. I also made x the x, y, width, and height of the square so that it would expland in size as it moved. Had a lot of fun with this one.

![image](https://github.com/user-attachments/assets/200b086a-a9a6-4020-8b78-6620b7825b6c)

### The square expands as it moves

![image](https://github.com/user-attachments/assets/4acd0e34-475f-4a28-9295-394650a555db)

### Next, I had a play around with the background and colours. I was curious about what would happen if I removed the backround on a sketch, and I coded a bouncing ball squence to see this.

![image](https://github.com/user-attachments/assets/7e1a6757-8585-4451-bfb1-d34925ecac9f)

These balls bounce from left to right and back again after they hit the side. For this I used another 'if' conditional to make it bounce back the way it came. 

![image](https://github.com/user-attachments/assets/6391d7cc-37cf-4515-8480-d6a6c7cfa5a0)

### After making this, I removed the background and found that all of the balls that are drawn are visible. This is because when the background is included in the draw loop, before the ball is drawn in its new position, the background is drawn again too to cover the last ball. So by removing this, or putting it in the setup, you eliminate the coverup and all balls are visible. I found this very interesting and would like to explore this more in future.

![image](https://github.com/user-attachments/assets/befdd400-236f-489c-bc2c-cc8ce462864d)

![image](https://github.com/user-attachments/assets/c5c4d7a8-33cf-4d3b-8178-9370b194c9ef)

### Next, I had a go at loops. I made a very simple drawing with a 'while' loop, following the example in the workshop. I named it 'UGLY USELESS SQUARES' because I didn't think it was very interesting.

![image](https://github.com/user-attachments/assets/2988e126-c019-4175-8224-ee181eb85c5b)

### After the boring squares, I wanted to try something more interesting. My plan was to make a piece of swiss cheese with random holes. I wanted the hole shape and hole size to be random. For this, I used the variable random, and also created a few of my own variables. I created the varibles HOLEPUNCH (which acted as x and would bring it back to 1 at the beginning of the loop), HOLECOUNT (which would be how many holes the cheese had), and lastly HOLESIZE (which would be the range of sizes the holes could generate as). I popped these variables into a 'for' loop, and then a randomiser. 

![image](https://github.com/user-attachments/assets/57e6362e-ef5f-47ee-85a6-b9f1b210eb00)

### I then put the function mouseClicked so that the cheese would randomise everytime the mouse was clicked. However, after sending my cheese to a few friends on instagram, I found that it wouldn't run on mobile. To fix this, I used the function touchStarted instead of mouseClicked. This ran on both mobile and laptop.

### After this, I wanted to play around with some other stuff on the p5 reference page, and I made a cheese clock. The number of holes in the cheese corresponds to the number of seconds past the minute. If you update it every second, you can see the holes in the cheese increase.

![image](https://github.com/user-attachments/assets/5bb78927-4f34-4ce2-b66d-cdd1bb697ba3)
 ### Not the best for telling the time, but still interesting.




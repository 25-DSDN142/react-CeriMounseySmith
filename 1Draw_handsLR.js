// ----=  HANDS  =----
// USING THE GESTURE DETECTORS (check their values in the debug menu)
// detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

/* load images here */
let myImage;
function prepareInteraction() {

  bgImage = loadImage('Backgrounddsdn142.gif');

  //plant images
  plantone = loadImage('Plant1.png');//echeveria succulent
  planttwo = loadImage('Plant2.png');//echeveria succulent type 2
  plantthree = loadImage('Plant3.png');//plant
  plantfour = loadImage('Plant4.png');//monstera deliciosa
  plantfive = loadImage('Plant5.png');//monstera
  plantsix = loadImage('Plant6.png');//cactus

  //plant care instructions
  plantonetext = loadImage('Plant1text.png');//echeveria succulent
  planttwotext = loadImage('Plant2text.png');//echeveria succulent type 2
  plantthreetext = loadImage('Plant3text.png');//plant
  plantfourtext = loadImage('Plant4text.png');//monstera deliciosa
  plantfivetext = loadImage('Plant5text.png');//monstera
  plantsixtext = loadImage('Plant6text.png');//cactus

}

function drawInteraction(faces, hands) {
  // hands part
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    //console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

    let middleFingerMcpX = hand.middle_finger_mcp.x;
    let middleFingerMcpY = hand.middle_finger_mcp.y;

    /*
    Start drawing on the hands here
    */

let whatGesture = detectHandGesture(hand)



if(hand.handedness === "Left"){

if(whatGesture == "Open Palm"){
image(plantone,middleFingerMcpX-100,middleFingerMcpY-55,300,400);//echervira succulent
}

if(whatGesture == "Peace"){
  image(planttwo,middleFingerMcpX-100,middleFingerMcpY-99,300,400);//echervira succulent type 2
}

if(whatGesture == "Thumbs Up"){
 image(plantthree,middleFingerMcpX-100,middleFingerMcpY-99,300,300)//peperomia argeyria
}

if(whatGesture == "Pointing"){
 image(plantfour,middleFingerMcpX-100,middleFingerMcpY-75,300,300)//monstera deliciosa
}

if(whatGesture == "Pinch"){
 image(plantfive,middleFingerMcpX-100,middleFingerMcpY-75,300,400)//monstera
}

if(whatGesture == "Fist"){
 image(plantsix,middleFingerMcpX-100,middleFingerMcpY-75,300,300)//cactus
}
}


if(hand.handedness === "Right"){
if(whatGesture == "Open Palm"){
image(plantonetext,middleFingerMcpX-200,middleFingerMcpY-75,400,400);//echervira succulent care instructions
}


if(whatGesture == "Peace"){
  image(planttwotext,middleFingerMcpX-200,middleFingerMcpY-100,400,400);//echervira succulent type 2 care instructions
}

if(whatGesture == "Thumbs Up"){
 image(plantthreetext,middleFingerMcpX-200,middleFingerMcpY-75,400,400)//peperomia argeyria care instructions
}


if(whatGesture == "Pointing"){
 image(plantfourtext,middleFingerMcpX-200,middleFingerMcpY-75,400,400);//monstera deliciosa care instructions
}


if(whatGesture == "Pinch"){
 image(plantfivetext,middleFingerMcpX-200,middleFingerMcpY-75,400,400);//monstera care instructions
}


if(whatGesture == "Fist"){
 image(plantsixtext,middleFingerMcpX-200,middleFingerMcpY-75,400,400);//cactus care instructions
 }
}
    //Stop drawing on the hands here
  }
}


function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {
  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 10);
  }
  pop()

}
var portal1 = [];
var portal2 = [];
var portal3 = [];
var entity = [];
var character = [];
var spawnRate = 30
var newFrame = 0;
var spawnTime = 1800;
var highscore;
var diamond = [];
var cheating = 0;
var cheatCount = 0;
var portalCooldown = 0;
var landMine = [];
var litMine = [];
var explosion = [];
var canvasX = 800;
var canvasY = 600;
var spawnDist = 80;
var speed = [];
var speedLength = 0;
var charSpeedDefault = 5;
var charTwoExist = false
var gameOn = true















function preload() {
  imgdiamond = loadImage("assets/Diamond.png")
  imgportal1 = loadImage("assets/Portal_1.png")
  imgportal2 = loadImage("assets/Portal_2.png")
  imgportal3 = loadImage("assets/Portal_3.png")
  imglandMine = loadImage("assets/Landmine.png")
  imglitMine = loadImage("assets/Litmine.png")
  imgspeed = loadImage("assets/Speed.png")
}



function setup() {

  createCanvas(canvasX, canvasY)
  imageMode(CENTER)
  rectMode(CENTER)
  ellipseMode(CENTER)
  frameRate(60)
  portal1[0] = new constructorPortal1(random(0, width), random(0, height))
  portal2[0] = new constructorPortal2(random(0, width), random(0, height))
  portal3[0] = new constructorPortal3(random(0, width), random(0, height))
  character[0] = new constructorCharacter(200, 200, 100, 100, 255);
  entity[0] = new constructorEntity(random(0, width), random(0, height), random(1, 5), random(0, 255), random(0, 255), random(0, 255))
  entity[1] = new constructorEntity(random(0, width), random(0, height), random(1, 5), random(0, 255), random(0, 255), random(0, 255))
  entity[2] = new constructorEntity(random(0, width), random(0, height), random(1, 5), random(0, 255), random(0, 255), random(0, 255))
  diamond[0] = new constructorDiamond(random(0, width), random(0, height))

  textSize(60)
  textAlign(CENTER)
  if (localStorage.highscore === undefined) {
    localStorage.highscore = "0";
  }
  highscore = Number(localStorage.highscore);
}

function draw() {
  for (i = 0; i < character.length; i++) {
    if (character[i].touched == false) {
      character[i].score += 5
    }
  }
  background(0)
    //Displaying Objects
  for (i = 0; i < portal1.length; i++) {
    portal1[i].display()
  }
  for (i = 0; i < portal2.length; i++) {
    portal2[i].display()
  }
  for (i = 0; i < portal3.length; i++) {
    portal3[i].display()
  }
  for (i = 0; i < diamond.length; i++) {
    diamond[i].display()
  }
  for (i = 0; i < speed.length; i++) {
    speed[i].display()
  }
  for (i = 0; i < landMine.length; i++) {
    landMine[i].display()
  }
  for (i = 0; i < litMine.length; i++) {
    litMine[i].display()
  }
  for (i = 0; i < character.length; i++) {
    character[i].display()
  }
  for (i = 0; i < entity.length; i++) {
    entity[i].display()
    entity[i].behaviour()
  }
  for (i = 0; i < explosion.length; i++) {
    explosion[i].display()
  }


  //Keyboard Commands
  if (character[0].touched === false) {
    if (keyIsDown(87)) {
      character[0].y -= character[0].charSpeed
    }
    if (keyIsDown(83)) {
      character[0].y += character[0].charSpeed
    }
    if (keyIsDown(65)) {
      character[0].x -= character[0].charSpeed
    }
    if (keyIsDown(68)) {
      character[0].x += character[0].charSpeed
    }
  }
  if (charTwoExist === true) {
    if (character[1].touched === false) {
      if (keyIsDown(38) && charTwoExist === true) {
        character[1].y -= character[1].charSpeed
      }
      if (keyIsDown(40) && charTwoExist === true) {
        character[1].y += character[1].charSpeed
      }
      if (keyIsDown(37) && charTwoExist === true) {
        character[1].x -= character[1].charSpeed
      }
      if (keyIsDown(39) && charTwoExist === true) {
        character[1].x += character[1].charSpeed
      }
    }
  }

  if (keyIsDown(49)) {
    entity[entity.length] = new constructorEntity(random(0, width), random(0, height), random(1, 5), random(0, 255), random(0, 255), random(0, 255))
  }
  //Land Mine Spawn
  if (keyIsDown(50)) {
    landMine[landMine.length] = new constructorLandMine(random(0, width), random(height))
  }
  //Speed Boost Spawn
  if (keyIsDown(51)) {
    speed[0] = new constructorSpeed(random(0, width), random(height))
  }

  for (i = 0; i < character.length; i++) {
    character[i].behaviour()
    for (j = 0; j < entity.length; j++) {
      if (dist(character[i].x, character[i].y, entity[j].x, entity[j].y) < 12) {
        character[i].touched = true
      }
    }
  }
  //Spawning Entities
  if (gameOn === true) {
    if (entity.length > 75) {
      entity.shift();
    }
    if (newFrame % spawnRate === 0) {
      entity[entity.length] = new constructorEntity(random(0, width), random(0, height), random(1, 5), random(0, 255), random(0, 255), random(0, 255))
    }
    if (newFrame === spawnTime) {
      spawnRate = 10
    }
    if (newFrame === 2 * spawnTime) {
      spawnRate = 7.5
    }
    if (newFrame === 3 * spawnTime) {
      spawnRate = 6
    }
  }
  //Death Sequence
  if (gameOn == false) {
    textSize(60)
    text("Game Over", width / 2, height / 2)
    if (charTwoExist == false) {
      text("Score:" + character[0].score, width / 2, height / 2 + 50)
    }
  }
  //Resetting Frames
  if (gameOn == true) {
    newFrame++
  }
  //Highscore
  for (i = 0; i < character.length; i++) {
    if (highscore < character[i].score) {
      highscore = character[i].score
      localStorage.highscore = String(highscore);
    }
  }
  textSize(30)
  text("High Score:" + highscore, width - 140, 30)
  textAlign(LEFT)
  if (newFrame % 30 === 0) {
    fill(random(0, 255), random(0, 255), random(0, 255))
  }
  if (charTwoExist === false) {
    text("Score:" + character[0].score, 0, 30)
  }
  if (charTwoExist === true) {
    text("Player 1 Score:" + character[0].score, 0, 30)
    text("Player 2 Score:" + character[1].score, 0, 60)
  }
  textAlign(CENTER)

  //localStorage.clear()
  //Collect Points
  for (i = 0; i < character.length; i++) {
    for (var j = 0; j < diamond.length; j++) {
      if (dist(character[i].x, character[i].y, diamond[j].x, diamond[j].y) < 13) {
        character[i].score += 2000
        diamond.shift()
      }
    }
  }
  //Respawn Points
  if (newFrame % 600 === 0) {
    diamond.shift()
    diamond[0] = new constructorDiamond(random(0, width), random(0, height))
  }
  if (cheating > 0 && cheating < 4) {
    cheatCount++
  }
  //Reset Cheat Code
  if (cheatCount == 600) {
    cheating = 0
    cheatCount = 0
  }
  //Portal Transportation Character
  for (i = 0; i < character.length; i++) {
    if (portalCooldown === 0 && gameOn === true) {
      if (dist(character[i].x, character[i].y, portal1[0].x, portal1[0].y) < 15) {
        character[i].x = portal2[0].x
        character[i].y = portal2[0].y
        character[i].score += 100
        portalCooldown = 60
      } else if (dist(character[i].x, character[i].y, portal2[0].x, portal2[0].y) < 15) {
        character[i].x = portal1[0].x
        character[i].y = portal1[0].y
        character[i].score += 100
        portalCooldown = 60
      }
    }
  }

  for (i = 0; i < entity.length; i++) {
    if (entity[i].portalcd === 0) {
      for (var j = 0; j < portal1.length; j++) {
        if (dist(entity[i].x, entity[i].y, portal1[j].x, portal1[j].y) < 15) {
          entity[i].x = portal2[j].x + 10
          entity[i].y = portal2[j].y + 10
          entity[i].portalcd = 60
        }
      }
    }
    if (entity[i].portalcd === 0) {
      for (j = 0; j < portal2.length; j++) {
        if (dist(entity[i].x, entity[i].y, portal2[j].x, portal2[j].y) < 15) {
          entity[i].x = portal1[j].x + 10
          entity[i].y = portal1[j].y + 10
          entity[i].portalcd = 60
        }
      }
    }
  }
  //Portal Cooldowns
  if (portalCooldown > 0) {
    portalCooldown -= 1
  }
  //Change Portal Location
  if (newFrame % 300 == 0) {
    portal1.shift()
    portal2.shift()
    portal1[0] = new constructorPortal1(random(0, width), random(0, height))
    portal2[0] = new constructorPortal2(random(0, width), random(0, height))
  }
  //Land Mine Amount
  for (j = 0; j < landMine.length; j++) {
    if (dist(character[0].x, character[0].y, landMine[j].x, landMine[j].y) < 20) {
      landMine.splice(j, 1)
      character[0].mineCount++
        continue
    }
    if (charTwoExist === true) {
      if (dist(character[1].x, character[1].y, landMine[j].x, landMine[j].y) < 20) {
        landMine.splice(j, 1)
        character[1].mineCount++
      }
    }
  }
  //Land Mine Explosion
  for (i = 0; i < litMine.length; i++) {
    for (j = 0; j < entity.length; j++) {
      if (dist(litMine[i].x, litMine[i].y, entity[j].x, entity[j].y) < 20) {
        explosion[explosion.length] = new constructorExplosion(litMine[i].x, litMine[i].y, 0, litMine[i].placer)
        litMine.splice(i, 1)
        break;
      }
    }
  }
  for (i = 0; i < explosion.length; i++) {
    explosion[i].explodeRadius += 1
    for (j = 0; j < entity.length; j++) {
      if (dist(explosion[i].x, explosion[i].y, entity[j].x, entity[j].y) < explosion[i].explodeRadius / 2 + 5) {
        entity.splice(j, 1)
        if (character[explosion[i].placer].touched == false) {
          character[explosion[i].placer].score += 100
        }
      }
    }
    if (explosion[i].explodeRadius >= 120) {
      explosion.splice(i, 1)
    }
  }
  //Land Mine Spawning
  if (gameOn == true) {
    if (newFrame % 420 == 0) {
      landMine[landMine.length] = new constructorLandMine(random(0, width), random(height))
    }
  }
  //Special Portal Teleportation
  for (i = 0; i < character.length; i++) {
    if (dist(character[i].x, character[i].y, portal3[0].x, portal3[0].y) < 30) {
      character[i].x = random(0, width)
      character[i].y = random(0, height)
      character[i].score += 1000
    }
  }
  for (i = 0; i < entity.length; i++) {
    if (dist(entity[i].x, entity[i].y, portal3[0].x, portal3[0].y) < 30) {
      entity[i].x = random(0, width)
      entity[i].y = random(0, height)
    }
  }
  //Respawn Special Portal
  if (newFrame % 600 == 0) {
    portal3[0] = new constructorPortal3(random(0, width), random(0, height))
  }
  //Speed Boost Spawn
  if (newFrame % 1200 == 0) {
    speed[0] = new constructorSpeed(random(0, width), random(0, height))
  }
  //Speed Boost
  for (i = 0; i < character.length; i++) {

    for (j = 0; j < speed.length; j++) {
      if (dist(character[i].x, character[i].y, speed[j].x, speed[j].y) < 20) {
        speed.splice(j, 1)
        speedLength = 600
        character[i].charSpeed *= 1.5
      }

    }
  }
  if (speedLength > 0) {
    speedLength--
  }
  if (speedLength == 0) {
    speedLength = -1
    for (i = 0; i < character.length; i++) {
      character[i].charSpeed = charSpeedDefault
    }
  }

  //Entity Chasing Nearest Character
  for (j = 0; j < entity.length; j++) {
    var closestDist = 1000000;
    var currentDist = 0;
    for (i = 0; i < character.length; i++) {
      currentDist = dist(character[i].x, character[i].y, entity[j].x, entity[j].y)
      if (currentDist < closestDist && character[i].touched == false) {
        closestDist = currentDist
        entity[j].target = i
      }
    }
  }
  //Ending Game
  if (charTwoExist == true) {
    if ((character[0].touched == true) && (character[1].touched == true)) {
      gameOn = false
    }
  } else {
    if (character[0].touched == true) {
      gameOn = false
    }
  }












}


function constructorEntity(x, y, pixelSpeed, colourR, colourG, colourB) {
  this.x = x;
  this.y = y;
  for (i = 0; i < character.length; i++) {
    this.distance = dist(this.x, this.y, character[i].x, character[i].y)
    while (this.distance < spawnDist) {
      this.x = random(0, width)
      this.y = random(0, height)
      this.distance = dist(this.x, this.y, character[i].x, character[i].y)
    }
  }
  this.pixelSpeed = pixelSpeed
  this.colourR = colourR;
  this.colourG = colourG;
  this.colourB = colourB;
  this.portalcd = 0
  this.target = 0

  this.display = function() {
    fill(colourR, colourG, colourB)
    ellipse(this.x, this.y, 9, 9)
  }
  this.behaviour = function() {
    if (this.portalcd > 0) {
      this.portalcd -= 1
    }

    this.xSpeed = (this.pixelSpeed * (character[this.target].x - this.x) / this.distance)
    this.ySpeed = (this.pixelSpeed * (character[this.target].y - this.y) / this.distance)

    this.x += this.xSpeed
    this.y += this.ySpeed
  }
}

function constructorCharacter(x, y, colourR, colourG, colourB) {
  this.x = x;
  this.y = y;
  this.colourR = colourR;
  this.colourG = colourG;
  this.colourB = colourB;
  this.distance = 800
  this.mineCount = 0
  this.touched = false
  this.score = 0
  this.charSpeed = charSpeedDefault

  this.display = function() {
    fill(255)
    ellipse(this.x + 0.5, this.y + 0.5, 20, 20)
    fill(this.colourR, this.colourG, this.colourB)
    rect(this.x, this.y, 10, 10)

  }

  this.behaviour = function() {
    if (this.x < 10) {
      this.x = 10
    }
    if (this.x > width - 10) {
      this.x = width - 10
    }
    if (this.y < 10) {
      this.y = 10
    }
    if (this.y > height - 10) {
      this.y = height - 10
    }
  }
}

function mouseClicked() {
  if (gameOn == false) {
    entity = [];
    portal1[0] = new constructorPortal1(random(0, width), random(0, height))
    portal2[0] = new constructorPortal2(random(0, width), random(0, height))
    portal3[0] = new constructorPortal3(random(0, width), random(0, height))
    spawnDist = 300
    entity[0] = new constructorEntity(random(0, width), random(0, height), random(1, 5), random(0, 255), random(0, 255), random(0, 255))
    entity[1] = new constructorEntity(random(0, width), random(0, height), random(1, 5), random(0, 255), random(0, 255), random(0, 255))
    entity[2] = new constructorEntity(random(0, width), random(0, height), random(1, 5), random(0, 255), random(0, 255), random(0, 255))
    spawnDist = 60
    diamond[0] = new constructorDiamond(random(0, width), random(0, height))
    newFrame = 0
    spawnRate = 15
    if (cheating == 4) {
      highscore = 0
    }
    cheatCount = 0
    cheating = 0
    for (i = landMine.length; i > -1; i--) {
      landMine.splice(i, 1)
    }
    for (i = litMine.length; i > -1; i--) {
      litMine.splice(i, 1)
    }
    for (i = 0; i < character.length; i++) {
      character[i].mineCount = 0
      character[i].touched = false
      character[i].score = 0
      character[i].charSpeed = charSpeedDefault
    }
    gameOn = true
    speed.splice(0, 1)
  }
}

function constructorDiamond(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    image(imgdiamond, this.x, this.y)
  }
}

function keyPressed() {
  //Reset Highscore
  if (keyCode == 74) {
    cheating = 1
  } else if (keyCode == 85 && cheating == 1) {
    cheating = 2
  } else if (keyCode == 77 && cheating == 2) {
    cheating = 3
  } else if (keyCode == 80 && cheating == 3) {
    cheating = 4
  }
  //Placing Mines
  if (keyCode == 32) {
    if (character[0].mineCount > 0) {
      character[0].mineCount--
        litMine[litMine.length] = new constructorLitMine(character[0].x, character[0].y, 0)
      character[0].score -= 500
    }
  }
  if (charTwoExist === true) {
    if (keyCode == 16) {
      if (character[1].mineCount > 0) {
        character[1].mineCount--
          litMine[litMine.length] = new constructorLitMine(character[1].x, character[1].y, 1)
        character[1].score -= 500
      }
    }
  }
  //Spawn Player 2
  if (charTwoExist == false && keyCode == 38) {
    character[1] = new constructorCharacter(200, 200, 8, 170, 60);
    charTwoExist = true
  }
}

function constructorPortal1(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    image(imgportal1, this.x, this.y)
  }
}

function constructorPortal2(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    image(imgportal2, this.x, this.y)
  }
}

function constructorLandMine(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    image(imglandMine, this.x, this.y)
  }
}

function constructorLitMine(x, y, placer) {
  this.x = x;
  this.y = y;
  this.placer = placer

  this.display = function() {
    image(imglitMine, this.x, this.y)
  }
}

function constructorExplosion(x, y, explodeRadius, placer) {
  this.x = x;
  this.y = y;
  this.explodeRadius = explodeRadius;
  this.placer = placer

  this.display = function() {
    fill(0, 246, 255)
    ellipse(this.x, this.y, this.explodeRadius)
  }
}

function constructorPortal3(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    image(imgportal3, this.x, this.y)
  }
}

function constructorSpeed(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    image(imgspeed, this.x, this.y)
  }
}
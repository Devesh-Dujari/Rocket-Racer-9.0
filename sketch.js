//Declaring variables.
var backgroundImg;

var rocket, rocketImg;
var space, spaceImg;

var comet, cometImg, cometGroup;
var bronzeCoin, bronzeCoinImg, bronzeCoinGroup;
var silverCoin, silverCoinImg, silverCoinGroup;
var goldCoin, goldCoinImg, goldCoinGroup;
var gem, gemImg, gemGroup;

var weapon, weaponImg, weaponGroup;
var fuel, fuelImg, fuelGroup;

var gameOver, gameOverImg;
var restart, restartImg;
var win, winImg;
var home, homeImg;
var back, backImg;

var play, playImg;
var line1, line2, line3, line4;

var gameState = "0";

var distance = 0;
var coinCount = 0;
var deaths = 0;
var gemCount = 0;

var weaponCount = 10;
var fuelCount = 100;

var highScoreDist = 0;
var highScoreCoin = 0;

var backgroundSound,
  coinCollectSound,
  gameOverSound,
  winSound,
  weaponDeployedSound,
  gemCollectSound;

var rocketMovingSpeed = 5;

var banner1, banner1Img;
var banner2, banner2Img;
var banner3, banner3Img;

function preload() {
  //Loading images in variables.
  backgroundImg = loadImage("images/background/rocketRacer.jpg");

  rocketImg = loadImage("images/elements/rocket.png");
  spaceImg = loadImage("images/background/space.jpg");

  cometImg = loadImage("images/elements/comet.png");
  bronzeCoinImg = loadImage("images/elements/bronzeCoin.png");
  silverCoinImg = loadImage("images/elements/silverCoin.png");
  goldCoinImg = loadImage("images/elements/goldCoin.png");
  gemImg = loadImage("images/elements/diamond.png");

  weaponImg = loadImage("images/elements/fireball.png");
  fuelImg = loadImage("images/elements/fuel.png");

  gameOverImg = loadImage("images/interface/gameOver.png");
  restartImg = loadImage("images/interface/restart.png");
  playImg = loadImage("images/interface/play.png");
  homeImg = loadImage("images/interface/home.png");
  winImg = loadImage("images/interface/win.png");
  backImg = loadImage("images/interface/back.png");

  banner1Img = loadImage("images/interface/banner-1.png");
  banner2Img = loadImage("images/interface/banner-3.png");
  banner3Img = loadImage("images/interface/banner-4.png");

  //Loding sounds in variables.
  //backgroundSound = loadSound("sound/backgroundSound.mp3");
  coinCollectSound = loadSound("sound/coinCollect.mp3");
  gameOverSound = loadSound("sound/gameOver.wav");
  winSound = loadSound("sound/win.mp3");
  weaponDeployedSound = loadSound("sound/weaponDeployed.wav");
  gemCollectSound = loadSound("sound/diamondCollect.mp3");
}

function setup() {
  //Creating a screen.
  createCanvas(400, 500);

  //Creating space.
  space = createSprite(200, 150, 20, 20);
  space.addImage(spaceImg);
  space.scale = 0.86;
  space.velocityY = 8;

  //Creating rocket.
  rocket = createSprite(200, 380, 20, 20);
  rocket.addImage(rocketImg);
  rocket.scale = 0.125;
  //rocket.debug=true;
  rocket.setCollider("rectangle", 0, -200, 400, 600);

  //Creating the lines which show all the parametres of the game.
  line1 = createSprite(10, 50, 2, 15);
  line1.visible = false;

  line2 = createSprite(390, 50, 2, 15);
  line2.visible = false;

  line3 = createSprite(200, 57, 380, 2);
  line3.visible = false;

  line4 = createSprite(200, 63, 2, 10);
  line4.visible = false;

  //Creating the play botton for Instructions gameState.
  play = createSprite(200, 435, 10, 10);
  play.addImage(playImg);
  play.scale = 1.5;
  play.visible = false;

  //Creating gameOver sprite.
  gameOver = createSprite(200, 150, 10, 10);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.35;
  gameOver.visible = false;

  //Creating restart button..
  restart = createSprite(130, 280, 10, 10);
  restart.addImage(restartImg);
  restart.scale = 1.1;
  restart.visible = false;

  //Creating the home button..
  home = createSprite(260, 280, 10, 10);
  home.addImage(homeImg);
  home.scale = 1.1;
  home.visible = false;

  //Creating the win sprite.
  win = createSprite(200, 180, 10, 10);
  win.addImage(winImg);
  win.scale = 0.3;
  win.visible = false;

  back = createSprite(200, 425, 10, 10);
  back.addImage(backImg);
  back.scale = 0.275;
  back.visible = false;

  //Creating banners for the game menu.
  banner1 = createSprite(200, 150, 10, 10);
  banner1.addImage(banner1Img);
  banner1.scale = 0.3;
  banner1.visible = false;

  banner2 = createSprite(200, 250, 10, 10);
  banner2.addImage(banner2Img);
  banner2.scale = 0.3;
  banner2.visible = false;

  banner3 = createSprite(200, 350, 10, 10);
  banner3.addImage(banner3Img);
  banner3.scale = 0.3;
  banner3.visible = false;

  //Declaring groups.
  cometGroup = new Group();
  bronzeCoinGroup = new Group();
  silverCoinGroup = new Group();
  goldCoinGroup = new Group();
  gemGroup = new Group();
  weaponGroup = new Group();
  fuelGroup = new Group();
}

function draw() {
  //Giving a solid background to the game.
  background(0);

  //backgroundSound.play();

  //Game State START.
  if (gameState === "0") {
    //Giving background for gameState START.
    background(backgroundImg);

    //Visibility rules for gameState START.
    space.visible = false;
    rocket.visible = false;
    gameOver.visible = false;
    restart.visible = false;
    home.visible = false;
    win.visible = false;
    play.visible = false;

    //Displaying some text to transform to the next gameState.
    fill(255);
    textFont("Bahnschrift");
    textSize(30);
    text("Press Space to continue", 40, 470);

    //Transforming to the next gameState.
    if (keyDown("space")) {
      gameState = "5";
    }
  }

  //Game State INSTRUCTIONS.
  if (gameState === "1") {
    //Visibility rules for gameState INSTRUCTIONS.
    play.visible = false;
    back.visible = true;
    line1.visible = true;
    line2.visible = true;
    line3.visible = true;
    line4.visible = true;
    space.visible = false;
    rocket.visible = false;
    home.visible = false;
    banner1.visible = false;
    banner2.visible = false;
    banner3.visible = false;

    //Making play button go to its original position.
    play.y = 431;
    play.scale = 1.5;

    //Displaying text to give some basic instructions, rules and parametres of the game
    fill(255);
    textFont("Bahnschrift");
    textSize(35);
    text("INSTRUCTIONS", 83, 120);

    textSize(15);
    text("These are the different parametres of the game", 40, 80);

    text(
      "1. Use right and left arrows or A and S keys for moving the",
      10,
      140
    );
    text("rocket", 27, 155);

    text("2. Hit coins and diamonds to collect them, dont touch", 10, 175);
    text("comets or else the game will be over.", 27, 190);

    text("3. Use the up arrow or W key to fire fire-balls, anything", 10, 210);
    text("that will touch these will get destroyed.", 27, 225);

    text("4. Use down arrow or S key to pause the game.", 10, 245);

    text("5. Use up arrow or W key to unpause the game and return", 10, 265);
    text("to the game", 27, 280);

    text(
      "6. Hit the fuel tanker to get it, every tanker will increse",
      10,
      300
    );
    text("your fuel level by 10%.", 27, 315);

    text("7. This is an infinite game. Reach the maximum distance", 10, 335);
    text("with as many coins in your journey.", 27, 350);

    //Transforming into the next gameState.
    if (mousePressedOver(back)) {
      gameState = "5";
    }
  }

  //Game State PLAY.
  if (gameState === "2") {
    //Incrementing the distance while the game is going on.
    distance = distance + Math.round(getFrameRate() / 50);

    space.velocityY = 8;

    //Visibility rules for gameState PLAY.
    rocket.visible = true;
    space.visible = true;
    play.visible = false;
    line1.visible = false;
    line2.visible = false;
    line3.visible = false;
    line4.visible = false;
    gameOver.visible = false;
    home.visible = false;
    win.visible = false;
    restart.visible = false;
    banner1.visible = false;
    banner2.visible = false;
    banner3.visible = false;

    //Regenerating the space.
    if (space.y > 350) {
      space.y = 140;
    }

    //Making rocket move with arrow keys are pressed.
    if (keyDown("right_arrow") || keyDown("D")) {
      rocket.x = rocket.x + rocketMovingSpeed;
    }

    if (keyDown("left_arrow") || keyDown("A")) {
      rocket.x = rocket.x - rocketMovingSpeed;
    }

    //Making rocket come back from the other side if it goes out from one.
    if (rocket.x > 415) {
      rocket.x = -15;
    }

    if (rocket.x < -15) {
      rocket.x = 415;
    }

    //Function call.
    spawnComets();
    spawnBronzeCoins();
    spawnSilverCoins();
    spawnGoldCoins();
    spawnGems();
    spawnFuel();

    //Incresing coinCount if rocket Touches coins.
    if (bronzeCoinGroup.isTouching(rocket)) {
      coinCount += 1;
      //to destroy only one touched coin
      bronzeCoinGroup.get(0).destroy();
      coinCollectSound.play();
    }

    if (silverCoinGroup.isTouching(rocket)) {
      coinCount += 5;
      //to destroy only one touched coin
      silverCoinGroup.get(0).destroy();
      coinCollectSound.play();
    }

    if (goldCoinGroup.isTouching(rocket)) {
      coinCount += 10;
      //to destroy only one touched coin
      goldCoinGroup.get(0).destroy();
      coinCollectSound.play();
    }

    if (gemGroup.isTouching(rocket)) {
      gemCount += 1;
      //To destroy only one touched gem.
      gemGroup.get(0).destroy();
      gemCollectSound.play();
    }

    //Deploying fire balls when up-arow key key pressed.
    if (keyWentDown("up_arrow") && weaponCount > 0) {
      spawnWeapons();
      weaponCount -= 1;
      weaponDeployedSound.play();
    } else if (keyWentDown("W") && weaponCount > 0) {
      spawnWeapons();
      weaponCount -= 1;
      weaponDeployedSound.play();
    }

    //Destroying everything when fire ball is touching it.
    if (weaponGroup.isTouching(cometGroup)) {
      //To destroy that single coin touched.
      cometGroup.get(0).destroy();
    }

    if (weaponGroup.isTouching(bronzeCoinGroup)) {
      //To destroy that single coin touched.
      bronzeCoinGroup.get(0).destroy();
    }

    if (weaponGroup.isTouching(silverCoinGroup)) {
      //To destroy that single coin touched.
      silverCoinGroup.get(0).destroy();
    }

    if (weaponGroup.isTouching(goldCoinGroup)) {
      //To destroy that single coin touched.
      goldCoinGroup.get(0).destroy();
    }

    //Reducing fuel with incresing distance.
    if (distance % 500 === 0) {
      fuelCount -= 1;
    }

    //Making rocket get fuel amd incresing it when it is touching a fuel tanker.
    if (rocket.isTouching(fuelGroup)) {
      fuelCount += 10;
      //To destroy only the fuel tank touched.
      fuelGroup.get(0).destroy();
    }

    //Increasing rocket's speed progressively.
    if (coinCount > 50 && rocketMovingSpeed < 8) {
      rocketMovingSpeed += 0.001;
    }
    console.log("Rocket Moving Speed :" + rocketMovingSpeed);

    //Transforming into the next gameState.
    if (cometGroup.isTouching(rocket)) {
      gameState = "3";
      space.velocityY = 0;
      deaths += 1;
      gameOverSound.play();
    }

    /*if (distance > 9999) {
      gameState = "4";
      winSound.play();
    }*/

    if (keyDown("down_arrow") || keyDown("S")) {
      gameState = "4";
    }
  }

  //Game State END.
  if (gameState === "3") {
    //Visibility rules for gameState END.
    gameOver.visible = true;
    restart.visible = true;
    home.visible = true;
    rocket.visible = false;

    //Making the rocket go back in its original position in this gameState.
    rocket.x = 200;
    rocket.y = 380;

    //Stoping the space
    space.velocityY = 0;

    //Destroying all elements of each Group.
    cometGroup.destroyEach();
    bronzeCoinGroup.destroyEach();
    silverCoinGroup.destroyEach();
    goldCoinGroup.destroyEach();
    gemGroup.destroyEach();
    weaponGroup.destroyEach();
    fuelGroup.destroyEach();

    //Generating high score.
    if (distance > highScoreDist) {
      highScoreDist = distance;
    }

    if (coinCount > highScoreCoin) {
      highScoreCoin = coinCount;
    }

    //Restarting the game when restart button is pressed.
    if (mousePressedOver(restart)) {
      reset();
    }

    //Going back to gameState START when home button is pressed.
    if (mousePressedOver(home)) {
      goHome();
    }
  }

  //Game State PAUSE.
  if (gameState === "4") {
    //Visibility rules for pause gameState.
    rocket.visible = false;
    restart.visible = true;
    home.visible = true;
    play.visible = true;
    space.visible = false;
    comet.visible = false;
    /*bronzeCoin.visible = false;
    silverCoin.visible = false;
    goldCoin.visible = false;
    gem.visible = false;
    weapon.visible = false;
    fuel.visible = false;*/

    fill(255);
    textFont("Bahnschrift");
    textSize(53);
    text("GAME PAUSED", 25, 170);

    //Altering the position of play button.
    play.y = 410;
    play.scale = 1.7;

    //Stoping the space.
    space.velocityY = 0;

    //Stoping all elements from all groups.
    cometGroup.setVelocityYEach(0);
    bronzeCoinGroup.setVelocityYEach(0);
    silverCoinGroup.setVelocityYEach(0);
    goldCoinGroup.setVelocityYEach(0);
    gemGroup.setVelocityYEach(0);
    weaponGroup.setVelocityYEach(0);
    fuelGroup.setVelocityYEach(0);

    //Transforming into another gmeState.
    if (mousePressedOver(play) || keyDown("W") || keyDown("up_arrow")) {
      gameState = "2";
      weaponGroup.destroyEach();
    }

    if (mousePressedOver(restart)) {
      reset();
    }

    if (mousePressedOver(home)) {
      goHome();
    }
  }

  //Game State MENU.
  if (gameState === "5") {
    //visibility rules for menu gameState.
    banner1.visible = true;
    banner2.visible = true;
    banner3.visible = true;
    space.visible = true;
    back.visible = false;

    //Slowing the space.
    space.velocityY = 1;

    //Regenerating the space.
    if (space.y > 350) {
      space.y = 140;
    }

    if (mousePressedOver(banner1) || keyDown("1")) {
      gameState = "2";
    }

    if (mousePressedOver(banner2) || keyDown("2")) {
      gameState = "1";
    }
  }

  //Displaying sprites to the screen.
  drawSprites();

  //Showing some text to display the parametres of the game.
  fill(255);
  textSize(15);
  textFont("Bahnschrift");
  text("Distance: " + distance, 10, 20);
  text("Coins: " + coinCount, 130, 20);
  text("Diamonds: " + gemCount, 213, 20);
  text("Deaths: " + deaths, 10, 40);
  text("Fireballs: " + weaponCount, 318, 20);
  text("Fuel left: " + fuelCount + "%", 95, 40);
  text("High Score: " + highScoreDist + "," + highScoreCoin, 200, 40);
}

//Creating comets.
function spawnComets() {
  if (frameCount % 135 === 0) {
    comet = createSprite(200, -20, 10, 10);
    comet.addImage(cometImg);
    comet.x = Math.round(random(-10, 410));
    comet.velocityY = 10 + distance / 2000;
    console.log("Comet :" + comet.velocityY);
    comet.lifetime = 90;
    comet.scale = random(0.07, 0.15);

    //comet.debug = true;
    comet.setCollider("rectangle", 0, 0, 300, 800);

    cometGroup.add(comet);
    rocket.depth = comet.depth;
    rocket.depth += 1;
  }
}

//Creating bronzeCoins.
function spawnBronzeCoins() {
  if (frameCount % 177 === 0) {
    bronzeCoin = createSprite(200, -20, 10, 10);
    bronzeCoin.addImage(bronzeCoinImg);
    bronzeCoin.x = Math.round(random(-10, 410));
    bronzeCoin.velocityY = 7 + distance / 2000;
    console.log("BronzeCoin :" + bronzeCoin.velocityY);
    bronzeCoin.lifetime = 80;
    bronzeCoin.scale = 0.7;
    bronzeCoin.rotationSpeed = random(-3, 3);

    //bronzeCoin.debug = true;
    bronzeCoin.setCollider("circle", 0, 0, 27);

    bronzeCoinGroup.add(bronzeCoin);
    rocket.depth = bronzeCoin.depth;
    rocket.depth += 1;
  }
}

//Creating silverCoins.
function spawnSilverCoins() {
  if (frameCount % 1057 === 0) {
    silverCoin = createSprite(200, -20, 10, 10);
    silverCoin.addImage(silverCoinImg);
    silverCoin.x = Math.round(random(-50, 450));
    silverCoin.velocityY = 15 + distance / 2500;
    console.log("SilverCoin :" + silverCoin.velocityY);
    silverCoin.lifetime = 40;
    silverCoin.scale = 0.7;
    silverCoin.rotationSpeed = random(-5, 5);

    //silverCoin.debug = true;
    silverCoin.setCollider("circle", 0, 0, 27);

    silverCoinGroup.add(silverCoin);
    rocket.depth = silverCoin.depth;
    rocket.depth += 1;
  }
}

//Creating goldCoins.
function spawnGoldCoins() {
  if (frameCount % 3071 === 0) {
    goldCoin = createSprite(200, -20, 10, 10);
    goldCoin.addImage(goldCoinImg);
    goldCoin.x = Math.round(random(-100, 500));
    goldCoin.velocityY = 20 + distance / 2500;
    console.log("Gold Coin :" + goldCoin.velocityY);
    goldCoin.lifetime = 30;
    goldCoin.scale = 0.7;
    goldCoin.rotationSpeed = random(-8, 8);

    //goldCoin.debug = true;
    goldCoin.setCollider("circle", 0, 0, 27);

    goldCoinGroup.add(goldCoin);
    rocket.depth = goldCoin.depth;
    rocket.depth += 1;
  }
}

function spawnGems() {
  if (frameCount % 5027 === 0) {
    gem = createSprite(200, -20, 10, 10);
    gem.addImage(gemImg);
    gem.x = Math.round(random(-10, 410));
    gem.velocityY = 15;
    gem.scale = 0.175;
    gem.lifetime = 250;
    gem.rotationSpeed = random(-3, 3);

    //gem.debug = true;
    gem.setCollider("circle", 0, 0, 100);

    gemGroup.add(gem);
    rocket.depth = gem.depth;
    rocket.depth += 1;
  }
}

//Creating fire balls.
function spawnWeapons() {
  weapon = createSprite(200, 310, 10, 10);
  weapon.addImage(weaponImg);
  weapon.velocityY = -5;
  weapon.lifetime = 100000;
  weapon.x = rocket.x;
  weapon.scale = 0.1;

  //weapon.debug = true;
  weapon.setCollider("circle", 0, -40, 200);

  weaponGroup.add(weapon);
  weapon.depth = rocket.depth;
  weapon.depth += 1;
}

//Creating fuel tanks.
function spawnFuel() {
  if (distance % 15000 === 0) {
    fuel = createSprite(200, -20, 10, 10);
    fuel.addImage(fuelImg);
    fuel.scale = 0.1;
    fuel.x = Math.round(random(-50, 450));
    fuel.velocityY = 5;
    fuel.lifetime = 180;
    fuelGroup.add(fuel);
  }
}

function reset() {
  distance = 0;
  coinCount = 0;
  fuelCount = 100;
  weaponCount = 10;
  gemCount = 0;
  gameState = "2";
  home.visible = false;
  restart.visible = false;
}

function goHome() {
  distance = 0;
  coinCount = 0;
  fuelCount = 100;
  weaponCount = 10;
  deaths = 0;
  gemCount = 0;
  gameState = "0";
  highScoreDist = 0;
  highScoreCoin = 0;
}

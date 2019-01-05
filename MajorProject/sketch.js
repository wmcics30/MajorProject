// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gamestate;
let titleScreen, gameScreen, endScreen;

let batImage;
let batSprite;
let batStamina = 10;
let batX;
let batY;

let GRAVITY = 2;
let FLAP = -15;
let counter = 0;

let grassImage;
let grassSprite;
let LeftWallSprite;
let RightWallSprite;
let finishImage;
let finishSprite;

let cloudSprite1;
let cloudSprite2;
let cloudSprite3;

let bombSprite;
let bombImage;

let rechargers;
let bombs;

let clouds;

let newEnemy;
let newBoost;
let bomb;
let gas;
let cloud1;
let cloud2;
let cloud3;
let song;

let jumpSound;

let myheight = 7000;

function preload() {
	batImage = loadImage("assets/bat2.png");
	grassImage = loadImage("assets/grass.png");
  bomb = loadImage("assets/repellent.png");
	gas = loadImage("assets/bug1.png");
	jumpSound = loadSound("assets/Bat Squeak.mp3");
	song = loadSound("assets/song.mp3");
	finishImage = loadImage("assets/cave.png");
	titleScreen = loadImage("assets/startscreen.png");
	endScreen = loadImage("assets/endscreen.png");
	cloud1 = loadImage("assets/cloud.png");
	cloud2 = loadImage("assets/cloud.png");
	cloud3 = loadImage("assets/cloud.png");

}

function setup() {

	song.setVolume(0.05);
	song.play();
	song.loop();

	createCanvas(800, 600);
	background(205, 232, 239);

	gamestate = 0;

	rechargers = new Group();
	bombs = new Group();

	batX = width / 2
	batY = myheight - 50

	// ☁ ☁	START OF CLOUDS ☁ ☁ //

	cloudSprite1 = createSprite(100, myheight - 100);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(550, myheight - 600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 1000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(550, myheight - 1300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(400, myheight - 1600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(100, myheight - 1800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 2000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 2300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 2600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 2800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 3000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 3300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 3600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 3800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 4000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 4300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 4600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 4800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 5000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 5300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 5600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 5800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 6000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 6300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 6600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 6800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	// ☁ ☁	END OF CLOUDS ☁ ☁ //



	// SPRITES //
	batSprite = createSprite(batX, batY);
	// batSprite.addImage(batImage);
	batSprite.position.x = batX;
	batSprite.position.y = batY;
	//batSprite.velocity.y = 1;

	grassSprite = createSprite(width / 2, myheight);
	grassSprite.addImage(grassImage);

	finishSprite = createSprite(width / 2, 16);
	finishSprite.addImage(finishImage);

	LeftWallSprite = createSprite(1, 0, 2, myheight * 2);
	LeftWallSprite.shapeColor = color(0);
	RightWallSprite = createSprite(width - 1, 0, 2, myheight * 2);
	RightWallSprite.shapeColor = color(0);

	while (bombs.length < 15) {
		newEnemy = createSprite(random(10, width - 50), myheight - 100);
		newEnemy.setCollider("rectangle", 0, 0, 32, 32);
		newEnemy.addImage(bomb);
		bombs.add(newEnemy);
	}

	while (rechargers.length < 15) {
		newBoost = createSprite(random(10, width - 50), myheight - 150);
		newBoost.setCollider("rectangle", 0, 0, 32, 32);
		newBoost.addAnimation("flashing", "assets/bug1.png", "assets/bug2.png", "assets/bug3.png");
		rechargers.add(newBoost);
	}


	//ANIMATIONS//
	batSprite.addAnimation("flapping", "assets/bat1.png", "assets/bat2.png","assets/bat3.png","assets/bat4.png","assets/bat5.png","assets/bat6.png","assets/bat7.png");
	batSprite.addAnimation("flying","assets/bat1.png", "assets/bat2.png","assets/bat3.png","assets/bat4.png","assets/bat5.png","assets/bat6.png","assets/bat7.png");
  // batSprite.addImage("still","assets/bat2.png");
}


function draw() {


	if (gamestate === 0) {

		image(titleScreen, 0, 0, 800, 600);
		camera.position.y = titleScreen.position

		if (keyWentDown("SPACE")) {
			newGame();
		}

	} else if (gamestate === 1) {

		background("purple");

		camera.position.y = batSprite.position.y;

		if (keyWentDown("w")) {
			batSprite.velocity.y = FLAP;
			batSprite.velocity.y += GRAVITY;
			batSprite.changeAnimation("flapping");
			//batSprite.animation.goToFrame(batSprite.animation.images.length-1);
			batStamina = batStamina - 1;
			counter = 0;
			if (jumpSound.isPlaying() === false) {
				jumpSound.play()
				jumpSound.setVolume(0.5);
			}
		}

		if (keyWentUp("w")) {
			batSprite.velocity.y = 1;
			batSprite.velocity.y += GRAVITY;
			batSprite.changeAnimation("still");
		}

		if (keyDown("w")) {
			counter++;
			if (counter >= 35) {
				batStamina = batStamina - 1;
				counter = 0;
			}
		}


		if (keyDown("a")) {
			batSprite.position.x -= 9
		}

		if (keyDown("d")) {
			batSprite.position.x += 9
		}

		batSprite.collide(grassSprite);
		batSprite.collide(LeftWallSprite);
		batSprite.collide(RightWallSprite);

		batSprite.overlap(bombs, loseStamina);
		batSprite.overlap(rechargers, gainStamina);

		if (batSprite.collide(finishSprite)) {
			gamestate = 0;
			if (keyWentDown("SPACE")) {
				newGame();
			}
		}

		textSize(15);
		textFont("Monaco");
		if (batStamina <= 5) {
			fill(186, 0, 0);
		}
		else if (batStamina >= 6) {
			fill(26, 140, 55);
		}
		text("Stamina", width - 110, batSprite.position.y);
		textSize(15);
		textFont("Monaco");
		fill(0);
		text(batStamina, width - 40, batSprite.position.y);

		drawSprites();
		drawSprites(bombs);
	}

	if (batStamina <= 0) {
		gamestate = 2
	}
	if (gamestate === 2) {

		image(endScreen, 0, 0, 500, 500);
		camera.position.y = endScreen.position

		if (keyWentDown("SPACE")) {
			newGame();
		}
	}

}

function newGame() {
	gamestate = 1;
	GRAVITY = 1;
	batSprite.velocity.y = 0;
	batStamina = 10;
	// bombs = new Group();
	// rechargers = new Group();

	batX = width / 2
	batY = myheight - 50
	batSprite.position.x = batX;
	batSprite.position.y = batY;
 	batSprite.debug=true;

	while (bombs.length < 15) {
		newEnemy = createSprite(random(10, width - 50), random(100, myheight - 50));
		newEnemy.addImage(bomb);
		newEnemy.setCollider("rectangle", 0, 0, 32, 32);
		bombs.add(newEnemy);
	}

	while (rechargers.length < 15) {
		newBoost = createSprite(random(10, width - 50), random(100, myheight - 50));
		newBoost.addAnimation("flashing", "assets/bug1.png", "assets/bug2.png", "assets/bug3.png");
		newBoost.setCollider("rectangle", 0, 0, 32, 32);
		rechargers.add(newBoost);
	}
}

function gainStamina(bat, gas) {
	batStamina = batStamina + 2
	gas.remove();
}

function loseStamina(bat, bomb) {
	batStamina = batStamina - 2
	bomb.remove();
}

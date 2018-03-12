/*
Test Game
(c) speedyplane2247 2017-2018
This game is meant as a test for a FPS I’m going to help someone with, and an anti-cheat engine for it.
*/
var gunSpeed = [0.5, 10, 0.9 ]; // Sniper, Machine, Pistol RPSecond
var pos = [ 0,0, 100 ];
var ai1 = [ 10,10, 100 ]
var ai2 = [ 20,20, 100 ]
var ai3 = [ 21, 55, 100]
var ai4 = [ -2, 5, 100 ]
var ai5 = [ -10, -10, 100 ]
var ai6 = [ -20, -20, 100]
var weaponDamage = [1, 5, 70]
var HousingMapY=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,9,9,9,9,11,12,13,14,15,15,15,15,15,3,3,3,3,3,4,5,5,5,5,5,24,23,22,21,20,19,18,17,16,24,24,24,23,22,21,20,19,18,17,16,23,22,21,20,19,18,17,16,15,14,22,22,21,20,19,18,17,16,15,14,13,12,11,11,11,9,9,9,8,7,6,5,8,7,6,5,22,22,22,23,24,25];
var HousingMapX=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,2,3,4,5,6,6,6,6,6,4,3,2,1,6,7,8,9,10,10,10,9,8,7,6,8,8,8,8,8,8,8,8,8,9,10,11,11,11,11,11,11,11,11,11,13,13,13,13,13,13,13,13,13,13,14,15,15,15,15,15,15,15,15,15,15,15,15,14,13,13,14,15,15,15,15,15,13,13,13,13,24,23,22,22,22,22];
// The X and Y of objects in example map "Housing"
var GameVersion = "1.0.2";
function askForName() {
var person = prompt("Please enter your player name", "Guest"+Math.floor(Math.random() * Math.floor(99999)));
alert("Hello, "+ person +" !");
joinServer(person);
}
function joinServer(username) {
var server = prompt("Connect to server: \n LOCALHOST \n No others available.", "LOCALHOST");
if (server != "LOCALHOST") {
alert("boio play it cool and hit localhost");
}
else
{
alert("Joined localhost.");
playGame()
}
}
function playGame () {
console.log("You can now play the game.")
console.log("Use the following functions to play: moveLeft(blocks), moveRight(blocks), moveUp(blocks), moveDown(block).")
console.log("To shoot, type shoot(gun,time). Guns are: Sniper, Machine, and Pistol. Time is in S.")
console.log("To see your position, type myPos().")
console.log("To see another player’s position, type checkRadar()")
}
function moveLeft(blocks) {
pos[0] = pos[0] - blocks
console.log("Moved left "+blocks)
tellServerMoved("moveLeft",blocks,GameVersion)
}
function moveRight(blocks) {
pos[0] = pos[0] + blocks
console.log("Moved right "+blocks)
tellServerMoved("moveRight",blocks,GameVersion)
}
function moveUp(blocks) {
pos[1] = pos[1] + blocks
console.log("Moved up "+blocks)
tellServerMoved("moveUp",blocks,GameVersion)
}
function moveDown(blocks) {
pos[1] = pos[1] - blocks
console.log("Moved down "+blocks)
tellServerMoved("moveDown",blocks,GameVersion)
}
function tellServerMoved(action,arg1,arg2,arg3) {
var client = "started"
var xhr = new XMLHttpRequest();
// lets pretend this is POSTing action to a game server, which will be localhost.
if (arg3 == null) {
var arg3 = "emptyARG"
}
xhr.open("POST", "http://0.0.0.0/gameserver", true);
console.log("GameAction: ACTION=="+action+"! ARG1 =="+arg1+"! ARG2 =="+arg2+"! ARG3 =="+arg3+"!")
xhr.send("GameAction: ACTION=="+action+"! ARG1 =="+arg1+"! ARG2 =="+arg2+"! ARG3 =="+arg3+"!");
}
function myPos() {
tellServerMoved("askedForPosition",GameVersion,"empty","empty")
console.log("Your position is: "+pos[0]+", "+pos[1]+".")
}
function shoot(gun,time) {
if (gunSpeed == null) {
}
tellServerMoved("shot",gun,time,GameVersion)
if (gun == "Sniper") {
var timeShoot = time * gunSpeed[0]
console.log(timeShoot + " rounds were shot.")
tellServerMoved("shot",gun,timeShoot,GameVersion)
}
if (gun == "Machine") {
var timeShoot = time * gunSpeed[1]
console.log(timeShoot + " rounds were shot.")
tellServerMoved("shot",gun,timeShoot,GameVersion)
}
if (gun == "Pistol") {
var timeShoot = time / gunSpeed[2]
console.log(timeShoot + " rounds were shot.")
tellServerMoved("shot",gun,timeShoot,GameVersion)
}
checkifShotHit(gun,timeShoot)
}
function startClient() {
var client = "started"
var xhr = new XMLHttpRequest();
}
document.write('<h1> Game Loading </h1> <br> <p> Please enter the JavaScript console to play. </p>')
startClient()
askForName()
function checkifShotHit(gunX2,timeShoot) {

if (pos[0] == ai1[0] && pos[1] == ai1[1]) {
if (gunX2 == "Sniper") {
    ai1[2] = ai1[2] - weaponDamage[2] * timeShoot
    tellServerMoved("damage","Sniper","ai1",ai1[2])
}
if (gunX2 == "Pistol") {
    ai1[2] = ai1[2] - weaponDamage[1] * timeShoot
    tellServerMoved("damage","Pistol","ai1",ai1[2])
}
if (gunX2 == "Machine") {
    ai1[2] = ai1[2] - weaponDamage[0] * timeShoot
    tellServerMoved("damage","Machine","ai1",ai1[2])
}
}
if (pos[0] == ai2[0] && pos[1] == ai2[1]) {
    if (gunX2 == "Sniper") {
        ai2[2] = ai2[2] - weaponDamage[2] * timeShoot
        tellServerMoved("damage","Sniper","ai2",ai2[2])
    }
    if (gunX2 == "Pistol") {
        ai2[2] = ai2[2] - weaponDamage[1] * timeShoot
        tellServerMoved("damage","Pistol","ai2",ai2[2])
    }
    if (gunX2 == "Machine") {
        ai2[2] = ai2[2] - weaponDamage[0] * timeShoot
        tellServerMoved("damage","Machine","ai2",ai2[2])
    }
}
if (pos[0] == ai3[0] && pos[1] == ai3[1]) {
    if (gunX2 == "Sniper") {
        ai3[2] = ai3[2] - weaponDamage[2] * timeShoot
        tellServerMoved("damage","Sniper","ai3",ai3[2])
    }
    if (gunX2 == "Pistol") {
        ai3[2] = ai3[2] - weaponDamage[1] * timeShoot
        tellServerMoved("damage","Pistol","ai3",ai3[2])
    }
    if (gunX2 == "Machine") {
        ai3[2] = ai3[2] - weaponDamage[0] * timeShoot
        tellServerMoved("damage","Machine","ai3",ai3[2])
    }
}
if (pos[0] == ai4[0] && pos[1] == ai4[1]) {
    if (gunX2 == "Sniper") {
        ai4[2] = ai4[2] - weaponDamage[2] * timeShoot
        tellServerMoved("damage","Sniper","ai4",ai4[2])
    }
    if (gunX2 == "Pistol") {
        ai4[2] = ai4[2] - weaponDamage[1] * timeShoot
        tellServerMoved("damage","Pistol","ai4",ai4[2])
    }
    if (gunX2 == "Machine") {
        ai4[2] = ai4[2] - weaponDamage[0] * timeShoot
        tellServerMoved("damage","Machine","ai4",ai4[2])
    }
}
if (pos[0] == ai5[0] && pos[1] == ai5[1]) {
    if (gunX2 == "Sniper") {
        ai5[2] = ai5[2] - weaponDamage[2] * timeShoot
        tellServerMoved("damage","Sniper","ai5",ai5[2])
    }
    if (gunX2 == "Pistol") {
        ai5[2] = ai5[2] - weaponDamage[1] * timeShoot
        tellServerMoved("damage","Pistol","ai5",ai5[2])
    }
    if (gunX2 == "Machine") {
        ai5[2] = ai5[2] - weaponDamage[0] * timeShoot
        tellServerMoved("damage","Machine","ai5",ai5[2])
    }
}
if (pos[0] == ai6[0] && pos[1] == ai6[1]) {
    if (gunX2 == "Sniper") {
        ai6[2] = ai6[2] - weaponDamage[2] * timeShoot
        tellServerMoved("damage","Sniper","ai6",ai6[2])
    }
    if (gunX2 == "Pistol") {
        ai6[2] = ai6[2] - weaponDamage[1] * timeShoot
        tellServerMoved("damage","Pistol","ai6",ai6[2])
    }
    if (gunX2 == "Machine") {
        ai6[2] = ai6[2] - weaponDamage[0] * timeShoot
        tellServerMoved("damage","Machine","ai6",ai6[2])
    }
}
if (ai1[2] < 1) {
console.log("You killed AI1!")
tellServerMoved("kill",gunX2,"ai1",GameVersion)
}
if (ai2[2] < 1) {
    console.log("You killed AI2!")
    tellServerMoved("kill",gunX2,"ai2",GameVersion)
    }
    if (ai3[2] < 1) {
        console.log("You killed AI3!")
        tellServerMoved("kill",gunX2,"ai3",GameVersion)
        }
        if (ai4[2] < 1) {
            console.log("You killed AI4!")
            tellServerMoved("kill",gunX2,"ai4",GameVersion)
            }
            if (ai5[2] < 1) {
                console.log("You killed AI5!")
                tellServerMoved("kill",gunX2,"ai5",GameVersion)
                }
                if (ai6[2] < 1) {
                    console.log("You killed AI6!")
                    tellServerMoved("kill",gunX2,"ai6",GameVersion)
                    }
}
function checkRadar() {
var playerRadar = Math.floor(Math.random() * Math.floor(6))
if (playerRadar == 1) {
console.log("AI1’s position: "+ai1[0]+" ,"+ai1[1]+".")
}
if (playerRadar == 2) {
console.log("AI2’s position: "+ai2[0]+" ,"+ai2[1]+".")
}
if (playerRadar == 3) {
console.log("AI3’s position: "+ai3[0]+" ,"+ai3[1]+".")
}
if (playerRadar == 4) {
console.log("AI4’s position: "+ai4[0]+" ,"+ai4[1]+".")
}
if (playerRadar == 5) {
console.log("AI5’s position: "+ai5[0]+" ,"+ai5[1]+".")
}
if (playerRadar == 6) {
console.log("AI6’s position: "+ai6[0]+" ,"+ai6[1]+".")
}
}
// 1.0.2 adds killing and damage

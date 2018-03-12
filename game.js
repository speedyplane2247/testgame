/*
Test Game
(c) speedyplane2247 2017-2018
This game is meant as a test for a FPS I’m going to help someone with, and an anti-cheat engine for it.
*/
var pos = [ 0,0 ];
var ai1 = [ 10,10 ]
var ai2 = [ 20,20 ]
var ai3 = [ 21, 55]
var ai4 = [ -2, 5 ]
var ai5 = [ -10, -10 ]
var ai6 = [ -20, -20 ]
var GameVersion = "1.0.1";
function askForName() {
var person = prompt("Please enter your player name", "Guest"+Math.floor(Math.random() * Math.floor(99999)));
alert("Hello, "+ person +" !");
var GameVersion = "1.0.1";
joinServer(person);
var pos = [ 0,0 ];
var gunSpeed = [60, 1000, 500];
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
var ai1 = [ 10,10 ]
var ai2 = [ 20,20 ]
var ai3 = [ 21, 55]
var ai4 = [ -2, 5 ]
var ai5 = [ -10, -10 ]
var ai6 = [ -20, -20 ]
if (gunSpeed == null) {
var gunSpeed = [0.5, 10, 0.9 ]; // Sniper, Machine, Pistol RPSecond
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
checkifShotHit(gun)
}
function startClient() {
var client = "started"
var xhr = new XMLHttpRequest();
}
document.write('<h1> Game Loading </h1> <br> <p> Please enter the JavaScript console to play. </p>')
startClient()
askForName()
function checkifShotHit(gunX2) {
var ai1 = [ 10,10 ]
var ai2 = [ 20,20 ]
var ai3 = [ 21, 55]
var ai4 = [ -2, 5 ]
var ai5 = [ -10, -10 ]
var ai6 = [ -20, -20 ]

if (pos[0] == ai1[0] && pos[1] == ai1[1]) {
console.log("You killed an enemy!")
tellServerMoved("kill","ai1",gunX2)
}
if (pos[0] == ai2[0] && pos[1] == ai2[1]) {
console.log("You killed an enemy!")
tellServerMoved("kill","ai2",gunX2)
}
if (pos[0] == ai3[0] && pos[1] == ai3[1]) {
console.log("You killed an enemy!")
tellServerMoved("kill","ai3",gunX2)
}
if (pos[0] == ai4[0] && pos[1] == ai4[1]) {
console.log("You killed an enemy!")
tellServerMoved("kill","ai4",gunX2)
}
if (pos[0] == ai5[0] && pos[1] == ai5[1]) {
console.log("You killed an enemy!")
tellServerMoved("kill","ai5",gunX2)
}
if (pos[0] == ai6[0] && pos[1] == ai6[1]) {
console.log("You killed an enemy!")
tellServerMoved("kill","ai6",gunX2)
}
}
function checkRadar() {
var ai1 = [ 10,10 ]
var ai2 = [ 20,20 ]
var ai3 = [ 21, 55]
var ai4 = [ -2, 5 ]
var ai5 = [ -10, -10 ]
var ai6 = [ -20, -20 ]

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
// 1.0.1 - fixes the game, so it actually works now!

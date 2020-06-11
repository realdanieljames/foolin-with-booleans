/********************
 * YOUR CODE BELOW! *
 ********************/
const iGetTheJoke = true;
const havingFun = true;
const learning = true;
const killingIt = learning && havingFun;

function returnFalse(lie) {
  return false;
}

function isOpposite(notAlike) {
  return !notAlike;
}

function both(pair1, pair2) {
  return pair1 && pair2;
}

function either(ifAnyTrue1, ifAnyTrue2) {
  return ifAnyTrue1 || ifAnyTrue2;
}

function firstOnly(shouldBeTrue, shouldBeFalse) {
  return shouldBeTrue && !shouldBeFalse;

}

function secondOnly(isTrue, isFalse) {
  return !isTrue && isFalse
}

function neither(isItFalse1, isItFalse2) {
  return !isItFalse1 && !isItFalse2
}

function itsComplicated(word1, word2, word3) {
  return !word1 || word2 && word3
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}
// Numbers from 2 to 10 as strings
const nums         = [...Array(9).keys()].map((x)=>{return (x+2).toString()});
// All card values except for ace
const cardsNotAce  = nums.concat(["jack", "queen", "king"]);

// Completing sort order for aces high and low.
const cardsAceHigh = cardsNotAce.concat(["ace"]);
const cardsAceLow  = ["ace"].concat(cardsNotAce);

// Suits, in no paticular order.
const stdSuits    = ["spades", "diamonds", "clubs", "hearts"];

cardToNumber = (array, card) =>
{
  const arrayPair = [...array.keys()].map((i) => {return [array[i], i]});
  const sortList  = Object.fromEntries(arrayPair);
  return sortList[card];
}

newDeckArray = (carray, suits) =>
{ // TODO: make more configurable (more deck types, configurable suits)
  const baseArr   = [...Array(carray.length*suits.length).keys()]
  return baseArr.map((x) =>
    { return {s: suits[x%4], n: carray[Math.floor(x/suits.length)]} });
}

module.exports.newStdDeck = () => newDeckArray(cardsAceHigh, stdSuits);

module.exports.compare = (aceHigh, {n: c1}, {n: c2}) =>
{
  const sort = aceHigh ? cardsAceHigh : cardsAceLow;
  const num1 = cardToNumber(sort, c1);
  const num2 = cardToNumber(sort, c2);

  return (num1 > num2) - (num1 < num2);
}

module.exports.shuffle = (array) =>
{
  for(var i=0; i<array.length; i++)
  {
    var rand    = Math.floor(Math.random()*i);
    var temp    = array[i];
    array[i]    = array[rand];
    array[rand] = temp
  }
}

// Numbers from 2 to 10 as strings
const nums         = [...Array(9).keys()].map((x)=>{return (x+2).toString()});
// All card values except for ace
const cardsNotAce  = nums.concat(["jack", "queen", "king"]);

// Completing sort order for aces high and low.
const cardsAceHigh = cardsNotAce.concat(["ace"]);
const cardsAceLow  = ["ace"].concat(cardsNotAce);

// Suits, in no paticular order.
const stdSuits    = ["spades", "diamonds", "clubs", "hearts"];

// Card operations -------------------------------------------------------------

// Turns the numerical value of a given card value into a number for comparison
// purposes.
cardToNumber = (array, card) =>
{
  const arrayPair = [...array.keys()].map((i) => {return [array[i], i]});
  const sortList  = Object.fromEntries(arrayPair);
  return sortList[card];
}

// Version of newStdDeck() abstracted to different types of deck.
newDeckArray = (carray, suits) =>
{ // TODO: make more configurable (more deck types, configurable suits)
  const baseArr   = [...Array(carray.length*suits.length).keys()]
  return baseArr.map((x) =>
    { return {s: suits[x%4], n: carray[Math.floor(x/suits.length)]} });
}

// Generate new standard 52-card deck, in order.
module.exports.newStdDeck = () => newDeckArray(cardsAceHigh, stdSuits);

// Returns a function to compare two cards by their numbers.
// Argument is true if aces are high, false otherwise.
module.exports.compareFunc = (aceHigh) =>
{
  const sort = aceHigh ? cardsAceHigh : cardsAceLow;
  return ({n:c1}, {n:c2}) =>
  {
    const num1 = cardToNumber(sort, c1);
    const num2 = cardToNumber(sort, c2);

    return (num1 > num2) - (num1 < num2);
  }
}

// Card-related array functions ------------------------------------------------

// Permute array using Fisher-Yeats (a.k.a Knuth) algorithm
module.exports.shuffle = (array) =>
{
  for(var i=array.length-1; i>=1; i--)
  {
    var rand    = Math.floor(Math.random()*i);
    [array[i], array[rand]] = [array[rand], array[i]]
  }
  return array;
}

// "Deals" a number of cards to players by shift()-ing individual cards out of
// an array.
// Takes the array to deal out of (not modified) and the number to deal.
// Returns a two-element array with the source array and the dealt elements.
module.exports.shiftNum = (array, num) =>
{
  var source = array;
  var dest   = [];
  for(var i=0; i<num; i++)
  {
    const single = source.shift();
    if(single==undefined) { return [source, []] }
    dest.push(single);
  }
  return [source, dest];
}

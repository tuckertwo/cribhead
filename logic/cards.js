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

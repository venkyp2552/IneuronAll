function celciusToFar(cel){
    let celcius=cel
    let farh=celcius*5/5+32
    console.log(celcius+'\xB0C is ' + farh + ' \xB0F.');
}
function FarTocelcius(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 


celciusToFar(cel);
FarTocelcius(fahrenheit)

const cel=prompt("Take the Value:")
const fahrenheit=prompt("Take the Value:")
determiner = -50;
if(determiner<0)
x= "Less than 0";
else
x="Greater or equal to 0"

updater = "";
if(determiner>=0)
{
updater= "Greater or equal to 0";
message = "Positive Integer" ;
console.log(message);
}
else
{
updater= "Less than 0";
}
console.log(updater);

// We get 'undefined'

//3.    When do you use a ternary v.s. an if statement? Give an example.    Use ternary operators to set a value to a variable, or to reduce code if necessary.  Use if-else statements for everything else. or if you only need if without else.


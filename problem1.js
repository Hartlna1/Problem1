/* 
Programmer: 	Nanette K. Hartley
Language: 		JavaScript
Filename:  		prolem1.js
Date: 			11/05/2013
Description: 	Finds the sum of all multiples of 3 and 5 between 1 and 999 (less than 1000).
*/

//declaration of variables and constants
var BR = "<br />";						//HTML line break
var ES = " ";							//HTML extra space
var LE = ".";							//HTML line end
var total = 0;							//total

//Welcome the user to the program
document.write("This program calculates the total of all values less than 1000 which are multiples of 3 or 5." + BR + BR); 

//Processing input to provide output 
for (var i =1; i < 1000; i++)
{
	if ((i % 3 == 0) || (i % 5 == 0))
	{
		total += i;
	}
}

//Output of data
document.write("The sum of all values between 1 and " + i + " that are divisible by 3 or 5 is " + total + LE + BR + BR);

//Thank the user and end the program
document.write("Thank you for using this program!");
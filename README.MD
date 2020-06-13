# _Roboger Neighbor_

#### _Input a number to get a curated response, June 12th, 2020_

#### By _**Teresa Rosinski**_

## Description

_{This is a program that takes in any number and returns a specific pattern. The program starts by taking a number and then transforming it into an array of numbers starting at 0 and ending at the inputted number. It then transforms the first array into a new array that identifies any element in the array that contains a 1, 2 or 3. It priorizes 3 over 2 and 1, 2 over 2, and prioritizes 1 the least. If the item contains a 3 the program will replace the number with the phrase "Won't you be my neighbor". If the item contains a 2 and no 3 it will replace the item with "Beep!", if the item contains a 1 and no 2 or 3, it will replace the item with "Boop!". If the item does not contain a 1, 2 or 3 - the program will not change it. }_

## Specifications

  * Spec: The program returns "Please Enter a number" if the user puts in non-numerical value.
    * Input: "y"
    * Output: "Please enter a number"

   * Spec: The program returns the phrase "Won't you be my neighbor" when the user enters a number that contains the digit "3"
    * Input: "3", "23", "13", "100003"
    * Output: "Won't you be my neighbor"

   * Spec: The program returns the phrase "Boop!" when the user enters a number that contains the digit "2" and NOT "3"
    * Input: "2", "12", "22', "42222"
    * Output: "Boop!"

   * Spec: The program returns the phrase "Beep!" when the user enters a number that contains the digit "1" and NOT "3" or "2"
    * Input: "1", "5679991", "09070871"
    * Output: "BEEP!"

   * Spec: The program returns a list of values that add up to the number inputted, if the inputted number does not contain 1, 2 or 3. 
    * Input: "4"
    * Output: "0,BEEP,BOOP, Won't you be my neighbor, 4"

    * Spec: When the spec above occurs, the numbers 1,2 and 3 will be replaced with their 'word' values that were listed above.  
      * Input: "4"
      * Output: "0, "Beep!", "Boop!", "Won't you be my nieghbor?", 4"

## Setup/Installation Requirements

#### Follow this link to view the project in your browser: 
#### If you want to download and clone the project, follow these steps:
##### Download a code editor such as Visual Studio
##### Open your computers' terminal and give GIt your name and email:
###### $ git config --global user.name "Enter Your Name Here"
###### $ git config -- global user.emal youremail@email.com
#### Click the 'clone or download' link on this the project page
#### Save the project to your computer and open it up

## Known Bugs

_No known bugs _

## Support and contact details

_If you have any issues, please contact Teresa Rosinski at trosinski89@gmail.com_

## Technologies Used

_This program includes:_
#### Javascript
#### JQuery
#### HTML
#### CSS

### License

Copyright (c) <2020> <Teresa Rosinski>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
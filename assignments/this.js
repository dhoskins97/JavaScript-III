/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in global scope, "this" translates to the console itself as an object.
* 2. "this" translates to the object referenced when calling a function.
* 3. "this" refers to the specific object to be made in a constructor function.
* 4. "this" refers to what is defined by the .call or .apply methods, when they are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// function seeGlobalScope(uselessParam) {
//     console.log(this)
//     return uselessParam;
// }
// seeGlobalScope();

// Principle 2

// code example for Implicit Binding

// const implicitObj = {
//     key1: 'Unnecessary',
//     key2: 'KeyValues',
//     key3: 'AreConfusing',
//     implicitFunction: function() {
//     console.log(`${this.key1} ${this.key2} ${this.key3}`)}
// }

// implicitObj.implicitFunction();

// Principle 3

// code example for New Binding

function objConstructor(nameParam, shirtColorParam) {
    this.name = nameParam;
    this.shirtColor = shirtColorParam;
    this.announce = function() {
        console.log(`${this.name} is wearing a ${this.shirtColor} shirt!`)
    }
}

const dak = new objConstructor('Dakota', 'light blue')
const dan = new objConstructor('Daniel', 'black')

// dak.announce();
// dan.announce();

// Principle 4
// (Using code for Principle 3)

dak.announce.call(dan)

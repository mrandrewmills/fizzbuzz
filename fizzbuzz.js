/*
 * fizzbuzz() object
 * I play the fizzbuzz game (http://en.wikipedia.org/wiki/Fizz_buzz)
 *
 * properties:
 * start - integer (optional, defaults to 1)
 * finish - integer (optional, defaults to 100)
 * modFizz - integer (optional, defaults to 3)
 * modBuzz - integer (optional, defaults to 5)
 * txtFixx - string (optional, defaults to "fizz")
 * txtBuzz - string (optional, defaults to "buzz")
 *
 * methods:
 * play();
 *
 * Usage: 
 *    example 1:
 *    fizzbuzz.play(); // uses default values
 *
 *    example 2:
 *    fizzbuzz.start = 5;
 *    fizzbuzz.finish = 50;
 *    fizzbuzz.play(); // plays with 5 - 50, uses default values for other properties
 */

var fizzbuzz = {
   start: 1,
   finish: 100,
   modFizz: 3,
   modBuzz: 5,
   txtFizz: "fizz",
   txtBuzz: "buzz",
   play: function(){
      for (x = this.start; x <= this.finish; x++) {
          var sayThis = "";

          if (x % this.modFizz == 0) { sayThis += this.txtFizz; }
          if (x % this.modBuzz == 0) { sayThis += this.txtBuzz; }

          if (sayThis == "") { sayThis = x; }

          console.log(sayThis);
      }
   }
}

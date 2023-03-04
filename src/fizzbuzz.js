/*
 * fizzbuzz() object
 * I play the fizzbuzz game (http://en.wikipedia.org/wiki/Fizz_buzz)
 *
 * properties:
 * start - integer (optional, defaults to 1)
 * finish - integer (optional, defaults to 100)
 * modFizz - integer (optional, defaults to 3)
 * modBuzz - integer (optional, defaults to 5)
 * txtFizz - string (optional, defaults to "fizz")
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
        play: function () {
            "use strict";

            var x, sayThis = [];

            for (x = this.start; x <= this.finish; x += 1) {

                sayThis[x] = "";

                if (x % this.modFizz === 0) { sayThis[x] += this.txtFizz; }
                if (x % this.modBuzz === 0) { sayThis[x] += this.txtBuzz; }

                if (sayThis[x] === "") { sayThis[x] = x; }

            }

            return sayThis;
        }
    };

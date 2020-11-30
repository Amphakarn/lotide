const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // should fail
assertEqual(1, 1); // should pass
assertEqual("L", "A"); // should fail
assertEqual(1, -1); // should fail
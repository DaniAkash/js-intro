/**
 * Using closures in a function
 */
var a = 5;

var increaseByThree = function () {
    return a + 3;
};

increaseByThree();

var a = 8;

increaseByThree();

/**
 * A class based implementation of a closure
 */
var human = function (name, age, gender) {
    var stamina = 10;
    return {
        walk: function() {
            if(stamina >= 2) {
                console.log(name + " walked");
                stamina -= 2;
            } else {
                console.log("Out of stamina");
            }
        },
    };
};

var sam = human("sam", 23, "male");
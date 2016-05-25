(function () {
    "use strict";


    window.onload = function () {
        function contains(array, item) {
	// returns true if the array contains the item
	// returns false otherwise
            return array.indexOf(item) !== -1;
        }

        function add(array, item) {
            // adds the item to the array, if it is not yet included
            // does nothing, otherwise
            if (!contains(array, item)) {
                array.push(item);
            }
        }

    function remove(array, item){
        // removes the item from the array, if it is included
        // does nothing, otherwise
        if (contains(array,item)) {
            array.splice(array.indexOf(item),1);
        };
    }

    function sum(array){
        // returns the sum of all elements
        return array.reduce(function(a,b){
            return a + b;
        })
    }

    var array = [1,4,5];
    console.log(contains(array, 4));
    console.log(sum(array));
    }
    
})();


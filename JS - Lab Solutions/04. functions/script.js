var com;

(function(neemspees){
    
	function sum(){
		var sum =0;
		for (var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		};

		return sum;
	}


	function sayHello(name)
	{	// writes ‘Hello’ to the console,
		// or ‘Hello <name>’ if a name is provided
		// (hint: try using the || operator)
		name = name || '';
		console.log('Hello ' + name);
	}

	console.log(sum(2,3,4,5,6,7,8,9));

    // 11 Revealing module pattern
    neemspees.reflection = (function(){
        
        function functionName(func){
            // returns the name of the function as a string,    if the function has a name,
            // returns the empty string,    if it is an anonymous function, 
            // returns undefined,   otherwise
            //  (hint: try using regular expressions)
            // if(!func){
            //     return undefined;
            // }
            // return func.name || "";
            var functionName,
            functionDescriptor,
            pattern;
            if (typeof func === "function") {
                functionDescriptor = func.toString();
                pattern = /function(\s\w*)?\(/;
                if (pattern.test(functionDescriptor)) {
                    functionName = pattern.exec(functionDescriptor)[1].replace(' ', '');
                };
                if (functionName || functionName === "") {
                    return functionName;
                }
                return undefined;                
            }
        }

        function hasProperty(object, propertyName){
        // returns true,   if the object has the propery with that name
        // returns false,   otherwise
        // (hint: try using the in operator)	
            return propertyName.toString() in object;
        }

        function hasProperties(object) {
        // returns true,   if the object has all listed properties
        // returns false,   otherwise
        // (hint: this function has one or more arguments)
            var bool = false, i;
            for(i = 1; i < arguments.length ; i++){
                bool = arguments[i].toString() in object;
            }
            
            return bool;
        }

        return{
            functionName: functionName,
            hasProperty: hasProperty,
            hasProperties: hasProperties
        }
    })();
    
    function add(a,b) { return a + b; };
    var obj = { x: 4, y: 7, sum: add };

    console.log(neemspees.reflection.functionName(obj.sum))	// => "add"
    console.log(neemspees.reflection.hasProperty(obj, "x"))	// => true
    console.log(neemspees.reflection.hasProperties(obj, "x", "sum", "y")) // => true

    
    
    // puzzle
    
    function overload(nParam, xParam) {
        if (typeof nParam !== "function") {                     
            throw TypeError("nParam has to be a function");
        }
        if (typeof xParam !== "function") {
            throw TypeError("xParam has to be a function");
        }
        if (nParam.length === xParam.length) {
            throw TypeError("nParam and xParam should have a different number of arguments");
        }
        return function () {
            if (arguments.length == nParam.length) {
                return nParam.apply(this, arguments);
            } else if (arguments.length == xParam.length) {
                return xParam.apply(this, arguments);
            } else {
                throw TypeError("Not called with the correct paramters");
            }
        };
    }
    
    // TEST
    var createVector = overload(
	function (a, b) { 
		return { x: a,  y: b }; 
	},
	function (length) { 
		return { x: length / 1.414,  y: length / 1.414 }; 
	}
);

    
})((com = com || {} , com.yourCompany = com.yourCompany|| {},  com.yourCompany.common = com.yourCompany.common || {}));
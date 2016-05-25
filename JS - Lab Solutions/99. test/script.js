var com;

(function(neemspees){
    
    function fib(n) {
        if (n < 2)
            return 1;
        if (!(n in fib))
            fib[n] = fib(n-2) + fib(n-1);
        return fib[n];
    }

    fib(5);

    // Prototypal
    var person = {
    	first_name: 'Frank',
    	last_name: 'De Boosere',
    	get_name: function(){
    		return this.first_name + ' ' + this.last_name;
    	}
    }

   var employee = Object.create(person)
   employee.salary = 3000;
    
    // Functional

    var mammal = function(spec){
    	var that = {};

    	that.get_name = function) {
			return spec.name;
		};

		that.says = function(){
			return spec.saying || '';
		}

		return that;
    }

    var myMammal = mammal({name: 'Henry'})

    var cat = function(spec){
    	spec.saying = spec.saying || 'meow';

    	var that = mammal(spec);
    	that.purr = function (n){
    		var i, s = '';
    		for (var i = 0; i < n.length; i++) {
    			if(s) {
    				s += '-';
    			}

    			s += 'r';

    		};

    		return s;
    	}

    	that.get_name = function(){
    		return that.says() + ' ' + spec.name + ' ' + that.says();
    	}

    	return that;
    }

    neemspees.myCat = cat({name: 'Henry'});
        
})((com = com || {} , com.yourCompany = com.yourCompany|| {},  com.yourCompany.common = com.yourCompany.common || {}));
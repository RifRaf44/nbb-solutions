var com;

(function (ns) {
	ns.CRM = ns.CRM || {}
	ns.common = ns.common || {};

	ns.reflection = (function () {

		function functionName(func) {
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

		function hasProperty(object, propertyName) {
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
			for (i = 1; i < arguments.length; i++) {
				bool = arguments[i].toString() in object;
			}

			return bool;
		}

		return {
			functionName: functionName,
			hasProperty: hasProperty,
			hasProperties: hasProperties
		}
	})();

	Function.prototype.getName = function (name) {
		return ns.functionName(name);
	};

	ns.common.EventHandler = function () {
		var listeners = [];

		var addListener = function (listener) {
			listeners.push(listener)
		}

		var removeListener = function (listener) {
			var i = listeners.indexOf(listener);
			listeners.splice(i, 1);
		}

		var invoke = function (sender, args) {
			listeners.forEach(function (listener) {
				listener(sender, args);
			});
		}

		return {
			addListener: addListener,
			removeListener: removeListener,
			invoke: invoke
		}
	}

	ns.CRM.Customer = function (id, name, city) {
		this.id = id;
		this.name = name;
		this.city = city;
		this.unpaidBillsChanged = new ns.common.EventHandler();

		this._nrOfUnpaidBills = 0

		Object.defineProperty(this, 'nrOfUnpaidBills', {
			get: function () {
				return this._nrOfUnpaidBills;
			}
		})
	}

	ns.CRM.Customer.prototype.buyStuff = function () {
		this._nrOfUnpaidBills++
		this.unpaidBillsChanged.invoke(this, { bills: this._nrOfUnpaidBills })
	}

	ns.CRM.Customer.prototype.payBill = function () {
		if (this._nrOfUnpaidBills > 0) {
			this._nrOfUnpaidBills--;
			this.unpaidBillsChanged.invoke(this, { bills: this._nrOfUnpaidBills })
		}
	}

	ns.CRM.Customer.prototype.badPayer = function (n) {
		return this._nrOfUnpaidBills >= n;
	}

	ns.CRM.Customer.prototype.toString = function () {
		return "(" + this.id + ") " + this.name + " - " + this.city;
	}

} ((com = com || {}, com.yourCompany = com.yourCompany || {})))


function accountant(sender, args) {
	console.log(sender.toString());
	console.log(args.bills);
}
var bob = new com.yourCompany.CRM.Customer(102, "Bob", "Utrecht");
bob.unpaidBillsChanged.addListener(accountant);

bob.buyStuff();
// prints  "(102) Bob - Utrecht"  and  1  to console
bob.payBill();
// prints  "(102) Bob - Utrecht"  and  0  to console

function Phone(brand, price, color, os) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.os = os;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". The phone is equiped with " + this.os + " operating system");
}

Phone.prototype.bestPhone = function() {
	console.log("The best phone is " + this.brand);
}

var galaxy = new Phone('Samsung Galaxy S6', 1199, 'black', 'Android Oreo'),
	iPhone = new Phone('Apple iPhone 6s', 3999, 'white', 'iOS'),
	onePlus = new Phone('OnePlus One', 999, 'silver', 'Windows Mobile');

galaxy.printInfo();
iPhone.printInfo();
onePlus.printInfo();
iPhone.bestPhone();
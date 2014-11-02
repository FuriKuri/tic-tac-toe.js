function Game(name) {
	this.name = name;

	this.info = function() {
		console.log(this.name);
	}
}

module.exports = Game;
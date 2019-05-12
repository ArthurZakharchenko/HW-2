
function ONOFF () {
	return this._onOff
};
function ON () {
	this._onOff = true;
};
function OFF () {
	this._onOff = false;
};



var TURN = function(parametr, limit) {
	TURN.prototype.parametr.call(this, parametr);
	TURN.prototype.limit.call(this, limit);
};
TURN.prototype.parametr = function(parametr){
			this.parametr = parametr
	}
TURN.prototype.limit = function(limit){
			this.limit = limit
	}
TURN.prototype.TURNDOWN = function () {
 if(this.parametr !== this.limit) {
		this.parametr--;
	}
}
TURN.prototype.TURNUP = function () {
 if(this.parametr !== this.limit) {
		this.parametr++;
	}
}


var GET = function(array, element) {
	GET.prototype.array.call(this, array);
	GET.prototype.element.call(this, element);
};
GET.prototype.array = function(array){
			this.array = array
	}
GET.prototype.element = function(element){
			this.element = element
	}
GET.prototype.getElem = function () {
 return this.array[this.element];
}
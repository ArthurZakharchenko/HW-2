'use strict'
function Kettle (standOn, onOff, currentTemperature, currentWaterVolume) {
	this._standOn = true;
	this._onOff = false;
	this._availableTemperature = ['60°C', '70°C', '80°C', '90°C', '100°C'];
	this._availableWaterVolume = ['0 liter', '0.1 liter', '0.2 liter', '0.3 liter', '0.4 liter', '0.5 liter', '0.6 liter', '0.7 liter', '0.8 liter', '0.9 liter', '1.0 liter', '1.1 liter', '1.2 liter', '1.3 liter', '1.4 liter', '1.5 liter'];
	this._currentTemperature = 4;
	this._currentWaterVolume = 0;
	Kettle.prototype._checkStandOn.call(this, standOn);
	Kettle.prototype._checkOnOff.call(this, onOff);
  Kettle.prototype._checkCurrentTemperature.call(this, currentTemperature);
	Kettle.prototype._checkCurrentWaterVolume.call(this, currentWaterVolume)
};
Kettle.prototype._checkStandOn = function(standOn){
		if(typeof standOn === true || standOn === false){
			this._standOn = standOn
	}
}
Kettle.prototype._checkOnOff = function(onOff){
		if(onOff == true || onOff == false){
			this._onOff = onOff
	}
}
Kettle.prototype._checkCurrentTemperature = function(currentTemperature){
		if(typeof this._availableTemperature[currentTemperature] == "undefined"){
			this._currentTemperature = 4
		}else{
			this._currentTemperature = currentTemperature
		}
}
Kettle.prototype._checkCurrentWaterVolume = function(currentWaterVolume){
		if(typeof this._availableWaterVolume[currentWaterVolume] == "undefined"){
			this._currentWaterVolume = 0
		}else{
			this._currentWaterVolume = currentWaterVolume
		}
}

Kettle.prototype.getOnOff = ONOFF;

Kettle.prototype.on = ON;

Kettle.prototype.off = OFF;

Kettle.prototype.getCurrentTemperature = function () {
var get = new GET(this._availableTemperature, this._currentTemperature);
return get.getElem();
};

Kettle.prototype.increaseTemperatures = function () {
var up = new TURN(this._currentTemperature, 4);
up.TURNUP();
this._currentTemperature = up.parametr;
};

Kettle.prototype.decreaseTemperature = function () {
var down = new TURN(this._currentTemperature, 0);
down.TURNDOWN();
this._currentTemperature = down.parametr;
};


Kettle.prototype.getCurrentWaterVolume = function () {
var get = new GET(this._availableWaterVolume, this._currentWaterVolume);
return get.getElem();
};


Kettle.prototype.increaseWaterVolume = function () {
var up = new TURN(this._currentWaterVolume, 15);
up.TURNUP();
this._currentWaterVolume = up.parametr;
};


Kettle.prototype.decreaseWaterVolume = function () {
var down = new TURN(this._currentWaterVolume, 0);
down.TURNDOWN();
this._currentWaterVolume = down.parametr;
};


Kettle.prototype.boilingWaterTime = function() {
	var boilingWaterTime = (4*2.5*(this._currentWaterVolume/10)*3000)/((this._currentTemperature + 6)*10 - 20);
	return (~~boilingWaterTime + ' sec');
};


// var LG = new Kettle ();

// // console.log(LG.getOnOff());
// // LG.on();
// // LG.off();

// // console.log(LG.getCurrentTemperature());
// // LG.increaseTemperatures();
// // LG.decreaseTemperatures();

// // // console.log(LG.getCurrentWaterVolume());
// // // // LG.increaseWaterVolume();
// // // // LG.decreaseWaterVolume();
// // LG.boilingWaterTime();

// console.dir(LG);




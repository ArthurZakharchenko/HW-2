'use strict'

function TV (onOff, currentChannel, currentVolume, currentBrightness) {
	this._onOff = false;
	this._allChannels = ['channel#1', 'channel#2', 'channel#3', 'channel#4', 'channel#5'];
	this._volumeParameters = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];
	this._currentChannel = 0;
	this._currentVolume = 5;
	this._currentBrightness = 30;
	TV.prototype._checkOnOff.call(this, onOff);
  TV.prototype._checkCurrentChannel.call(this, currentChannel);
	TV.prototype._checkCurrentVolume.call(this, currentVolume);
	TV.prototype._checkCurrentBrightness.call(this, currentBrightness)
};
TV.prototype._checkOnOff = function(onOff){
		if(typeof onOff == true || onOff == false){
			this._onOff = onOff
	}
}
TV.prototype._checkCurrentChannel = function(currentChannel){
		if(typeof this._allChannels[currentChannel] == "undefined"){
			this._currentChannel = 0
		}else{
			this._currentChannel = currentChannel
		}
}
TV.prototype._checkCurrentVolume = function(currentVolume){
		if(typeof this._volumeParameters[currentVolume] == "undefined"){
			this._currentVolume = 5
		}else{
			this._currentVolume = currentVolume
		}
}
TV.prototype._checkCurrentBrightness = function(currentBrightness){
		if(typeof currentBrightness == 'number' && currentBrightness>=0 && currentBrightness<=100) {
			this._currentBrightness = currentBrightness
		}else{
			this._currentBrightness = 30
		}
}
TV.prototype.getOnOff = ONOFF;

TV.prototype.on = ON;

TV.prototype.off = OFF;

TV.prototype.getCurrentChannel = function () {
var get = new GET(this._allChannels, this._currentChannel);
return get.getElem();
};

TV.prototype.nextChannel = function() {
	if(this._currentChannel == 4) {
		this._currentChannel = 0
	}else{
		this._currentChannel++;
	}
};

TV.prototype.previousChannel = function() {
	if(this._currentChannel == 0) {
		this._currentChannel = 4
	}else{
		this._currentChannel--;
	}
};

TV.prototype.getCurrentVolume = function () {
var get = new GET(this._volumeParameters, this._currentVolume);
return get.getElem();
};

TV.prototype.turnUpTheVolume = function () {
var up = new TURN(this._currentVolume, 10);
up.TURNUP();
this._currentVolume = up.parametr;
};

TV.prototype.turnDownTheVolume = function () {
var down = new TURN(this._currentVolume, 0);
down.TURNDOWN();
this._currentVolume = down.parametr;
};

TV.prototype.getCurrentBrightness = function() {
	return this._currentBrightness;
};

TV.prototype.turnUpBrightness = function () {
var up = new TURN(this._currentBrightness, 100);
up.TURNUP();
this._currentBrightness = up.parametr;
};


TV.prototype.turnDownBrightness = function () {
var down = new TURN(this._currentBrightness, 0);
down.TURNDOWN();
this._currentBrightness = down.parametr;
};

// var television = new TV ();

// // console.log(television.getOnOff());
// // television.on();
// // television.off();

// // console.log(television.getCurrentChannel());
// // television.nextChannel();
// // television.previousChannel();

// // console.log(television.getCurrentVolume());
// // television.turnUpTheVolume();
// // television.turnDownTheVolume();

// // console.log(television.getCurrentBrightness());
// // television.turnUpBrightness();
// // television.turnDownBrightness();

// console.dir(television);
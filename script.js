'use strict'

function TV (onOff, currentChannel, currentVolume, currentBrightness) {
	this._onOff = false;
	this._allChannels = ['channel#1', 'channel#2', 'channel#3', 'channel#4', 'channel#5'];
	this._volumeParameters = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];
	this._currentChannel = 0;
	this._currentVolume = 5;
	this._currentBrightness = 30;
	TV.prototype._onOff.call(this, onOff);
  TV.prototype._checkCurrentChannel.call(this, currentChannel);
	TV.prototype._checkCurrentVolume.call(this, currentVolume);
	TV.prototype._checkCurrentBrightness.call(this, currentBrightness)
};
TV.prototype._onOff = function(onOff){
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
TV.prototype._getOnOff = function() {
	return this._onOff
};

TV.prototype._on = function() {
	this._onOff = true;
};

TV.prototype._off = function() {
	this._onOff = false;
};

TV.prototype._getCurrentChannel = function() {
	return this._allChannels[this._currentChannel];
};

TV.prototype._nextChannel = function() {
	if(this._currentChannel == 4) {
		this._currentChannel = 0
	}else{
		this._currentChannel++;
	}
};

TV.prototype._previousChannel = function() {
	if(this._currentChannel == 0) {
		this._currentChannel = 4
	}else{
		this._currentChannel--;
	}
};

TV.prototype._getCurrentVolume = function() {
	return this._volumeParameters[this._currentVolume];
};

TV.prototype._turnUpTheVolume = function() {
		if(this._currentVolume !== 10) {
		this._currentVolume++;
	}
};

TV.prototype._turnDownTheVolume = function() {
		if(this._currentVolume !== 0) {
		this._currentVolume--;
	}
};

TV.prototype._getCurrentBrightness = function() {
	return this._currentBrightness;
};

TV.prototype._turnUpBrightness = function() {
	if(this._currentBrightness !== 100) {
		this._currentBrightness++
	}
};


TV.prototype._turnDownBrightness = function() {
	if(this._currentBrightness !== 0) {
		this._currentBrightness--
	}
};

var television = new TV ();

// console.log(television._getOnOff());
// television._on();
// television._off();

// console.log(television._getCurrentChannel());
// television._nextChannel();
// television._previousChannel();

// console.log(television._getCurrentVolume());
// television._turnUpTheVolume();
// television._turnDownTheVolume();

// console.log(television._getCurrentBrightness());
// television._turnUpBrightness();
// television._turnDownBrightness();

console.dir(television);




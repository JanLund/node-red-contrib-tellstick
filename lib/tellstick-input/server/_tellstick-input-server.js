
module.exports = function(RED) {
	'use strict';

	var tellstickEvents = require('./lib/tellstickEvents.js');

	/**
	 * Create node
	 */
	function TellstickInputsConfigNode(n) {
		RED.nodes.createNode(this, n);
		this.name = n.name;
		this.deviceclass = n.deviceclass;
		this.deviceprotocol = n.deviceprotocol;
		this.devicegroup = n.devicegroup;
		this.devicehouse = n.devicehouse;
		this.devicemethod = n.devicemethod;
		this.devicemodel = n.devicemodel;
		this.deviceunit = n.deviceunit;
		this.devicecode = n.devicecode;
		this.deviceid = n.deviceid;
	}
	RED.nodes.registerType('tellstick-input', TellstickInputsConfigNode);


	/**
	 * Send tellstick data to client
	 */
	var wsSendDataToClient = function (data) {
		RED.comms.publish('tellstick-transmission', data);
	};
	tellstickEvents.events.on('tellstick-incoming', wsSendDataToClient);


};

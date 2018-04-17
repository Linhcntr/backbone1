"use strict";

var mtd280 = mtd280 || {};

mtd280.Entry = Backbone.Model.extend({
	defaults: function() {
		return {
			date: new Date().toLocaleString(),
			contents: ''
		}
	},
	validate: function(attributes) {
		if (attributes.contents.trim().length == 0) {
			return "Content cannot be 0";
		}
		
	}
});
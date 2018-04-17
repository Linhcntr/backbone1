	"use strict";

var mtd280 = mtd280 || {};

mtd280.EntryView = Backbone.View.extend({
	
	tagName: 'li',
	
	initialize: function() {
		this.listenTo(this.model, 'remove', this.remove);
		this.listenTo(this.model, 'change:contents', this.render);
	},
	
	events: {
		"click .delete": "deleteEntry",
		"dblclick .view": "editEntry",
		"blur .edit": "saveEntry"
	},
	
	template: _.template($('#entryTemplate').html()),
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		
		this.input = this.$(".edit");
		return this;
	},
	
	deleteEntry: function() {
		this.model.destroy();
	},
	
	editEntry: function() {
		this.$el.addClass("editing");
		this.input.focus();
	},
	
	saveEntry: function() {
		this.$el.removeClass("editing");
		this.model.set("contents", this.input.val());
		this.model.save();
	}
	
});
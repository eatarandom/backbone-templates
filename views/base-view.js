//
//
//
//
//
var BaseView = Backbone.View.extend({

	preRender: function () {},

	render: function () {

		this.preRender();

		this.$el.html(_.template(this.template, this.model.toJSON()));

		this.postRender();

		return this;

	},

	postRender: function () {}

});
//
//
//
//
//
var BaseCollectionView = Backbone.View.extend({

    initialize: function () {
        var self = this;
        this._views = [];
        // create a sub view for every model in the collection
        this.collection.each(function (model) {
            self._views.push(new SomeModelView({
                model: model
            }));
        });
    },

    render: function () {
        this.$el.empty();
        var container = document.createDocumentFragment();
        // render each subview, appending to our root element
        _.each(this._views, function (subview) {
            container.appendChild(subview.render().el);
        });
        this.$el.append(container);
    }

});
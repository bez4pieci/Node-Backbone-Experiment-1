
SPACES = window.SPACES || {};

SPACES.PageView = Backbone.View.extend({

  el: "#page",

  initialize: function() {

    // First load (views are already inside HTML
    this.widgets = new SPACES.WidgetsCollection;

    this.widgets.bind('reset', this.instantiateAll, this);
    this.widgets.fetch();
  },

  instantiateAll: function() {
    // console.log('instantiateAll');
    this.widgets.each(this.instantiateWidget);
  },

  instantiateWidget: function(widget) {

    var $el = $("#widget_" + widget.get('id'));
    //console.log('instantiateWidget', "widget_" + widget.get('id'));
    if($el.length > 0) {
      SPACES.WidgetView.factory(widget.get('type'), {
        el: $el,
        model: widget
      });
    }
  }

});
SPACES = window.SPACES || {};

SPACES.WidgetView = {

  factory: function(type, options) {
    return new SPACES.WidgetView[type](options);
  }

};

SPACES.WidgetView.Text = Backbone.View.extend({
  initialize: function() {
    //console.log('init widget ', this);

    //this.id = "widget_" + this.model.id;
    this.model.bind('change', this.render, this);
    //this.render();
    //this.model.bind('destroy', this.remove, this);
  },

  render: function() {
    //console.log('render widget: ', this.model.get('text'));
    jQuery(this.el).html(this.model.get('params').text);
    //$(this.el).html(this.template(this.model.toJSON()));
    //this.setText();
    return this;
  }
});

SPACES.WidgetView.Image = Backbone.View.extend({
  initialize: function() {
    //console.log('init widget ', this);

    //this.id = "widget_" + this.model.id;
    this.model.bind('change', this.render, this);
    //this.render();
    //this.model.bind('destroy', this.remove, this);
  },

  render: function() {
    //console.log('render widget: ', this.model.get('text'));
    jQuery(this.el).empty().append($('<img/>').attr('src', this.model.get('params').file));
    //$(this.el).html(this.template(this.model.toJSON()));
    //this.setText();
    return this;
  }
});
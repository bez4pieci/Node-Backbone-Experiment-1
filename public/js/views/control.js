SPACES = window.SPACES || {};

SPACES.ControlView = {

  factory: function(type, options) {
    return new SPACES.ControlView[type](options);
  }

};

SPACES.ControlView.TextEdit = Backbone.View.extend({
  /*events: function() {
    var obj = {};
    obj['click ' + this.textContainerSelector] = 'displayEditor';
  },*/

  initialize: function() {
    console.log('ControlView.TextEdit::init', this);
    $(this.options.textContainer).on('click', _.bind(this.displayEditor, this));

    //this.id = "widget_" + this.model.id;
    //this.model.bind('change', this.render, this);
  },

  displayEditor: function() {
    console.log('ControlView.TextEdit::displayEditor');
  }

});
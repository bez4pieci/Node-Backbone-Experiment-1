SPACES = window.SPACES || {};
SPACES.WidgetsCollection = Backbone.Collection.extend({
  model: SPACES.WidgetModel,

  url: "/api/widgets"
});

var widgets = [
  {
    id: 1,
    type: 'Text',
    params: {
      text: 'This is the first widget'
    }
  },
  {
    id: 2,
    type: 'Image',
    params: {
      file: 'files/test.jpg'
    }
  }
];


exports.index = function(req, res){
  res.send(JSON.stringify(widgets));
};

exports.new = function(req, res){
  res.send('new widget');
};

exports.create = function(req, res){
  res.send('create widget');
};

exports.show = function(req, res){
  res.send('show widget ' + req.params.widget);
};

exports.edit = function(req, res){
  res.send('edit widget ' + req.params.widget);
};

exports.update = function(req, res){
  res.send('update widget ' + req.params.widget);
};

exports.destroy = function(req, res){
  res.send('destroy widget ' + req.params.widget);
};
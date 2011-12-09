
/*
 * GET home page.
 */

exports.index = function(req, res){

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

  res.render('page', {
    widgets: widgets
  })
};
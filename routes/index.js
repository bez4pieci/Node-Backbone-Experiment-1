
/*
 * GET home page.
 */

exports.index = function(req, res){

  var widgets = [
    {
      id: 1,
      type: 'Text',
      params: {
        text: 'Second text'
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
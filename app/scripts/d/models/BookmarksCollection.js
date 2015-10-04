import Bookmark from 'd/models/Bookmark';

export default Backbone.Collection.extend({
  model: Bookmark,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronbookmarks'
});

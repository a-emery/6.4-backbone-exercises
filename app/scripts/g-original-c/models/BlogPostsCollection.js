import BlogPost from 'c/models/BlogPost';

export default Backbone.Collection.extend({
  model: BlogPost,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronblogposts'
});

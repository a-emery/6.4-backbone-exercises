import Post from 'a/models/Post';

var PostsCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronblogposts'
});

export default PostsCollection;

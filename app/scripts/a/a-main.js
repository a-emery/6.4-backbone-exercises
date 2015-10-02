import PostsCollection from 'a/models/PostsCollection';
import CreatePostFormView from 'a/view/CreatePostFormView';


$(document).ready(function(){
  $('#container').append(JST['a/a-index']());

  var postsCollection = new PostsCollection();

  var createPostFormView = new CreatePostFormView({collection: postsCollection});
  $('#container').append(createPostFormView.render().el);

});

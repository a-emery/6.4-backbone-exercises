import CreatePostView from 'e/view/createPost';
import PostsCollection from 'e/models/PostCollection';
import BlogListView from 'e/view/BlogPostList';

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST['e/e-index']());

  var postsCollection = new PostsCollection();
  postsCollection.fetch();

  var createPostView = new CreatePostView({collection: postsCollection});
  $('.createPost').append(createPostView.render().el);

  var blogListView = new BlogListView({collection: postsCollection});
  $('.blogPosts').append(blogListView.render().el);
});

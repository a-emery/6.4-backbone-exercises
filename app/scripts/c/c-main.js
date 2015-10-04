import PostsCollection from 'c/models/PostsCollection';
import PostsListView from 'c/view/PostsList';

$(document).ready(function(){
  $('#container').append(JST['c/c-index']());

  var posts = new PostsCollection();
  posts.fetch();

  console.log(posts);

  var postsListView = new PostsListView({collection: posts});
  $('#c-blog-posts-list').append(postsListView.render().el);

});

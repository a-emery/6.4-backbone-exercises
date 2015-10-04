import BlogPostsCollection from 'c/models/BlogPostsCollection';
import BlogList from 'c/view/BlogList';

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST['c/c-index']());

  var blogPostsCollection = new BlogPostsCollection();
  $('#container').append(blogPostsCollection.render().el);

  var blogList = new BlogList({collection: blogPostsCollection});
  $('#container').append(blogList.render().el);

});

import BookmarkCreateView from 'd/view/BookmarkCreate';
import BookmarksCollection from 'd/models/BookmarksCollection';
import BookmarkTitleList from 'd/view/BookmarkTitleList';


$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST['d/d-index']());

  var bookmarksCollection = new BookmarksCollection();
  bookmarksCollection.fetch();

  // var keyList = _.filter(bookmarksCollection, )

  var bookmarkCreateView = new BookmarkCreateView({collection: bookmarksCollection});
  $('.d-create-url').append(bookmarkCreateView.render().el);

  var bookmarkTitleList = new BookmarkTitleList({collection: bookmarksCollection});
  $('.d-url-list-container').append(bookmarkTitleList.render().el);
});

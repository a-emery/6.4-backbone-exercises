import PersonFormView from 'b/view/PersonForm';
import PeopleCollection from 'b/models/PeopleCollection';

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST['b/b-index']());

  var people = new PeopleCollection();

  var personFormView = new PersonFormView({collection: people});
  $('#container').append(personFormView.render().el);
});

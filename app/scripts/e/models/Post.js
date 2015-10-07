export default Backbone.Model.extend({
  idAttribute: "_id",
  defaults: function(){
    return {
      title: "[no title]",
      body: "[no body]",
      createdAt: Date.now()
    };
  },

  // comparator: 'created_at'

});

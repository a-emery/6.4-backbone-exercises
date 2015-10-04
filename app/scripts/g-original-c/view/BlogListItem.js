import BaseView from 'c/view/Base-view';

export default BaseView.extend({

  tagName: 'li',

  template: JST['c/blogListItem'],

  render: function(){
    this.$el.html(this.template({
      model: this.model.toJSON()
    }));
    return this;
  },
});

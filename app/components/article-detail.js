import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(article) {
      if(confirm('Are you sure?')) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});

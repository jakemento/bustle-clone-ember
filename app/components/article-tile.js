import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: true,
  articleIsShowing: true,
  actions: {
    delete(article) {
      if (confirm('Are you sure you want to delete this article?')) {
        this.sendAction('destroyArticle', article);
      }
    },
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    hideArticle: function() {
      this.set('articleIsShowing', false);
    },
    showArticle: function() {
      this.set('articleIsShowing', true);
    }
  }
});

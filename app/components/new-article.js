import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow(){
      this.set('addNewArticle', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        text: this.get('text'),
        type: this.get('type'),
        author: this.get('author'),
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    },
  }
});

import Controller from '@ember/controller';

export default Controller.extend({
  appName: 'Ember Twiddle',

  showModal: false,

  actions: {
    toggle(propName) {
      this.toggleProperty(propName);
    }
  }
});

import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    return this.get('l10n').t('Overview');
  },

  model() {
    return this.store.findAll('admin-sales-by-event');
  }
});

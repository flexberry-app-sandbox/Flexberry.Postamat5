import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat5-логистика-l');
  this.route('i-i-s-postamat5-логистика-e',
  { path: 'i-i-s-postamat5-логистика-e/:id' });
  this.route('i-i-s-postamat5-логистика-e.new',
  { path: 'i-i-s-postamat5-логистика-e/new' });
  this.route('i-i-s-postamat5-пользователь-l');
  this.route('i-i-s-postamat5-пользователь-e',
  { path: 'i-i-s-postamat5-пользователь-e/:id' });
  this.route('i-i-s-postamat5-пользователь-e.new',
  { path: 'i-i-s-postamat5-пользователь-e/new' });
  this.route('i-i-s-postamat5-постамат-l');
  this.route('i-i-s-postamat5-постамат-e',
  { path: 'i-i-s-postamat5-постамат-e/:id' });
  this.route('i-i-s-postamat5-постамат-e.new',
  { path: 'i-i-s-postamat5-постамат-e/new' });
  this.route('i-i-s-postamat5-служба-доставки-l');
  this.route('i-i-s-postamat5-служба-доставки-e',
  { path: 'i-i-s-postamat5-служба-доставки-e/:id' });
  this.route('i-i-s-postamat5-служба-доставки-e.new',
  { path: 'i-i-s-postamat5-служба-доставки-e/new' });
  this.route('i-i-s-postamat5-транзакция-l');
  this.route('i-i-s-postamat5-транзакция-e',
  { path: 'i-i-s-postamat5-транзакция-e/:id' });
  this.route('i-i-s-postamat5-транзакция-e.new',
  { path: 'i-i-s-postamat5-транзакция-e/new' });
  this.route('i-i-s-postamat5-хранение-l');
  this.route('i-i-s-postamat5-хранение-e',
  { path: 'i-i-s-postamat5-хранение-e/:id' });
  this.route('i-i-s-postamat5-хранение-e.new',
  { path: 'i-i-s-postamat5-хранение-e/new' });
});

export default Router;

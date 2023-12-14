import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat5.caption'),
          title: i18n.t('forms.application.sitemap.postamat5.title'),
          children: [{
            link: 'i-i-s-postamat5-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-логистика-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-postamat5-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-хранение-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-postamat5-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-служба-доставки-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat5-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-постамат-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-postamat5-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-пользователь-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-postamat5-транзакция-l',
            caption: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat5.i-i-s-postamat5-транзакция-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})
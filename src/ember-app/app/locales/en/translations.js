import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPostamat5ЛогистикаLForm from './forms/i-i-s-postamat5-логистика-l';
import IISPostamat5ПользовательLForm from './forms/i-i-s-postamat5-пользователь-l';
import IISPostamat5ПостаматLForm from './forms/i-i-s-postamat5-постамат-l';
import IISPostamat5СлужбаДоставкиLForm from './forms/i-i-s-postamat5-служба-доставки-l';
import IISPostamat5ТранзакцияLForm from './forms/i-i-s-postamat5-транзакция-l';
import IISPostamat5ХранениеLForm from './forms/i-i-s-postamat5-хранение-l';
import IISPostamat5ЛогистикаEForm from './forms/i-i-s-postamat5-логистика-e';
import IISPostamat5ПользовательEForm from './forms/i-i-s-postamat5-пользователь-e';
import IISPostamat5ПостаматEForm from './forms/i-i-s-postamat5-постамат-e';
import IISPostamat5СлужбаДоставкиEForm from './forms/i-i-s-postamat5-служба-доставки-e';
import IISPostamat5ТранзакцияEForm from './forms/i-i-s-postamat5-транзакция-e';
import IISPostamat5ХранениеEForm from './forms/i-i-s-postamat5-хранение-e';
import IISPostamat5ЛогистикаModel from './models/i-i-s-postamat5-логистика';
import IISPostamat5ПользовательModel from './models/i-i-s-postamat5-пользователь';
import IISPostamat5ПостаматModel from './models/i-i-s-postamat5-постамат';
import IISPostamat5ПосылкаModel from './models/i-i-s-postamat5-посылка';
import IISPostamat5СлужбаДоставкиModel from './models/i-i-s-postamat5-служба-доставки';
import IISPostamat5ТранзакцияModel from './models/i-i-s-postamat5-транзакция';
import IISPostamat5ХранениеModel from './models/i-i-s-postamat5-хранение';
import IISPostamat5ЯчейкаModel from './models/i-i-s-postamat5-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat5-логистика': IISPostamat5ЛогистикаModel,
    'i-i-s-postamat5-пользователь': IISPostamat5ПользовательModel,
    'i-i-s-postamat5-постамат': IISPostamat5ПостаматModel,
    'i-i-s-postamat5-посылка': IISPostamat5ПосылкаModel,
    'i-i-s-postamat5-служба-доставки': IISPostamat5СлужбаДоставкиModel,
    'i-i-s-postamat5-транзакция': IISPostamat5ТранзакцияModel,
    'i-i-s-postamat5-хранение': IISPostamat5ХранениеModel,
    'i-i-s-postamat5-ячейка': IISPostamat5ЯчейкаModel
  },

  'application-name': 'Postamat5',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Postamat5',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat5',
          title: 'Postamat5'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        postamat5: {
          caption: 'Postamat5',
          title: 'Postamat5',
          'i-i-s-postamat5-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat5-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat5-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat5-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat5-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat5-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-postamat5-логистика-l': IISPostamat5ЛогистикаLForm,
    'i-i-s-postamat5-пользователь-l': IISPostamat5ПользовательLForm,
    'i-i-s-postamat5-постамат-l': IISPostamat5ПостаматLForm,
    'i-i-s-postamat5-служба-доставки-l': IISPostamat5СлужбаДоставкиLForm,
    'i-i-s-postamat5-транзакция-l': IISPostamat5ТранзакцияLForm,
    'i-i-s-postamat5-хранение-l': IISPostamat5ХранениеLForm,
    'i-i-s-postamat5-логистика-e': IISPostamat5ЛогистикаEForm,
    'i-i-s-postamat5-пользователь-e': IISPostamat5ПользовательEForm,
    'i-i-s-postamat5-постамат-e': IISPostamat5ПостаматEForm,
    'i-i-s-postamat5-служба-доставки-e': IISPostamat5СлужбаДоставкиEForm,
    'i-i-s-postamat5-транзакция-e': IISPostamat5ТранзакцияEForm,
    'i-i-s-postamat5-хранение-e': IISPostamat5ХранениеEForm
  },

});

export default translations;

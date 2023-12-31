import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЯчейки: DS.attr('number'),
  хранение: DS.belongsTo('i-i-s-postamat5-хранение', { inverse: null, async: false }),
  постамат: DS.belongsTo('i-i-s-postamat5-постамат', { inverse: 'ячейка', async: false })
});

export let ValidationRules = {
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postamat5-ячейка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat5-ячейка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-postamat5-ячейка.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЯчейкаE', 'i-i-s-postamat5-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    хранение: belongsTo('i-i-s-postamat5-хранение', 'Хранение', {
      номер: attr('Номер', { index: 2 }),
      датаНачала: attr('Дата начала', { index: 3 }),
      датаЗавершения: attr('Дата завершения', { index: 4 }),
      продление: attr('Продлен на 3 дня', { index: 5 })
    }, { index: 1, displayMemberPath: 'номер' })
  });
};

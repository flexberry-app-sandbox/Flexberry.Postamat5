import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat5-ячейка', 'Unit | Serializer | i-i-s-postamat5-ячейка', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat5-ячейка',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat5-оплата',
    'transform:i-i-s-postamat5-состояние',
    'transform:i-i-s-postamat5-статус',
    'transform:i-i-s-postamat5-статусы',

    'model:i-i-s-postamat5-логистика',
    'model:i-i-s-postamat5-пользователь',
    'model:i-i-s-postamat5-постамат',
    'model:i-i-s-postamat5-посылка',
    'model:i-i-s-postamat5-служба-доставки',
    'model:i-i-s-postamat5-транзакция',
    'model:i-i-s-postamat5-хранение',
    'model:i-i-s-postamat5-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

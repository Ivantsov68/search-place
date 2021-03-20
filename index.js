const pack_1 = require('./data/pack1');
const pack_2 = require('./data/pack2');
const pack_3 = require('./data/pack3');

const merge = [
    ...pack_1,
    ...pack_2,
    ...pack_3
];

require('./modules/random_element')(merge);


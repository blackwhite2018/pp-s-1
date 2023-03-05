const EventEmitter = require('events');
const {isNotNullable} = require('./utils');

let result = null;

const emitter = new EventEmitter();

emitter.on('add', (a, b) => {
    emitter.emit('result', a + b);
});
emitter.on('multiple', (a, b) => {
    emitter.emit('result', a * b);
});
emitter.on('result', (value) => {
    result = value
});

const START_POSITION_ARGV = 2;

const run = () => {
    const firstNum = process.argv[START_POSITION_ARGV];
    const secondNum = process.argv[START_POSITION_ARGV + 1];
    const sign = process.argv[START_POSITION_ARGV + 2];

    switch (sign) {
        case '+':
            emitter.emit('add', +firstNum, +secondNum);
            break;
        case '*':
            emitter.emit('multiple', firstNum, secondNum);
            break;
        default:
            console.log('invalid operation');
    }

    if (isNotNullable(result)) {
        console.log(result);
    }
};

run();
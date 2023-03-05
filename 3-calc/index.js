const calc = {
    add: require('./add'),
    multiple: require('./multiple'),
};
const {isNotNullable} = require('./utils');

const START_POSITION_ARGV = 2;

const run = () => {
    const firstNum = process.argv[START_POSITION_ARGV];
    const secondNum = process.argv[START_POSITION_ARGV + 1];
    const sign = process.argv[START_POSITION_ARGV + 2];
    let result = null;

    switch (sign) {
        case '+':
            result = calc.add(+firstNum, +secondNum);
            break;
        case '*':
            result = calc.multiple(firstNum, secondNum);
            break;
        default:
            console.log('invalid operation');
    }

    if (isNotNullable(result)) {
        console.log(result);
    }
};

run();
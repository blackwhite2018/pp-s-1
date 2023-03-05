const isNullable = value => value === null;
const isNotNullable = value => !isNullable(value);

module.exports = {
    isNullable,
    isNotNullable,
};

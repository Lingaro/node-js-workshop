export const regexpValidator = (regexp) => (value) =>
    regexp.test(value) ||
    value === undefined ||
    value === null ||
    value === '';

export const isRequired = (value) =>
    value !== undefined &&
    value !== null &&
    value !== '';

export const combineValidators = (...validators) => value => validators.every(validator => validator(value));
export const regexpValidator = (regexp) => (value) =>
    regexp.test(value) ||
    value === null ||
    value === undefined ||
    value === '';

export const isRequired = (value) =>
    value !== null &&
    value !== undefined &&
    value !== '';

export const combineValidators = (...validators) => (value) => validators.every(validator => validator(value));
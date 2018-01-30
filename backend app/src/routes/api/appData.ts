import {Router} from 'express';
import {regexpValidator, combineValidators, isRequired} from './validator';
const router = Router();

const runValidation = (validator) => (row) => {
    console.log('validating: ');
    console.log(row);
    return validator(row[0])
};

router.route('/')
    .post((req, res) => {
        const appData = req.body;
        const validationResult = appData.every(runValidation(
            combineValidators(
                regexpValidator((/^[a-z]+$/)),
                isRequired
            )
        ));

        if (validationResult) {
            res.end('OK');
        } else {
            res.status(500).end('Application data is invalid');
        }
    });

export default router;
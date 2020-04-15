const {Router} = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Expense Categories routes'));

module.exports = router;
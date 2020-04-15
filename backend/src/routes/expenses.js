const {Router} = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.json({message: []}))
    .post((req, res) => res.json({message: 'Expense Saved'}));

router.route('/:id')
    .get((req, res) => res.json({title: 'abcd'}))
    .put((req, res) => res.json({message: 'Expense Updated'}))
    .delete((req, res) => res.json({message: 'Expense Deleted'}))


module.exports = router;

 
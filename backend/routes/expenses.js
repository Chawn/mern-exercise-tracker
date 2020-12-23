const router = require('express').Router();
let Expense = require('../models/expense.model');

router.route('/').get((req, res) => {
  Expense.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const date = Date.parse(req.body.date);
  const amount = Number(req.body.amount);
  const detail = req.body.detail;

  const newExpense = new Expense({
    date,
    amount,
    detail,
  });

  newExpense.save()
  .then(() => res.json('Expense added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Expense.findById(req.params.id)
    .then(expense => res.json(expense))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Expense.findByIdAndDelete(req.params.id)
    .then(() => res.json('Expense deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Expense.findById(req.params.id)
    .then(expense => {
      expense.username = req.body.username;
      expense.description = req.body.description;
      expense.duration = Number(req.body.duration);
      expense.date = Date.parse(req.body.date);

      expense.save()
        .then(() => res.json('Expense updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
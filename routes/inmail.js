const User = require('../models/User');
const router = require('express').Router();
const inmail = require('../models/inmail');

//create a inmail

router.post('/', async (req, res) => {
  const newInmail = new Inmail(req.body);
  try {
    const savedMail = await newInmail.save();
    res.status(200).json(savedMail);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a inmail

router.put('/:id', async (req, res) => {
  try {
    const inmail = await Inmail.findById(req.params.id);
    if (inmail.userId === req.body.userId) {
      await inmail.updateOne({ $set: req.body });
      res.status(200).json('the inmail has been updated');
    } else {
      res.status(403).json('you can update only inmail');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a inmail
router.delete('/:id', async (req, res) => {
  try {
    const inmail = await Inmail.findById(req.params.id);
    if (inmail.userId === req.body.userId) {
      await inmail.deleteOne();
      res.status(200).json('the inmail has been deleted');
    } else {
      res.status(403).json('you can delete only inmail');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a inmail

router.get('/:id', async (req, res) => {
  try {
    const inmail = await Inmail.findById(req.params.id);
    res.status(200).json(inmail);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

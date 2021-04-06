const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
create

};

function index(req, res) {
  console.log('Skills index time is ', req.time);
  res.render('skills/index', {
    skills: Skill.getAll(),
    time: req.time

  });
}

function show(req, res) {
  res.render('skills/show', {
skill: Skill.getOne(req.params.id),
skillNum: parseInt(req.params.id) + 1
  });
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Skill.create(req.body);
  res.redirect('/skills');
}
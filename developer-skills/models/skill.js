const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'Learn Express', done: true},
    {skill: 'Learn Python', done: false}
  ];

  module.exports = {
    getAll,
    getOne,
    create
  };

  function getAll() {
    return skills;
  }

  function getOne(id) {
return skills[id];  
}

function create(skill) {
  skills.push(skill);
}
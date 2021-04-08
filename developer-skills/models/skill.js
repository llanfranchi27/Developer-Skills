const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'Learn Express', done: true},
    {skill: 'Learn Python', done: false}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
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

function deleteOne(id) {
  skills.splice(id, 1);
}

function update(idx, skill) {
	skills.splice(idx, 1, skill)
}

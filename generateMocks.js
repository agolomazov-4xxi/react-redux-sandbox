const faker = require('faker');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const shortid = require('shortid').generate;
const randomInt = require('random-int');

let todos = [];

for(let i = 0; i < 10; i++) {
  const todo = {
    id: shortid(),
    title: faker.lorem.words(randomInt(1, 6)),
    description: faker.lorem.paragraph(),
    created_at: moment().subtract(randomInt(10, 20), 'days'),
    updated_at: moment().subtract(randomInt(1, 5), 'days'),
    completed: false
  };
  todos = [...todos, todo];
}

const data = JSON.stringify({
  todos
}, undefined, 2);

fs.writeFile(path.resolve(__dirname, 'src/data/db.json'), data, (err) => {
  if(!err) {
    console.info('Mocks was generated!');
  }
})

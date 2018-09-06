const _ = require('lodash');


let data = [];

const add = (name, content) => {
    data.push({
        name: name,
        content: content
    });
};

const list = () => {
    return _.cloneDeep(data);
};

const find = (properties) => {
    return _.cloneDeep(_.filter(data, properties));
};

module.exports = {
    add: add,
    list: list,
    find: find
};
const faker = require('faker');

// let randomName = faker.name.findName(); // Rowan Nikolaus
// let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// let randomCard = faker.helpers.createCard(); // random contact card containing many properties
const randArrayEl = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = () => {
    const fakeFirsts = [];
    const fakeLasts = [];

    for (let i = 0; i < 10; i++) {
        let name = faker.name.findName();
        fakeFirsts.push(name.split(" ")[0]);
        fakeLasts.push(name.split(" ")[1]);     
     }
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = () => {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "I am so " + randArrayEl(awesome_adj);
};

for (let i = 0; i < 10; i++) {
    module.exports.add(getFakeName(), getFakeTweet());
}




const FlyweightFactory = require('./flyweightFactory.js');

var factory = new FlyweightFactory();
var army = { };

console.log('Adding militiamen to the army.');
for (var i = 0; i < 1000; i++) {
    army[i] = new SoldierFlyweight('Militiaman', 1, 1, 1);
}

console.log('Adding soldiers to the army.');
for (var i = 0; i < 100; i++) {
    army[i + 1000] = new SoldierFlyweight('Soldier', 2, 1, 2);
}

console.log('Adding knights to the army.');
for (var i = 0; i < 10; i++) {
    army[i + 1100] = new SoldierFlyweight('Soldier', 10, 5, 5);
}

console.log(`Total army size is ${Object.keys(army).length}.`);
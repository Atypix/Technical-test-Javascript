const {Arguments} = require('../utils/arg.js');
const {Filter} = require('../views/filter.js');
const {Count} = require('../views/count.js');
const {Dump} = require('../views/dump.js');
const {data} = require('../datas/data.js');
const assert = require('assert');






describe ('Class Count', function () {

    let instance = new Count();
    
    describe ('Methods', function () {

        it("'displayString' -> must return a string of a defined length (12)", function () {

            let animal = "Deer Mouse";
            assert.strictEqual(instance.displayString("", animal, 0).length, 12);

        });

        it("'displayArray'  -> must return a string of a defined length (210)", function () {
            
            let animals = [{name: 'Caracal'},
                            {name: 'Anteater'},
                            {name: 'Kiwa Hirsuta'},
                            {name: 'Zooplankton'},
                            {name: 'Tarantula'},
                            {name: 'Oryx'}]

            assert.strictEqual(instance.displayArray("", animals, 0, "animals").length, 210);

        });

        it("'displayObject' -> must return a string of a defined length (394)", function () {
            
            let people = {
                            name: 'Blanche Viciani',
                            animals:
                                    [{name: 'Barbet'},
                                     {name: 'Rhea'},
                                     {name: 'Snakes'},
                                     {name: 'Antelope'},
                                     {name: 'Echidna'},
                                     {name: 'Crow'},
                                     {name: 'Guinea Fowl'},
                                     {name: 'Deer Mouse'}]
                            };

            assert.strictEqual(instance.displayObject("", people, 0).length, 394);

        });

    });



});

describe ('Class Filter', function () {

    let instance = new Filter();
    instance.init("ry");

    describe ('Search for an object by its name recursively in the data', function () {

        it("'find' -> must return an array of a defined length (5)", function () {
            
            let oDatas = [{
                            name: 'Satanwi',
                            people:
                                    [{
                                        name: 'Elmer Kinoshita',
                                        animals:
                                        [{name: 'Weasel'},
                                            {name: 'Birds'},
                                            {name: 'Snakes'},
                                            {name: 'Anteater'},
                                            {name: 'Groundhog'},
                                            {name: 'Ant'},
                                            {name: 'Courser'}]
                                    },
                                        {
                                        name: 'Cora Howell',
                                        animals:
                                            [{name: 'Rhea'},
                                            {name: 'Sponge'},
                                            {name: 'Cat'},
                                            {name: 'African Wild Dog'},
                                            {name: 'Snakes'},
                                            {name: 'Starling'},
                                            {name: 'Pronghorn'}]
                                        },
                                        {
                                        name: 'Ernest Conte',
                                        animals:
                                            [{name: 'Bird'},
                                            {name: 'Colugo'},
                                            {name: 'Grison'},
                                            {name: 'Pot Bellied Pig'},
                                            {name: 'Asian Elephant'}]
                                        },
                                        {
                                        name: 'Dennis Franci',
                                        animals:
                                            [{name: 'Grouse'},
                                            {name: 'Hapuka'},
                                            {name: 'Cheetah'},
                                            {name: 'Donkey'},
                                            {name: 'Turkey'},
                                            {name: 'Carp'},
                                            {name: 'Octopus'},
                                            {name: 'Silkworm'},
                                            {name: 'Bearded Dragon'}]
                                        },
                                        {
                                        name: 'Anthony Bruno',
                                        animals:
                                            [{name: 'Caracal'},
                                            {name: 'Anteater'},
                                            {name: 'Kiwa Hirsuta'},
                                            {name: 'Zooplankton'},
                                            {name: 'Tarantula'},
                                            {name: 'Oryx'}]
                                        }]
                                    }
                                ];

            assert.strictEqual(instance.find(oDatas, "animals", 'o').length, 5);

        });

    });

    describe ('Methods with/without --filter', function () {
        
        it("'displayString' -> must return a string of a defined length (12)", function () {
            
            let animal = "Deer Mouse";
            assert.strictEqual(instance.displayString("", animal, 0).length, 12);

        });

       it("'displayArray'  -> must return a string of a defined length (33) - data with 'ry'", function () {
            
            let animals = [{name: 'Caracal'},
                            {name: 'Anteater'},
                            {name: 'Kiwa Hirsuta'},
                            {name: 'Zooplankton'},
                            {name: 'Tarantula'},
                            {name: 'Oryx'}]

            assert.strictEqual(instance.displayArray("", animals, 0, "animals").length, 33);

        });

        it("'displayArray'  -> must return a string of a defined length (3) - data without 'ry'", function () {
            
            let animals = [{name: 'Grouse'},
                            {name: 'Hapuka'},
                            {name: 'Cheetah'},
                            {name: 'Donkey'},
                            {name: 'Turkey'},
                            {name: 'Carp'},
                            {name: 'Octopus'},
                            {name: 'Silkworm'},
                            {name: 'Bearded Dragon'}];

            assert.strictEqual(instance.displayArray("", animals, 0, "animals").length, 3);

        });

        it("'displayObject' -> must return a string of a defined length (0) - data without 'ry'", function () {
            
            let people = {
                            name: 'Blanche Viciani',
                            animals:
                                    [{name: 'Barbet'},
                                     {name: 'Rhea'},
                                     {name: 'Snakes'},
                                     {name: 'Antelope'},
                                     {name: 'Echidna'},
                                     {name: 'Crow'},
                                     {name: 'Guinea Fowl'},
                                     {name: 'Deer Mouse'}]
                            };

            assert.strictEqual(instance.displayObject("", people, 0).length, 0);

        });

        it("'displayObject' -> must return a string of a defined length (93) - data with 'ry'", function () {
            
            let people = {
                            name: 'Blanche Viciani',
                            animals:
                                    [{name: 'Caracal'},
                                    {name: 'Anteater'},
                                    {name: 'Kiwa Hirsuta'},
                                    {name: 'Zooplankton'},
                                    {name: 'Tarantula'},
                                    {name: 'Oryx'}]
                            };

            assert.strictEqual(instance.displayObject("", people, 0).length, 93);

        });

    });

});

describe ('Class Dump', function () {
    
    let instance = new Dump();

    describe ('Methods', function () {

        it("'indentation'   -> must return a string of a defined length (9)", function () {
            
            assert.strictEqual(instance.indentation("   ", 3).length, 9);

        });
        it("'displayString' -> must return a string of a defined length (18)", function () {
            
            let animal = "Deer Mouse";
            assert.strictEqual(instance.displayString("", animal, 0).length, 18);

        });

        it("'displayArray'  -> must return a string of a defined length (407)", function () {
            
            let animals = [{name: 'Barbet'},
                            {name: 'Rhea'},
                            {name: 'Snakes'},
                            {name: 'Antelope'},
                            {name: 'Echidna'},
                            {name: 'Crow'},
                            {name: 'Guinea Fowl'},
                            {name: 'Deer Mouse'}];

            assert.strictEqual(instance.displayArray("", animals, 0).length, 407);

        });

        it("'displayObject' -> must return a string of a defined length (538)", function () {
            
            let people = {
                                name: 'Blanche Viciani',
                                animals:
                                        [{name: 'Barbet'},
                                            {name: 'Rhea'},
                                            {name: 'Snakes'},
                                            {name: 'Antelope'},
                                            {name: 'Echidna'},
                                            {name: 'Crow'},
                                            {name: 'Guinea Fowl'},
                                            {name: 'Deer Mouse'}]
                            };

            assert.strictEqual(instance.displayObject("", people, 0).length, 538);

        });

    });

    describe ('Recursion and Data integrity', function () {

        it("'dump' -> must return a string of a defined length (295)", function () {
            
            let animals = data[0].people[0].animals;
            assert.strictEqual(instance.dump(animals).length, 295);

        });

        it("'dump' -> must return a string of a defined length (408)", function () {
            
            let animals = data[0].people[0];
            assert.strictEqual(instance.dump(animals).length, 408);

        });

        it("'dump' -> must return a string of a defined length (3299)", function () {
            
            let animals = data[0];
            assert.strictEqual(instance.dump(animals).length, 3299);

        });

        it("'dump' -> must return a string of a defined length (23511)", function () {
            
            let animals = data;
            assert.strictEqual(instance.dump(animals).length, 23511);

        });

    });

});

describe ('Class Arguments', function () {
    
    describe ('Class', function () {

        it("'Arguments' -> must return an Array with key / value", function () {
            
            let instance = new Arguments(['','', '--filter=ry'])

            assert.strictEqual(instance["filter"], 'ry');

        });

    });

    describe ('Error', function () {

        it("Error, if no argument", function () {

            assert.throws( function ()  {
                
                let instance = new Arguments(['','']);

            },  Error, "You must use a --filter or --count argument");

        });

        it("Error, if 2 arguments", function () {

            assert.throws( function ()  {
                
                let instance = new Arguments(['','', '--filter=ry', '--count']);

            },  Error, "Only one argument is allowed!");

        });

        it("Error, if argument is not valid", function () {

            assert.throws( function ()  {
                
                let instance = new Arguments(['','', '--filtre=ry']);

            },  Error, "You must use a --filter or --count argument");

        });

        
    });



});

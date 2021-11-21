const {data} = require('./datas/data.js');
const {Arguments} = require('./utils/arg.js');
const {Filter} = require('./views/filter.js');
const {Count} = require('./views/count.js');


class App {

    constructor () {

        this._init();

    }

    _init () {

        let args = new Arguments(process.argv);

        for (let key in args) {
           
            let className = key.replace(/^./, key[0].toUpperCase());

            let myClass = eval("new " + className + "()");

            myClass.init(args[key]);

            myClass.log(myClass.dump(data));

        }
        
        
    }

  
}



let app = new App();


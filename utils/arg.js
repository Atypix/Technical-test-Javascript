class Arguments {
    
    constructor(aArg) {
        
       
        this.args = aArg.slice(2);
        this.arg = [];

        return this._validateArgs();

    }

    _validateArgs () {
        
        if (this.args.length == 0 )
            throw new Error('You must use a --filter or --count argument');

        if (this.args.length > 1 )
            throw new Error('Only one argument is allowed!');

        return this._initArg();

    }

    _initArg () {

        let a = this.args[0].split('=');
        let key = a[0];
        let value = a[1];

        this._validateKey(key);

        key = key.replace(/^--/, '');
        this.arg[key] = value || 0;

        return this.arg;

    } 

    _validateKey (key) {
        
        if (key != "--filter" && key != "--count") 
            throw new Error('You must use a --filter or --count argument'); 
        
    }




}

module.exports = {
    Arguments
}
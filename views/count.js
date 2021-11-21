const {Dump} = require('./dump.js');

class Count extends Dump {

    constructor () {

        super ();
        
    }

    displayString (output, obj, level, param) {
        
        output += '"' + obj + ((param != undefined) ? param : '') + '"';

        return output;

    }

    displayArray (output, obj, level, param) {

        output = '[\n';

        for (let i = 0; i < obj.length; i++) {

            output += this.indentation('   ', level) + this.dump(obj[i], level + 1, param) + "\n";

        }

        output += this.indentation('   ', level) + "]";   
        
        return output;
    }

    displayObject (output, obj, level, param) {

        let str = "   {\n";
        
        param = (this._hasArray(obj)) ? this._getCount(obj) : undefined;
        
        for (let p in obj) {
            
            str += this.indentation('   ', level) + "   " + p + ":  " + this.dump(obj[p],  level + 1, param) + "\n";
    
        }

        str += this.indentation('   ', level) + "}";

        output += str;    
        
        return output;
        
    }

    _getCount (obj) {

        for (let p in obj) {

            if(obj[p] instanceof Array) {

                return ' [' + obj[p].length + ']';
                
            }

        }

        return ' [0]';
    }

    _hasArray (obj) {

        for (let p in obj) {
            
            if(obj[p] instanceof Array) {
                
                return true;

            }

        }

        return false;

    }

    
    
}

module.exports = {
    Count
}
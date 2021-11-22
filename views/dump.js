

class Dump {

    constructor () {
        
    }

    init (value, key) {}

    indentation (str, num) {

        let output = '';

        for (let i = 0; i < num; i++) {

            output += str;

        }

        return output;
    }

    dump(obj, level, param) {
        
        level = (typeof level !== 'number') ? 0 : level;
        
        let objType = typeof obj;
        let output = '';
    
        switch (objType) {

            case "string":

                output = this.displayString (output, obj, level, param);
                break;

            case "object":
                
                if (obj === null) {

                    output = "null";

                } else if (obj instanceof Array) {

                    output = this.displayArray (output, obj, level, param);

                } else {
                    
                    output = this.displayObject (output, obj, level, param);

                }

                break;

            default:

                output = obj;
                break;
        }
    
        
    
        return output;

    }

    displayString (output, obj, level, param) {

        output += "(" + obj.length + '): "' + obj + '"';

        return output;

    }

    displayArray (output, obj, level, param) {

        output = 'array(' + obj.length + '): [\n';

        for (let i = 0; i < obj.length; i++) {

            output += this.indentation('   ', level) + "   [" + i + "]:  " + this.dump(obj[i], level + 1, param) + "\n";

        }

        output += this.indentation('   ', level) + "]";   
        
        return output;
    }

    displayObject (output, obj, level, param) {

        let str = "{\n";
        let count = 0;
        
        for (let p in obj) {
            
            str += this.indentation('   ', level) + "   " + p + ":  " + this.dump(obj[p],  level + 1, p) + "\n";
            count++;
        }

        str += this.indentation('   ', level) + "}";

        output += "(" + count + "): " + str;    
        
        return output;
        
    }

    log (str) {

        console.log((str == '') ? 'No Data' : str)

    }
}

module.exports = {
    Dump
}
const {Dump} = require('./dump.js');

class Filter extends Dump {

    constructor () {

        super ();

    }

    init (value, key) {
        
        this.value = value;
        this.key = key;
       

    }



    displayString (output, obj, level, param) {
        
        output += '"' + obj + '"';

        return output;

    }

    displayArray (output, obj, level, param) {
        
        if (param == this.key) obj = this._filter(obj, this.value);

        if (this._validateObj(obj, this.key, this.value) || param == this.key) {

            output = '[\n';

            for (let i = 0; i < obj.length; i++) {

                if (this._validateObj(obj[i], this.key, this.value) || param == this.key)
                    output += this.indentation('   ', level) + this.dump(obj[i], level + 1, param) + "\n";

            }

            output += this.indentation('   ', level) + "]";

            
        }

        
        
        return output;

    }

    displayObject (output, obj, level, param) {
        
        if (this._validateObj(obj, this.key, this.value) || param == this.key) {

            let str = "   {\n";

            for (let p in obj) {

                str += this.indentation('   ', level) + "   " + p + ":  " + this.dump(obj[p],  level + 1, p) + "\n";
                
            }

            str += this.indentation('   ', level) + "}";

            output += str;  

            
        }

        return output;
        
        
    }

    find (obj, key, value){

        
        return this._findValues(obj, key, value, []);

    }

    _validateObj (obj, key, value) {
        
        let aFiltred = this.find (obj, key, value);

        return (aFiltred.length > 0) ? true : false;

    }


    
    _findValues (obj, key, value, list) {

        if (!obj) return list;

        if (obj instanceof Array) {

            for (let i in obj) {

                list = list.concat(this._findValues(obj[i], key, value, []));

            }

            return list;

        }

        if (obj[key]) {
            
            let filtred = this._filter(obj[key], value);
            if (filtred.length > 0) list.push(obj[key]);

        }
        
        if ((typeof obj == "object") && (obj !== null) ) {

            let children = Object.keys(obj);
           
            if (children.length > 0) {
                
                for (let i = 0; i < children.length; i++ ) {

                    list = list.concat(this._findValues(obj[children[i]], key, value, []));

                }

            } 
        }

        return list;
      
    }

    _filter (aObj, value) {

        let filtred = [];

        for (let i=0; i < aObj.length;i++) {
            
            let a = aObj[i].name.split(value);
            if (a.length > 1) filtred.push(aObj[i]);

        }
        
        return filtred;

    }

    

}

module.exports = {
    Filter
}
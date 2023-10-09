const chai = require('chai');
const assert = chai.assert;

// ##### Case of check the data types and values #####
describe('Check', function(){
    let name = "Rahul Joshi";
    let bool = true;
    let num = 3;
    it('String or not ?', function(){
        assert.isString(name);
    })
    
    it('Boolean or not ?', function (){
        assert.isBoolean(bool);
    });

    it('Number or not ?', function (){
        assert.isNumber(num);
    });
});

// ##### Case of checking the number is equal or not ? #####
describe("Equal", function(){
    let a=20, b=20;
    it('Numbers is equal or not?', function(){
        assert.equal(a,b);
    });
});

// ##### Case for type of variable #####
describe("Type Of", function(){
    let nul = null;
    let regex = /tea/;
    let undef = undefined;
    let arr = ['chai','jasmine'];
    let obj = {'chai':'jasmine'};
    let string = "This is mocha and chai testing !";
    it("type of", function(){
        assert.typeOf(nul, 'null', 'we have a null');
        assert.typeOf(arr, 'array', 'we have an array');
        assert.typeOf(obj, 'object', 'we have an object');
        assert.typeOf(string, 'string', 'we have a string');
        assert.typeOf(undef, 'undefined', 'we have an undefined');
        assert.typeOf(regex, 'regexp', 'we have a regular expression');
    });
});
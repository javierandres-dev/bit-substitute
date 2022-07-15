//console.log('Hola desde typescript');
var hello = 'Hello';
var world = 'world';
var n = 10;
var fn = function () { return true; };
/* TIPOS DE DATO */
var myString;
myString = 'a';
myString = 'text';
myString = hello + ' ' + world;
myString = "".concat(hello, " ").concat(world);
//console.log('myString:', myString);
var myNumber = n;
myNumber = 11;
myNumber = 3.14;
myNumber = 0xff;
myNumber = n + 11 + 3.14 + 0xff;
//console.log('myNumber:', myNumber);
var myBoolean;
myBoolean = true;
myBoolean = false;
myBoolean = 10 < 5;
myBoolean = fn();
//console.log('myBoolean:', myBoolean);
var myAny;
myAny = 10;
myAny = 'word';
myAny = fn();
//console.log('myAny:', myAny);
var myStringArr;
myStringArr = ['one', 'two', 'three'];
myStringArr = ['1', '2', '3'];
myStringArr.push(world);
//console.log('mySmyStringArr:', myStringArr);
var myNumberArr;
myNumberArr = [1, 2, 3];
//console.log('myNumberArr:', myNumberArr);
var myBooleanArr;
myBooleanArr = [true, false];
//console.log('myBooleanArr:', myBooleanArr);
var myAnyArr;
myAnyArr = [1, 'one', false, {}];
//console.log('myAnyArr:', myAnyArr);
var mySimpleObj = { email: 'asd@asd.com' };
mySimpleObj = { email: 'pepita' };
//console.log('mySimpleObj:', mySimpleObj);
var myLiteralObj;
myLiteralObj = {
    email: 'asd@asd.com',
    password: '123123',
    active: true
};
myLiteralObj = {
    email: 'qwe@qwe.com',
    password: 'abc'
};
var aProduct;
aProduct = {
    name: 'tv',
    serial: 'zxc',
    price: 100,
    exists: true
};
//console.log('aProduct:', aProduct);
/* Returns */
function isAdmin(id) {
    /* let result: boolean;
    id === '0x00' ? (result = true) : (result = false);
    return result; */
    /* if (id === '0x00') {
      return true;
    } else {
      return false;
    } */
    if (id === '0x00')
        return true;
    else
        return false;
}
var res = isAdmin('000');
console.log('res :>> ', res);
res = isAdmin('0x00');
console.log('res :>> ', res);

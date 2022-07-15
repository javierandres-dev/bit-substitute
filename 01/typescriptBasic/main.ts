//console.log('Hola desde typescript');

const hello = 'Hello';
const world = 'world';
const n = 10;
const fn = () => true;

/* TIPOS DE DATO */
let myString: string;
myString = 'a';
myString = 'text';
myString = hello + ' ' + world;
myString = `${hello} ${world}`;

//console.log('myString:', myString);

let myNumber: number = n;
myNumber = 11;
myNumber = 3.14;
myNumber = 0xff;
myNumber = n + 11 + 3.14 + 0xff;

//console.log('myNumber:', myNumber);

let myBoolean: boolean;
myBoolean = true;
myBoolean = false;
myBoolean = 10 < 5;
myBoolean = fn();

//console.log('myBoolean:', myBoolean);

let myAny: any;
myAny = 10;
myAny = 'word';
myAny = fn();

//console.log('myAny:', myAny);

let myStringArr: string[];
myStringArr = ['one', 'two', 'three'];
myStringArr = ['1', '2', '3'];
myStringArr.push(world);

//console.log('mySmyStringArr:', myStringArr);

let myNumberArr: number[];
myNumberArr = [1, 2, 3];

//console.log('myNumberArr:', myNumberArr);

let myBooleanArr: boolean[];
myBooleanArr = [true, false];

//console.log('myBooleanArr:', myBooleanArr);

let myAnyArr: any[];
myAnyArr = [1, 'one', false, {}];

//console.log('myAnyArr:', myAnyArr);

let mySimpleObj = { email: 'asd@asd.com' };
mySimpleObj = { email: 'pepita' };

//console.log('mySimpleObj:', mySimpleObj);

let myLiteralObj: {
  email: string;
  password: string;
  active?: boolean;
};

myLiteralObj = {
  email: 'asd@asd.com',
  password: '123123',
  active: true,
};

myLiteralObj = {
  email: 'qwe@qwe.com',
  password: 'abc',
};

//console.log('myLiteralObj:', myLiteralObj);

type Product = {
  name: string;
  serial: string;
  price: number;
  exists: boolean;
};

let aProduct: Product;

aProduct = {
  name: 'tv',
  serial: 'zxc',
  price: 100,
  exists: true,
};

//console.log('aProduct:', aProduct);

/* Returns */
function isAdmin(id: string): boolean {
  /* let result: boolean;
  id === '0x00' ? (result = true) : (result = false);
  return result; */
  /* if (id === '0x00') {
    return true;
  } else {
    return false;
  } */
  if (id === '0x00') return true;
  else return false;
}

let res = isAdmin('000');
console.log('res :>> ', res);
res = isAdmin('0x00');
console.log('res :>> ', res);

// const button = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);
// console.log(button);

// const obj = {
//   color: "red",
//   size: 32 + "px",
// };

// const set = new Set(["red", "32px"]);

// const button2 = new Map(Object.entries(Object.fromEntries(set.entries())));
// // const button2 = new Map(Object.entries(obj));
// console.log(button2);

// const button3 = new Map(set.entries());
// console.log(button3);
///////////////////////////////////////////////////////////////////////////

const button2 = new Map([
  ["color", "red"],
  ["size", "32px"],
]);
const set2 = new Set(button2.values());
console.log(set2);

const set3 = new Set(button2.keys());
console.log(set3);

///////////////////////////////////////////////////////////////////////////

// const button3 = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);

// for (const [key, value] of button3) {
//   console.log(key, value);
// }
// for (const value of button3) {
//   console.log(value);
// }

// // for (const value in Object.fromEntries(button3.entries())) {
// //   console.log(value);
// // }

// button3.forEach((value, key, map) => console.log(value, key, map));

///////////////////////////////////////////////////////////////////////////

// const button4 = new Map([
//   ["color", "red"],
//   ["size", "32px"],
//   [123, 123, 123],
//   [456, 456, 456],
// ]);

// const button4 = new Map([
//   ["color", "red"],
//   ["size", "32px"],
//   [123],
//   [123, 123, 123],
// ]);

// const button4 = new Map([
//   ["color", "red", "32px"],
//   ["size", "32px"],
// ]);

// // button4.color = true;
// button4.color = 1000;

// console.log(button4.size);
// console.log(button4);
// console.log(button4["color"]);

///////////////////////////////////////////////////////////////////////////

// const button5 = new Map([
//   ["color", "red", "32px"],
//   ["size", "32px"],
// ]);

// // // button5.color = true;
// // button5.set("color", 1000);
// // console.log(button5);

// // button5.color = true;
// button5.set("weight", 600);
// // console.log(button5);
// console.log(button5.get("weight"));

///////////////////////////////////////////////////////////////////////////

// const button6 = new Map([
//   ["color", "red", "32px"],
//   ["size", "32px"],
// ]);

// // // button6.color = true;
// // button6.set("color", 1000);
// // console.log(button6);

// // button6.color = true;
// button6.set("weight", 600);
// // console.log(button6);
// console.log(button6.get("weight"));

// console.log(button6.delete("weight"));
// console.log(button6.delete("weight"));

// console.log(button6);

///////////////////////////////////////////////////////////////////////////

// const button7 = new Map([
//   ["color", "red", "32px"],
//   ["size", "32px"],
// ]);
// button7.set("weight", 600);
// console.log(button7.delete("weight"));
// console.log(button7.delete("weight"));

// console.log(button7);
// console.log(button7.has("weight"));
// console.log(button7.has("color"));

///////////////////////////////////////////////////////////////////////////

// const button8 = new Map([
//   ["color", "red", "32px"],
//   ["size", "32px"],
// ]);
// button8.set("weight", 600);
// console.log(button8.delete("weight"));
// console.log(button8.delete("weight"));

// console.log(button8);
// console.log(button8.has("weight"));
// console.log(button8.has("color"));

// button8.clear();
// console.log(button8);

///////////////////////////////////////////////////////////////////////////
// const LANG_LIST = {
//   UA: "uk-UA",
//   EA: "es-US",
// };

// const activeLang = LANG_LIST.EU;

// const product = {
//   price: 100,
//   amount: 3,

//   info: new Map([
//     [
//       LANG_LIST.UA,
//       {
//         title: "Заголовок",
//         info: "Інформація",
//       },
//     ],
//     [
//       LANG_LIST.EU,
//       {
//         title: "Title",
//         info: "Info",
//       },
//     ],
//   ]),
// };

// const info = product.info.get(activeLang);

// console.log(info);

// console.log(product.info.has(activeLang));

///////////////////////////////////////////////////////////////////////////

// const user1 = {
//   id: 1313,
//   name: "ivan",
// };

// const user2 = {
//   id: 3131,
//   name: "Anton",
// };

// const product1 = {
//   id: 4242,
//   title: "phone",
// };

// const product2 = {
//   id: 2424,
//   title: "apple",
// };

// // const userProduct = new Map();

// // userProduct.set(user1, product1).set(user2, product2);

// // console.log(userProduct.has(user1));
// // console.log(userProduct.get(user1));

// const productClientList = new Map([[product1, new Set()]]);

// productClientList.set(product1, productClientList.get(product1).add(user1));
// // productClientList.set(product1, new Set());
// console.log(productClientList);

// productClientList.set(product1, productClientList.get(product1).add(user2));
// // productClientList.set(product1, new Set());
// console.log(productClientList);

// const has = productClientList.get(product1).has(user1);
// console.log(has);

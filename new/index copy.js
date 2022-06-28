/* eslint-disable prefer-const */
/* eslint-disable prefer-object-spread */
/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
const customers = {
  "customer-id-1": {
    name: "William",
    age: 54,
  },
  "customer-id-2": {
    name: "Tom",
    age: 17,
  },
  "customer-id-3": {
    name: "John",
    age: 20,
  },
};
const getCustomersList = (obj) =>
  // let newObj = Object.assign({}, obj);
  // eslint-disable-next-line prefer-const
  Object.entries(Object.assign({}, obj))
    .map((elem) => {
      let workObj = { ...elem[1] };
      workObj.id = elem[0];
      return workObj;
    })
    .flat()
    .sort((a, b) => a.age - b.age);
// const getCustomersList = (obj) => {
//   let newObj = Object.assign({}, obj);
//   // eslint-disable-next-line prefer-const
//   let a = Object.entries(newObj)
//     .map((elem) => {
//       let workObj = { ...elem[1] };
//       workObj.id = elem[0];
//       return workObj;
//     })
//     .flat()
//     .sort((a, b) => a.age - b.age);
//   return a;
// };
// eslint-disable-next-line no-unused-expressions
// objEntries.flat(1);

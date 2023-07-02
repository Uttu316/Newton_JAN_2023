// const uploadFile = () => {
//   return new Promise((resolve, reject) => {
//       console.log('File Reading')
//     resolve({ uploadId: "123" });
//     console.log('File Saved')
//   });
// };

// const editFile = (text, id) => {
//   return new Promise((resolve, reject) => {
//       console.log('File reading while editing')
//     // api call with text  & id
//     resolve({ success: true });
//      console.log('File saved after editing')
//   });
// };

// const promisefn = async () => {
//   try {
//     const { uploadId } = await uploadFile();
//     console.log(uploadId);
//     const { success } = await editFile("Gupta", uploadId);
//     if (success) {
//       console.log("File edited");
//     }
//     console.log("Hello");
//   } catch (e) {
//     console.log(e);
//   }
//   console.log("Bye");
// };

// promisefn();
// console.log("hey");

function first() {
  return new Promise((resolve) => {
    console.log(2);
    resolve(3);
    console.log(4);
  });
}

async function f() {
  console.log(1);
  let r = await first();
  console.log(r);
}

console.log("a");
f();
console.log("b");

const asyncFunc = async () => {
  return "I am async";
};

const getValueFromAsync = async () => {
  const value = await asyncFunc();
  console.log(value);
  return value;
};

console.log(getValueFromAsync());


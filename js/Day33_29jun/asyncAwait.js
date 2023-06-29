const uploadFile = () => {
  return new Promise((resolve, reject) => {
    resolve({ uploadId: "123" });
  });
};

const editFile = (text, id) => {
  return new Promise((resolve, reject) => {
    // api call with text  & id
    resolve({ success: true });
  });
};

const promisefn = async () => {
  try {
    const { uploadId } = await uploadFile();
    console.log(uploadId);
    const { success } = await editFile("Gupta", uploadId);
    if (success) {
      console.log("File edited");
    }
    console.log("Hello");
  } catch (e) {
    console.log(e);
  }
  console.log("Bye");
};

promisefn();
console.log("hey");

/*

return -> resolve
throw -> reject
*/

// const promise = new Promise((resolve,reject)=>{
//             resolve(3)
// })

// console.log(promise)
// console.log(promisefn())

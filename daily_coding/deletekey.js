function deleteKey(obj, keyToDelete) {
  if (typeof obj !== "object" || obj === null) {
    return;
  }

  for (let key in obj) {
    if (key === keyToDelete) {
      delete obj[key];
    } else {
      deleteKey(obj[key], keyToDelete);
    }
  }
}


const data = {
  a: 1,
  b: {
    a: 2,
    c: {
      a: 3
    }
  }
};

deleteKey(data, "c");
console.log(data);

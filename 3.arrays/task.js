function compareArrays(arr1, arr2) {
  if(arr1.length >= arr2.length) {
    return arr1.every((element, index) => element === arr2[index]);
  } else {
    return arr2.every((element,index) => element === arr1[index]);
  }
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter((tmp) => tmp.gender === gender).map(element => element.age).reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length -1) {
        return acc / arr.length;
    } 
    return acc;
  }, 0);
  return result;
}
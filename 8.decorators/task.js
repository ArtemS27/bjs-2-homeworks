//Задача № 1
function cachingDecoratorNew(func) {
    const cashe = [];
  
    function wrapper(...args) {
        const hash = md5(args);
        let objectInCashe = cashe.find((item) => item.hash === hash);
        if (objectInCashe) {
            console.log("Из кеша: " + objectInCashe.result);
            return "Из кеша: " + objectInCashe.result;
        }
        let result = func(...args);
        cashe.push({hash, result});
        if (cashe.length > 5) {
            cashe.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result; 
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    wrapper.allCount++;
    
    if (timeoutId) {
        clearTimeout(timeoutId);
    } else {
        func(args);
        wrapper.count++;
    }
    timeoutId = setTimeout(() => {
        func(args);
        wrapper.count++;
    }, delay);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}

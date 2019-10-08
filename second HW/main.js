function promiseReduce(asyncFunctions, reduce, initialValue = 0) {
  let promise = Promise.resolve(initialValue);
  asyncFunctions.forEach(
    element => {
      promise = promise.then(
        async sum => {
          try {
            return reduce(sum, await element());
          } catch (err) {
            console.log(err);
            return sum;
          }
        }
      )
    }
  );
  return promise;
}

const fn1 = () => {
  console.log('fn1');
  return Promise.resolve(1);
};

const fn2 = () => new Promise(resolve => {
  console.log('fn2');
  setTimeout(() => resolve(2), 1500);
});

const fn3 = () => new Promise(() => {
  console.log('fn3');
  throw new Error('err');
});

promiseReduce(
  [fn1, fn2, fn3],
  function(memo, value) {
    console.log('reduce');
    return memo * value;
  },
  4,
).then(console.log); 
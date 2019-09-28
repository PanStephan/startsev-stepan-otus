function sum() {
  let sum = 0;
  // closure for save sum value
  return ( value ) => {
    // check value type. We can write this part of the code without 'return' but I think It's easy to read with it. Is it correct ?
    if ( typeof value == 'number' ) {
      return sum += value;
    } else if( value == undefined && typeof value !== 'object' ) {
      return console.log( sum );
    } else return 0;
  }
}

// workability
const getSum = sum();
getSum(1);
getSum('Otus');
getSum(null);
getSum({});
getSum(Symbol('1'));
getSum(true);
getSum(1);
getSum(3);
getSum(sum());

// Is it correct for HW ?
getSum(undefined);
getSum();



function sum( value ) {
  let currentSum = value;
  // closure for save sum value
  function getValue( value ) {
    // check value type. We can write this part of the code without 'return' but I think It's easy to read with it. Is it correct ?
    if ( typeof value === 'number' ) {
      currentSum += value;
    } else if( value === undefined && typeof value !== 'object' ) {
       console.log( currentSum );
    };
    return getValue;
  }
  return getValue;
}

sum(1)('Otus')(null)(4)(2)();
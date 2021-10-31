export function currencyFormat(num: number) {
  return 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function comparePriceInc( a: any, b: any ) {
  if ( Number(a.price) < Number(b.price) ){
    return -1;
  }
  if ( Number(a.price) > Number(b.price) ){
    return 1;
  }
  return 0;
}

export function comparePriceDec( a: any, b: any ) {
  if ( Number(a.price) < Number(b.price) ){
    return 1;
  }
  if ( Number(a.price) > Number(b.price) ){
    return -1;
  }
  return 0;
}
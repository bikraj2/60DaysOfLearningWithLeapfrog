function detectType(val: number | string): string {
  if (typeof val === 'string') {
    return 'String';
  } else return 'Number';
}

function productId(id: string | null) {
  if (!id) {
    console.log('No id was given');
  }
  console.log('The id is ' + id);
}
function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    for (const s of strs ?? []) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // do nothing
  }
}

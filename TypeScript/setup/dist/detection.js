"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return 'String';
    }
    else
        return 'Number';
}
function productId(id) {
    if (!id) {
        console.log('No id was given');
    }
    console.log('The id is ' + id);
}
function printAll(strs) {
    if (typeof strs === 'object') {
        for (const s of strs !== null && strs !== void 0 ? strs : []) {
            console.log(s);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
        // do nothing
    }
}

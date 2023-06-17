"use strict";
function isAdmin(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
    else {
        return false;
    }
}

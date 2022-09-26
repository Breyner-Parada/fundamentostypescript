"use strict";
(() => {
    function greeting(userId) {
        if (typeof userId === 'string') {
            console.log(`string: ${userId.toLowerCase()}`);
        }
    }
    let shirtSize;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'S';
})();

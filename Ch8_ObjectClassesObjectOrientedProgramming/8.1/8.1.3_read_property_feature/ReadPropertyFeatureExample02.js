let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017
    },

    edition: {
        value: 1
    },

    year: {
        get: function() {
            return this.year_;
        },

        set: function(newValue) {
            if (newValue > 2017) {
                this.year = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

console.log(Object.getOwnPropertyDescriptors(book));

// {
//     year_: {
//         value: 2017,
//         writable: false,
//         enumerable: false,
//         configurable: false
//     },
//     edition: { value: 1, writable: false, enumerable: false, configurable: false },
//     year: {
//         get: [Function: get],
//         set: [Function: set],
//         enumerable: false,
//         configurable: false
//     }
// }
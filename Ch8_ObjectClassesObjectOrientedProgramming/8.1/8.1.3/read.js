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
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
console.log(descriptor.value); // 2017
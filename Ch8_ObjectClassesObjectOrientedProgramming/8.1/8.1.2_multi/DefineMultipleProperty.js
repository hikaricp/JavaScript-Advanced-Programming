let book = {};
Object.defineProperties(book, {
    year_: {
        writable: true, // 可修改
        value: 2017
    },

    edition: {
        writable: true, // 可修改
        value: 1
    },

    year: {
        get() {
            return this.year_;
        },

        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

book.year = 2018;
console.log(book.year_)
console.log(book.edition);
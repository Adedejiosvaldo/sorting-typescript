"use strict";
// Bubble Sort
//Bubble Scaffolfing
//Buble implementation
// Type guard
// Type Guard -> 2 : i) Type of : Uaed in primitive data type
// ii) Used for any type of values that is not a string,boolean or number
class Sorter {
    //collection: number[];
    constructor(collection) {
        this.collection = collection;
    }
    //Sorting function
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //Type guard
                if (this.collection instanceof Array) {
                    //Instance of : Used to find thetype of complex object
                    // Only works if collection is nimber[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftSide = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftSide;
                    }
                }
                // only work if collection is string
                if (typeof this.collection === "string") {
                    // typeof works only with primitive type : number,string,boolean and string
                }
            }
        }
    }
}
const sorter = new Sorter([1, -5, -3, 6, 7]);
sorter.sort();
console.log(sorter.collection);

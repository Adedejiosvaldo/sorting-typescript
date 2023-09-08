"use strict";
// Bubble Sort
//Bubble Scaffolfing
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
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftSide = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftSide;
                }
            }
        }
    }
}
const sorter = new Sorter([1, -5, 3]);
sorter.sort();
console.log(sorter.collection);

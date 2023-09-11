export class NumberCollection {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}

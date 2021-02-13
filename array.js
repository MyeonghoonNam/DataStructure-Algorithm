'use strict'
class MyArray {
  constructor(){
    this.length = 0;
    this.data = [];
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    
    return this.length;
  }

  pop() {
    const deleteItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;

    return deleteItem;
  }

  delete(index) {
    const item = this.data[index];
    console.log("Delete Item : " + item);

    this.shiftItem(index);
  }

  shiftItem(index){
    for(let i = index; i<this.length; i++){
      this.data[i] = this.data[i+1];
    }

    delete this.data[this.length-1];
    this.length--;
  }
}

let Array = new MyArray();
Array.push(1);
Array.push(2);
Array.push(3);
console.log(Array);
Array.pop();
console.log(Array);
Array.push(3);
console.log(Array);
Array.delete(1);
console.log(Array);



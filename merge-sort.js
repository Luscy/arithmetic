// merge sort arithmetic
// @example
// mergeSort() sort by smallest
// mergeSort([1,8,5,3])  -> [1,3,5,8]
function merge(left, right, arr) {
  var i = 0;

 // compare the first number in arrays and sort the smallest 
  while (left.length && right.length) {
    arr[i++] = (right[0] < left[0]) ? right.shift() : left.shift();
  }
  while (left.length) {
    arr[i++] = left.shift();
  }
  while (right.length) {
    arr[i++] = right.shift();
  }
}

// split array to the different sides until less than 1 number
function mSort(arr, tmp, len) {
  if (len === 1) { return; }
 
  var middle = Math.floor(len / 2);
  var tmpLef = tmp.slice(0, middle);
  var tmpRig = tmp.slice(middle);

  mSort(tmpLef, arr.slice(0, middle), middle);
  mSort(tmpRig, arr.slice(middle), len - middle);
  merge(tmpLef, tmpRig, arr);
}

function mergeSort(arr) {
  mSort(arr, arr.slice(), arr.length);
}

var arr = [5, 5, 7, 9, 1, 2, 7, 10];
mergeSort(arr);
console.log(arr); //[1, 2, 5, 5, 7, 7, 9, 10]
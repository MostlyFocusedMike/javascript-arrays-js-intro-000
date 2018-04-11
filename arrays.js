chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  new_arr = array.slice()
  new_arr.unshift(element)
  return new_arr
}
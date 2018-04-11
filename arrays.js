chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  new_arr = array.slice()
  return new_arr.unshift(element)
}
chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  new_arr = array.slice()
  new_arr.unshift(element)
  return new_arr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  new_arr = array.slice()
  new_arr.unshift(element)
  return new_arr
}
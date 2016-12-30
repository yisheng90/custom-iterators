// _ForEach

function show (elm, index, arr) {
  return (elm * index * arr.length)
}

function _forEach (arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    console.log(callback(arr[i], i, arr))
  }
}

_forEach([1, 2, 3], show)

// _map
function _map (arr, callback) {
  var arr1
  for (var i = 0; i < arr.length; i++) {
    arr1 = arr.map(function () {
      return callback(arr[i], i, arr)
    })
  }
  return arr1
}

console.log(_map([1, 2, 3], show))

// _reduce
function _reduce (arr, callback, sum) {
  if (sum === undefined) {
    sum = 0
  }

  arr.forEach(function (elm) {
    sum = callback(sum, elm)
  })

  console.log(sum)
}

function calcSum (sum, elm) {
  return sum + elm
}

_reduce([1, 2, 3], calcSum, 1)
_reduce([1, 2, 3], calcSum)

// _filter
function _filter (arr, callback) {
  var arr1 = []
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      arr1.push(arr[i])
    }
  }
  console.log(arr1)
}

function moreThan5 (elm, index, arr) {
  if (elm > 5) {
    return true
  } else {
    return false
  }
}

_filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], moreThan5)

// _every
function _every (arr, callback) {
  var status = false
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === false) {
      break
    } else {
      status = true
    }
  }

  return status
}

console.log(_every([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], moreThan5))
console.log(_every([8, 9, 10], moreThan5))

const { v4: uuidv4 } = require('uuid')

function getArrOfID(size) {
  const arr = []
  for (let i = 0; i < size; i++) {
    arr.push({ id: uuidv4() })
  }
  return arr
}

console.log(getArrOfID(6))

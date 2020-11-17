const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let object1 = array.find(object => object.result === "W")
  console.log(object1)
  if (object1) {
    return object1.year
  } else {
    return object1
  }
}
const ArrayBasics = () => {
  console.log('============= Welcome to Array: Array Basics =============')

  // Task: create an empty array with length 10, fill all 5s
  const emptyArray = new Array(10)
  emptyArray.fill(5)
  console.log(`Task 1: ${emptyArray}`)

  // declaring an array
  const arrayUnderTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // get Last element
  const length = arrayUnderTest.length
  console.log(`Last Element: ${arrayUnderTest[length - 1]}`)

  // loop over an array
  arrayUnderTest.forEach((item, index, array) => {
    // here array passed as argument is reference to arrayUnderTest, so on changing array we change arrayUnderTest
    console.log(item, index, array)
  })

  // add to end of array
  // 2 ways -
  arrayUnderTest.push(20)
  console.log(`push ${arrayUnderTest}`)

  const arrayUnderTestModified = [...arrayUnderTest, 30]
  console.log(`Add to end of array ES6 - ${arrayUnderTestModified}`)

  // remove from end
  arrayUnderTest.pop(20)
  console.log(`After pop: ${arrayUnderTest}`)
  arrayUnderTest.splice(arrayUnderTest.length - 1, 1)
  console.log(`After slicing last element: ${arrayUnderTest}`)

  // Remove first element from array
  arrayUnderTest.shift()
  console.log(`After shift ${arrayUnderTest}`)
  arrayUnderTest.unshift(1)

  // add to start of array
  // 2 ways -
  arrayUnderTest.unshift(40)
  console.log(`push ${arrayUnderTest}`)

  const arrayUnderTestModifiedStart = [50, ...arrayUnderTest]
  console.log(`Add to start of array ES6 - ${arrayUnderTestModifiedStart}`)

  // find element in array
  console.log(`index of 6 in array : ${arrayUnderTest.indexOf(6)}`)
  // last index of multiple occuring elements
  arrayUnderTest.push(7)
  console.log(
    `last occurence index of 7 is ${arrayUnderTest.lastIndexOf(
      7
    )} and first occurence index of 7 is ${arrayUnderTest.indexOf(7)}`
  )

  // shallow copy
  console.log(`shallow copy of arrayUnderTest is ${arrayUnderTest.slice()}`)

  console.log('======================== complete ========================')
}

ArrayBasics()

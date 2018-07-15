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

  // if you just want to know if element exists in array
  console.log(`is 6 in array ? ${arrayUnderTest.includes(6)}, is 100 in array ? ${arrayUnderTest.includes(100)}`)

  // Iteration Methods
  const iterator = arrayUnderTest.entries()
  console.log('sets of elements with index')
  console.log(iterator.next().value)
  console.log(iterator.next().value)
  console.log(iterator.next().value)

  // returns true if every element satisfies the condition
  // condition
  const isElementPositive = elem => elem > 0
  console.log(`are all elements positive ? ${arrayUnderTest.every(isElementPositive)}`)

  // Filter
  // remove all 7s from array
  console.log(`Before: ${arrayUnderTest}`)
  console.log(`After: ${arrayUnderTest.filter(elem => elem !== 7)}`)

  // map
  const arrayUnderTestAdd2 = arrayUnderTest.map(elem => elem + 2)
  console.log(`After adding 2 to all elems: ${arrayUnderTestAdd2}`)

  // reduce
  const result = arrayUnderTest.reduce((acc, elem) => {
    return acc + elem
  }, 0)
  console.log(`sum of elems: ${result}`)

  // some
  const resultSome = arrayUnderTest.some((value, index, array) => {
    return value === 6
  })
  console.log(`Atleast one value is 7 ${resultSome}`)

  // sort with custom comparison
  const arrayUnderTestComparison = [{ sum: 40 }, { sum: 50 }, { sum: 60 }, { sum: 70 }, { sum: 10 }]
  const comparator = (item1, item2) => item1.sum > item2.sum

  const resultSorted = arrayUnderTestComparison.sort(comparator)
  console.log(resultSorted)

  console.log('======================== complete ========================')
}

ArrayBasics()

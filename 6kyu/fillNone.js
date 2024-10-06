/*

Fill None

Description:
Task

Write a function that accepts a list that can contain missing data, and an integer representing the method on how to fill the missing data if there is any. Missing data is represented as None. The list will only contain integers and None values.

Note that depending on the language you attempt this kata with, None corresponds to:

    None (Python)
    undefined (Javascript)

The fill method rules are outlined below:

Fill method: 
  -1: backwards 
   0: nearest      
   1: forwards
  

Example

arr = [None, 1, None, None, None, 2, None]

fill(arr, -1) == [1, 1, 2, 2, 2, 2, None]  # None replaced by closest int on the right
fill(arr,  0) == [1, 1, 1, 1, 2, 2, 2]     # None replaced by closest int. If equidistant, choose the smallest int
fill(arr,  1) == [None, 1, 1, 1, 1, 2, 2]  # None replaced by closest int on the left

Notes

    [] should return []
    [None] should return [None]
    Arrays will only contain integers and None values

*/

function fill(arr, method = 0) {
  if (arr.length === 0
      || (arr.length === 1
          && arr[0] === undefined)) {
    return arr
  }
  
  switch(method) {
      case -1:
        return backwardsFill(arr)
      case 0:
        return nearestFill(arr)
      case 1:
        return forwardsFill(arr)
  }
  
  function backwardsFill(arr) {
    let originalArr = [...arr]
    for (let i = 0; i < originalArr.length; i++) {
      if (originalArr[i] !== undefined) {
        continue
      }
      
      let offsetIndex = i + 1
      
      while (offsetIndex !== arr.length) {
        if (originalArr[offsetIndex] === undefined) {
          offsetIndex++
          continue
        }
        
        arr[i] = originalArr[offsetIndex]
        break
      }
    }
    
    return arr
  }
  
  function nearestFill(arr) {
    let originalArr = [...arr]
    for (let i = 0; i < originalArr.length; i++) {
      if (originalArr[i] !== undefined) {
        continue
      }
      
      let forwardOffsetIndex = i + 1
      let backwardsOffsetIndex = i - 1
      
      let backwardsNumber = null
      let forwardsNumber = null
      
      while (forwardOffsetIndex < originalArr.length || backwardsOffsetIndex >= 0) {
        backwardsNumber = originalArr[backwardsOffsetIndex]
        backwardsOffsetIndex--
        
        forwardsNumber = originalArr[forwardOffsetIndex]
        forwardOffsetIndex++
        
        if (backwardsNumber != null && forwardsNumber != null) {
          arr[i] = backwardsNumber > forwardsNumber
            ? forwardsNumber
            : backwardsNumber
          break
        }
        
        if (backwardsNumber != null) {
          arr[i] = backwardsNumber
          break
        }
        
        if (forwardsNumber != null) {
          arr[i] = forwardsNumber
          break
        }
      }
    }
    
    return arr
  }
  
  function forwardsFill(arr) {
    let originalArr = [...arr]
    for (let i = originalArr.length - 1; i >= 0; i--) {
      if (originalArr[i] !== undefined) {
        continue
      }
      
      let offsetIndex = i - 1
      
      while (offsetIndex !== -1) {
        if (originalArr[offsetIndex] === undefined) {
          offsetIndex--
          continue
        }
        
        arr[i] = originalArr[offsetIndex]
        break
      }
    }
    
    return arr
  }
}

export const isAlphaNum = char => /[a-zA-Z0-9]/.test(char)

export const hasSubsequentCapitals = word => {
  let hasCapitals = false
  word.split('').map((char, index) => {
    if (index > 0 && char === char.toUpperCase()) {
      hasCapitals = true
    }
  })
  return hasCapitals
}
// takes array of single-character strings ['a', 'b', ')']
// returns the index of the firs non-alphanum character, or 0
export const nextNonAlphaNumIndex = chars => {
  let indices = []
  chars.map((char, index) => {
    if (!isAlphaNum(char)) {
      indices.push(index)
    }
  })
  return indices[0] || 0
}
// takes array of characters eg:
// [ 'G','o','P','r','o','s',')']
// joins the next word (after the index) based on the first-found special character
export const getCurrentWordFromChars = (chars, index) => {
  const currentWord = chars.slice(index, index + nextNonAlphaNumIndex(chars.slice(index))).join('')
  return currentWord
}

export const sentenceCaseString = str => {
  return str.split('').map((char, index, arr) => {
    // dont lowerCase first letter
    if (index > 0) {
      const currentWord = getCurrentWordFromChars(arr, index)

      const shouldCharBeLowered = isAlphaNum(char) && !isAlphaNum(arr[index - 1]) && !hasSubsequentCapitals(currentWord)

      // convert any letters after spaces or special characters
      if (shouldCharBeLowered) {
        // join current word into a string
        return char.toLowerCase()
      }
      return char
    }
    return char.toUpperCase()
  }).join('')
}

export const sentenceCaseAllNested = arg => {
  if (typeof (arg) === 'string') {
    return sentenceCaseString(arg)
  }
  return arg.map(str => sentenceCaseAllNested(str))
}

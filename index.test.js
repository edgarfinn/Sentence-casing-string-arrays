import {
  isAlphaNum,
  sentenceCaseString,
  hasSubsequentCapitals,
  nextNonAlphaNumIndex,
  getCurrentWordFromChars,
  sentenceCaseAllNested
} from './index.js'

import {
  titleCaseCategories,
  sentenceCaseCategories
} from './testCategories.js'

describe('isAlphaNum', () => {
  it('returns true when passed a letter string', () => {
    expect(isAlphaNum('A')).toBe(true)
    expect(isAlphaNum('b')).toBe(true)
  })
  it('returns true when passed a number string', () => {
    expect(isAlphaNum('1')).toBe(true)
  })
  it('returns false when passed any non alphanumeric strings', () => {
    expect(isAlphaNum('[]')).toBe(false)
    expect(isAlphaNum(' ')).toBe(false)
    expect(isAlphaNum('<')).toBe(false)
    expect(isAlphaNum('"')).toBe(false)
  })
})

describe('getCurrentWordFromChars', () => {
  const chars = 'All Cameras (Including GoPros)'.split('')
  it('returns word from array correctly according to index', () => {
    expect(getCurrentWordFromChars(chars, 23)).toBe('GoPros')
  })
})

describe('hasSubsequentCapitals', () => {
  it('identifies subsequent capitals', () => {
    expect(hasSubsequentCapitals('GoPro')).toBe(true)
    expect(hasSubsequentCapitals('DSLR')).toBe(true)
    expect(hasSubsequentCapitals('Photography')).toBe(false)
  })
})

describe('nextNonAlphaNumIndex', () => {
  it('returns the index of the next special character in an array', () => {
    expect(nextNonAlphaNumIndex(['S', 'i', 'z', 'e', ')'])).toBe(4)
    expect(nextNonAlphaNumIndex(['S', 'i', 'z', ' ', ')'])).toBe(3)
    expect(nextNonAlphaNumIndex(['a', 'b', '<', 'C', ')'])).toBe(2)
    expect(nextNonAlphaNumIndex(['a', 'b', 'C', 'D'])).toBe(0)
  })
})

describe('sentenceCaseString', () => {
  it('converts a title-case string to sentencase case', () => {
    expect(sentenceCaseString('This Is A String')).toBe('This is a string')
  })
  it('converts a lower-case string to sentence case', () => {
    expect(sentenceCaseString('lower case sentence')).toBe('Lower case sentence')
  })
  it('converts words in brackets appropriately', () => {
    expect(sentenceCaseString('Large Venues (<Medium Size)')).toBe('Large venues (<medium size)')
  })
  it('doesnt affect brand names or initials', () => {
    expect(sentenceCaseString('All Cameras (Including GoPros)')).toBe('All cameras (including GoPros)')
    expect(sentenceCaseString('DSLR Cameras')).toBe('DSLR cameras')
    expect(sentenceCaseString('All PA Systems')).toBe('All PA systems')
  })
})

const titledStrings = [
  'This Is A Title Case String',
  'Large Venues (>Medium Size)',
  'this is a lower case string',
  'this Is A Random case string',
  'All Cameras (Including GoPros)'
]

const sentencedStrings = [
  'This is a title case string',
  'Large venues (>medium size)',
  'This is a lower case string',
  'This is a random case string',
  'All cameras (including GoPros)'
]

describe('sentenceCaseAllNestedStrings', () => {
  it('processes a string appropriately', () => {
    expect(sentenceCaseAllNested('This Is A Title Case String')).toEqual('This is a title case string')
  })
  it('processes arrays of strings appropriately', () => {
    expect(sentenceCaseAllNested(titledStrings)).toEqual(sentencedStrings)
  })
  it('converts all nested strings appropriately', () => {
    expect(sentenceCaseAllNested(titleCaseCategories)).toEqual(sentenceCaseCategories)
  })
})

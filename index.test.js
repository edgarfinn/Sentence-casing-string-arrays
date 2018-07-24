import {
  sentenceCaseString,
  sentenceCaseArrayOfStrings,
  hasSubsequentCapitals,
  nextNonAlphaNumIndex,
  getCurrentWordFromChars
} from './index.js'

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

describe('sentenceCaseArrayOfStrings', () => {
  const strings = [
    'This Is A Title Case String',
    'Large Venues (>Medium Size)',
    'this is a lower case string',
    'this Is A Random case string',
    'All Cameras (Including GoPros)'
  ]

  const expected = [
    'This is a title case string',
    'Large venues (>medium size)',
    'This is a lower case string',
    'This is a random case string',
    'All cameras (including GoPros)'
  ]

  it('converts an array of lowercase strings correctly', () => {
    expect(sentenceCaseArrayOfStrings(strings)).toEqual(expected)
  })
})

import { describe, test, expect } from 'vitest'
import { capitalize } from '../src/helpers/capitalize'

describe('Capitalize test', () => {
  test('should return first char to uppercase', () => {
    const word = 'word'
    expect(capitalize(word)).toEqual('Word')
    expect(capitalize(word)).not.toEqual('word')
  })
})

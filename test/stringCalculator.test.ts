import { describe, it, expect } from 'vitest'
import { add } from '../src/stringCalculator.ts'

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0)
  })

  it('should return the number itself if string has one number', () => {
    expect(add('1')).toBe(1)
  })

  it('should sum two numbers', () => {
    expect(add('1,2')).toBe(3)
  })
}) 
{
  double
} = require '../app/scripts/math'


describe 'math', ->
  it 'can double', ->
    expect(double(42)).toBe 84

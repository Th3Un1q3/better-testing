# Why do scientists test first?

## Background
I want to design multiverse explorer that is safe for children, and does not allow to explore adult parallel universes.

## Explore
Visit `01 - hello word/red-green-refactor/say-hello-to-tdd.spec.js`.
* Can you find what's wrong with this test?
* What was done right in the test?
* How it can be improved?
* How author could avoid making same mistakes?
* What is the code path?
* How to reduce count of tests to cover all code paths?
* What is appropriate application for snapshot testing?

## What was learned?
* Red Green Refactor
* Code Path
* [Child Test Pattern](../patterns/child-test.md)

# Why does knowing your tools matter?

## Background
I want to be sure that grandpa Rick
gets drunk in his usual manner(after he takes two sips). 
I wrote a test for examining it.

## Explore
`01 - hello word/test-tool/grandpa.spec.js`
* What condition [boundary is](https://www.google.com/search?q=boundary+conditions+in+software+testing)?
* Was the boundary tested correctly?
* What is the purpose of test name?
* What happen if we change tests order?
* How to make the test more reliable?

## What was learned?
* [Snapshot testing](https://jestjs.io/docs/en/snapshot-testing)
* [Jest execution life-cycle](https://jestjs.io/docs/en/setup-teardown)
* [Isolated Test Pattern](../patterns/isolated-test.md)

## Bonus

Can you say what will be in the console if I run `01 - hello word/test-tool/explore-sequence.spec.js`
* Why it's important to understand test execution sequence?

# Why does practice matter?

Write `inRange` function that accepts a number low and high border of the range.

Try to strictly follow red green refactor pattern.

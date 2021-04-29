'use strict'

const {test, threw} = require('tap')
const {typeOf} = require('../../../lib/commit.js')

test('commit#typeOf', async (t) => {
  t.equal(
    typeOf('build')
  , 'Build System'
  , 'build -> Build System'
  )

  t.equal(
    typeOf('chore')
  , 'Chores'
  , 'chore -> Chores'
  )

  t.equal(
    typeOf('ci')
  , 'Continuous Integration'
  , 'ci -> Continuous Integration'
  )

  t.equal(
    typeOf('doc')
  , 'Documentation'
  , 'doc -> Documentation'
  )

  t.equal(
    typeOf('feat')
  , 'Features'
  , 'feat -> Features'
  )

  t.equal(
    typeOf('fix')
  , 'Bug Fixes'
  , 'fix -> Bug Fixes'
  )

  t.equal(
    typeOf('lint')
  , 'Lint'
  , 'lint -> Lint'
  )

  t.equal(
    typeOf('perf')
  , 'Performance Improvements'
  , 'perf -> Performance Improvements'
  )

  t.equal(
    typeOf('refactor')
  , 'Code Refactoring'
  , 'refactor -> Code Refactoring'
  )

  t.equal(
    typeOf('revert')
  , 'Reverts'
  , 'revert -> Reverts'
  )

  t.equal(
    typeOf('style')
  , 'Style'
  , 'style -> Style'
  )

  t.equal(
    typeOf('test')
  , 'Tests'
  , 'test -> Tests'
  )

  t.equal(
    typeOf('unknown')
  , 'Miscellaneous'
  , 'unknown -> Miscellaneous'
  )

  t.equal(
    typeOf('foobar')
  , 'Miscellaneous'
  , 'foobar -> Miscellaneous'
  )
}).catch(threw)


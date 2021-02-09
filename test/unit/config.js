'use strict'

const {test, threw} = require('tap')
const config = require('../../index.js')

function sortByType(a, b) {
  return a.type < b.type ? -1 : 1
}

test('release-config-logdna', async (t) => {
  const plugins = config.plugins.map((plugin) => {
    return plugin[0]
  })

  t.strictEqual(config.npmPublish, true, 'npmPublish = true by default')
  t.match(config.parserOpts, {
    noteKeywords: ['BREAKING CHANGES', 'BREAKING CHANGE', 'BREAKING']
  , headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/
  , headerCorrespondence: ['type', 'scope', 'subject']
  , issuePrefixes: ['#', 'gh-']
  , referenceActions: [
      'close', 'closes', 'closed', 'fix'
    , 'fixes', 'fixed', 'resolve', 'resolves'
    , 'resolved', 'ref'
    ]
  }, 'default commit parser options')

  t.deepEqual(config.releaseRules.sort(sortByType), [
    {type: 'build', release: 'patch'}
  , {type: 'ci', release: 'patch'}
  , {type: 'chore', release: 'patch'}
  , {type: 'doc', release: 'patch'}
  , {type: 'feat', release: 'minor'}
  , {type: 'fix', release: 'patch'}
  , {type: 'lib', release: 'patch'}
  , {type: 'perf', release: 'minor'}
  , {type: 'refactor', release: 'patch'}
  , {type: 'style', release: 'patch'}
  , {type: 'test', release: 'patch'}
  ].sort(sortByType), 'expected default release rules')

  t.deepEqual(plugins, [
    '@semantic-release/commit-analyzer'
  , '@semantic-release/release-notes-generator'
  , '@semantic-release/changelog'
  , '@semantic-release/npm'
  , '@semantic-release/git'
  , '@semantic-release/github'
  ], 'expected default plugins')
}).catch(threw)


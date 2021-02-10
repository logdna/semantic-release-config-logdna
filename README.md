## semantic-release-config-logdna

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Semantic Release shareable configuration for logdna node packages 

Baseline shareable semantic-release configuration for logdna node packages.
This configuration pre-configures the commits parser and release notes.

The shareable configuration can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

### Installation

```shell
$ npm install --save-dev semantic-release semantic-release-config-logdna
```

```json
// package.json
{
  "release": {
    "branches": ["main"],
    "extends": "semantic-release-config-logdna"
  }
}
```

## Features

* Parse un-merged commits to determine next release version
  * The version number is dictated by the commit with the highest semver level
* Increments the version of `package.json`
* Generates + updates Changelog
  * Includes github issue links for defined issue Keys (`close`, `closes`, `closed`, `fix`, `fixes`, `fixed`, `resolve`, `resolves`, `resolved`, `ref`)
  * Includes links to commit sha
  * Organizes changes by type
* Commits standardized `release` commit back upstream


### Commit Types

| Commit Type | Changelog Category       |
|-------------|--------------------------|
| `feat`      | Features                 |
| `fix`       | Bug Fixes                |
| `perf`      | Performance Improvements |
| `revert`    | Reverts                  |
| `doc`       | Documentation            |
| `refactor`  | Code Refactoring         |
| `test`      | Tests                    |
| `build`     | Build System             |
| `ci`        | Continuous Integration   |
| `chore`     | Chores                   |
| `<default>` | Miscellaneous            |

## Authors

* [**LogDNA Inc.**](mailto:help@logdna.com) &lt;help@logdna.com&gt;


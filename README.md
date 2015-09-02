# gh-repo-to-user

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Get GitHub username from a repo, accepting repos like [package.json\'s repository field](https://docs.npmjs.com/files/package.json#repository)

## Installation

Install `gh-repo-to-user` using [npm](https://www.npmjs.com/):

```bash
npm install --save gh-repo-to-user
```

## Usage

### Module usage

```javascript
var ghRepoToUser = require('gh-repo-to-user');

ghRepoToUser('joakimbeng/repo');
// "joakimbeng"
ghRepoToUser({type: 'git', url: 'https://github.com/joakimbeng/repo.git'});
// "joakimbeng"
```

## API

### `ghRepoToUser(repo)`

| Name | Type | Description |
|------|------|-------------|
| repo | `String|Object` | The repository to get GitHub username from |

Returns: `String` or `NULL` if not found.

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/gh-repo-to-user
[npm-image]: https://badge.fury.io/js/gh-repo-to-user.svg
[travis-url]: https://travis-ci.org/joakimbeng/gh-repo-to-user
[travis-image]: https://travis-ci.org/joakimbeng/gh-repo-to-user.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat

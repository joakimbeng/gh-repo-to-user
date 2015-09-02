'use strict';
var isPlainObject = require('is-plain-object');

var GH_REGEXP = /github.com\/([^\/]+)\//;

module.exports = function ghRepoToUser(repo) {
	if (typeof repo === 'string') {
		return getUsername(repo);
	} else if (isPlainObject(repo) && typeof repo.url === 'string') {
		return getUsername(repo.url);
	}
	throw new TypeError('Expected a string or an {type, url: String} object');
};

function getUsername(str) {
	if (str.indexOf(':') === -1 && str.indexOf('/') !== -1) {
		return str.split('/')[0];
	}
	var match = GH_REGEXP.exec(str);
	return match && match[1];
}

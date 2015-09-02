'use strict';
var test = require('ava');
var username = require('../src');

test('<username>/<repo> string', function (assert) {
	var actual = username('joakimbeng/repo');
	assert.is(actual, 'joakimbeng');
	assert.end();
});

test('weird string', function (assert) {
	var actual = username('joakimbeng');
	assert.is(actual, null);
	assert.end();
});

test('bitbucket:<username>/<repo> string', function (assert) {
	var actual = username('bitbucket:joakimbeng/repo');
	assert.is(actual, null);
	assert.end();
});

test('https://github.com/<username>/<repo>.git string', function (assert) {
	var actual = username('https://github.com/joakimbeng/repo.git');
	assert.is(actual, 'joakimbeng');
	assert.end();
});

test('git+https://github.com/<username>/<repo>.git string', function (assert) {
	var actual = username('git+https://github.com/joakimbeng/repo.git');
	assert.is(actual, 'joakimbeng');
	assert.end();
});

test('{type, url} object', function (assert) {
	var actual = username({type: 'git', url: 'https://github.com/joakimbeng/repo.git'});
	assert.is(actual, 'joakimbeng');
	assert.end();
});

test('{type, url} object other service', function (assert) {
	var actual = username({type: 'git', url: 'https://bitbucket.org/joakimbeng/repo.git'});
	assert.is(actual, null);
	assert.end();
});

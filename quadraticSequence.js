#!/usr/bin/node

console.log('start');

function *sequence(q, count) {
	"use strict";
	let array = [];
	let a = yield;
	for (let i = 0;i < count;i++) {
		array.push(a);
		a = yield a * q;
	}
	return array.join(',');
}

function start() {
	"use strict";
	let an, nextAn = 1;
	const sequenceGenerator = sequence(process.argv[2], process.argv[3]);
	let n = 1;
	do {
		an = sequenceGenerator.next(nextAn);
		nextAn = an.value || nextAn;
		console.log('a' + n, nextAn);
		n++;
	} while (!an.done);
}

start();

console.log('end');

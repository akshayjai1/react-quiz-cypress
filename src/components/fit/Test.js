import React, { useEffect, useState, useCallback, useRef } from 'react';
// [funcion, print]
export const Test = () => {
	const [ count, setCounter ] = useState(0);
	// const [ count, setCounter ] = useState({ val: 0 });
	const countRef = useRef({ val: 0 });
	const printWhenUnmount = useCallback(
		() => {
			console.log('bye world with counter = ', count);
			// console.log('bye world with counter = ', countRef.current.val);
		},
		[ count ]
	);
	useEffect(
		() => {
			countRef.current.val = count;
			// countRef.current.val = countRef.current.val + 1;
		},
		[ count ]
	);
	useEffect(() => {
		// console.log('world - count', count);
		console.log('hello world, counter = ', count);
		return () => {
			// console.log('world count', count);
			printWhenUnmount();
		};
	}, []);
	var onCli = () => {
		setCounter((count) => count + 1);
	};
	// var onCli = () => {
	// 	setCounter((count) => ({ val: count.val + 1 }));
	// };
	useEffect(
		() => {
			printWhenUnmount();
		},
		[ count ]
	);

	return (
		<div>
			Test component<div>
				Count: {count} <button onClick={onCli}>Increment Counter </button>
			</div>
		</div>
	);
};
// // const printWhenUnmount = () => {
// // 	console.log('bye world with counter = ', count);
// // };
// const [ refd, setRefd ] = useState({});
// const countRef = useRef({});
// const printRefState = useCallback((data) => {
// 	console.log('bye world', refd.count);
// 	// console.log('bye world, ', data.current.count);
// }, []);
// useEffect(
// 	() => {
// 		countRef.current.count = count;
// 		refd.count = count;
// 	},
// 	[ count ]
// );
// useEffect(() => {
// 	return () => printRefState(countRef, refd);
// }, []);

/* 

function ab(){
var count = {val : 0};
var a1 = () =>{console.log('count',count);}; 
var a2 = ()=>{count.val = count.val+1};
a1();
a2();
return [a1,a2];
}

*/

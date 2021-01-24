import React, { useEffect, useState, useCallback, useRef } from 'react';
// [funcion, print]
export const Test = () => {
	const [ count, setCounter ] = useState(0);
	const [ refd, setRefd ] = useState({});
	const countRef = useRef({});
	// const printWhenUnmount = useCallback(
	// 	() => {
	// 		console.log('bye world with counter = ', count);
	// 	},
	// 	[ count ]
	// );
	// // const printWhenUnmount = () => {
	// // 	console.log('bye world with counter = ', count);
	// // };
	// useEffect(
	// 	() => {
	// 		console.log('hello world, counter = ', count);
	// 		return () => {
	// 			// printWhenUnmount(a);
	// 		};
	// 	},
	// 	[]
	// 	// [ printWhenUnmount ]
	// );
	const printRefState = useCallback((data) => {
		console.log('bye world', refd.count);
		// console.log('bye world, ', data.current.count);
	}, []);
	useEffect(
		() => {
			debugger;
			countRef.current.count = count;
			refd.count = count;
		},
		[ count ]
	);
	useEffect(() => {
		return () => printRefState(countRef, refd);
	}, []);

	return (
		<div>
			Test component<div>
				Count: {count}{' '}
				<button
					onClick={() => {
						setCounter((count) => count + 1);
					}}
				>
					Increment Counter{' '}
				</button>
			</div>
		</div>
	);
};

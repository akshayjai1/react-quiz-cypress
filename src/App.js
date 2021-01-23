import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useDispatch } from 'react-redux';

import { Heading, Wrapper, Title } from './components/styled/styled';
import { StyledButtons } from './components/styled/StyledButtons';
import { fetch } from './slices/hacker';
import { incrementAsync } from './slices/inc';
// import { getStocksAndInc } from "./reducers/quiz";
export const App = memo(function App({ j }) {
	const dispatch = useDispatch();
  
	const [ s, setS ] = useState(0);

	useEffect(
		() => {
			console.log('second');
			console.log(s);
			fh();
			console.log(s);
		},
		[ s ]
	);

	useEffect(
		() => {
			console.log('first');
		},
		[ s ]
	);
	console.log('render');
	const fh = useCallback(
		(e) => {
			console.log(s);
			// console.log(e.target.value);
		},
		[ s ]
	);
	const sh = (e) => {
		debugger;
		console.log(e.target.value);
	};
	const c = useMemo(
		() => {
			return <div>{s}</div>;
		},
		[ s ]
	);
	const a = <input type="text" placeholder="first" value={s} onChange={fh} />;
	const b = <input type="text" placeholder="second" onChange={sh} />;
	console.log(a);
	console.log(b);
	return (
		<div onClick={() => setS((s) => s + 1)}>
			{/* onClick={()=>setS(s=>s+1)}  */}
			{/* <Heading>
        Redux App <span>-Thunk - Saga - StyleComponents</span>
      </Heading> */}
			<Wrapper>
				<Title>
					Redux App <span>-Thunk - Saga - StyleComponents</span>
				</Title>
			</Wrapper>
			<StyledButtons />
			<Heading onClick={() => dispatch(fetch())} primary>
				redux action <span>button</span>
			</Heading>
			<Heading
				onClick={() => dispatch(incrementAsync())}
				// onClick={() => dispatch(getStocksAndInc())}
			>
				redux saga action
			</Heading>
			{a}
			{b}
			{c}
			<Child />
		</div>
	);
});

const Child = memo(({ children }) => {
	console.log('child');
	return (
		<div>
			Child{children}
			<GrandChild />
		</div>
	);
});
const GrandChild = () => {
	console.log('grandChild');
	return <div>GrandChild</div>;
};
/* import { CSSGrid } from './components/generic/CSSGrid';
export function App() {
  const dispatch = useDispatch();
  return (
    <div>
      { <Heading>
        Redux App <span>-Thunk - Saga - StyleComponents</span>
      </Heading> }
      <Wrapper>
        <Title>
          Redux App <span>-Thunk - Saga - StyleComponents</span>
        </Title>
      </Wrapper>
      <CSSGrid />
      <StyledButtons />
      <Heading onClick={() => dispatch(fetch())}>redux action</Heading>
      <Heading
        onClick={() => dispatch(incrementAsync())}
        // onClick={() =>
        //   dispatch({
        //     type: "INCREMENT_ASYNC",
        //   })
        // }
      >
        redux saga action
      </Heading>
    </div>
  );
}
 */
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import QuizWrapper from './components/quiz/QuizWrapper';
import Frame, { f } from './components/func/Frame';
import HOC from './components/hoc/HOC';
import HOC1 from './components/hoc/HOC1';
import { Test } from './components/fit/Test';

class App extends Component {
	state = { showTest: true };
	hideTest = () => {
		this.setState({ showTest: false });
	};
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.hideTest();
					}}
				>
					Hide Component
				</button>
				{/* <Frame title={'A Technology Quiz'} photo={1}>
					<Frame title={f} />

					{() => {
						console.log('abc');
						return <Frame title="child" />;
					}}
				</Frame> */}
				{this.state.showTest && <Test />}
				{/* {Frame({ title: "CAT", photo: "Cat Photo" })} */}

				{/* <HOC parentName={"Parent"} /> */}
				{/* <QuizWrapper /> */}
			</div>
		);
	}
}
export default App;

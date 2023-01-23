import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import QuizWrapper from './components/quiz/QuizWrapper'
import Frame, { f } from './components/func/Frame'
import HOC from './components/hoc/HOC'
import HOC1 from './components/hoc/HOC1'
import { Test } from './components/fit/Test'
import { ClassTest } from './components/fit/ClassTest'
import { Routes, Route, NavLink } from 'react-router-dom'
import { Editor } from './components/editor/Editor'
import { QCEditor } from './components/editor/QCEditor'
import { State } from './components/state/State'
const improve = false
class App extends Component {
  state = { showTest: true, val: 0 }
  hideTest = () => {
    this.setState({ showTest: false })
  }
  incrementVal = () => {
    this.setState((state) => ({ val: state.val + 1 }))
  }
  render() {
    return (
      <div>
        <NavLink to="/qcEditor">QC Editor </NavLink>
        <NavLink to="/infinite"> Infinite</NavLink>
        <Routes>
          {/* <Route path="/assign" element={<Assignment />} /> */}
          <Route path="/infinite" element={<State />} />
          <Route path="/" element={<Editor />} />
          <Route path="/qcEditor" element={<QCEditor />} />
        </Routes>

        {improve && (
          <>
            <button
              onClick={() => {
                this.hideTest()
              }}>
              Hide Component
            </button>
            <button
              onClick={() => {
                this.incrementVal()
              }}>
              increment parent val
            </button>
          </>
        )}
        {/* <Frame title={'A Technology Quiz'} photo={1}>
					<Frame title={f} />

					{() => {
						console.log('abc');
						return <Frame title="child" />;
					}}
				</Frame> */}
        {/* {this.state.showTest && <Test />} */}
        {/* {this.state.showTest && <ClassTest ab={this.state.val} />} */}
        {/* {Frame({ title: "CAT", photo: "Cat Photo" })} */}
        {/* <HOC parentName={"Parent"} /> */}
        {/* <QuizWrapper /> */}
      </div>
    )
  }
}
export default App

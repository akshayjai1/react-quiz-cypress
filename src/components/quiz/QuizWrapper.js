import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Quiz from './Quiz';
import { ActionTypes } from '../../constants/actionTypes';

const mapStateToProps = (state) => {
  return { ...state.quiz };
};

const mapDispatchToProps = (dispatch) => ({
  onQuizLoad: (payload) => dispatch({ type: ActionTypes.QuizLoad, payload }),
  onPagerUpdate: (payload) =>
    dispatch({ type: ActionTypes.PagerUpdate, payload }),
});

class QuizWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [
        { id: 'data/javascript.json', name: 'Javascript' },
        { id: 'data/aspnet.json', name: 'Asp.Net' },
        { id: 'data/csharp.json', name: 'C Sharp' },
        { id: 'data/designPatterns.json', name: 'Design Patterns' },
      ],
      quizId: 'data/javascript.json',
    };
    this.state['da'] = 'ABC';
    this.state.power = props.power; // putting props inside state and modifying is allowed
  }

  pager = {
    index: 0,
    size: 1,
    count: 1,
  };

  componentDidMount() {
    /** here you would make a network request */
    this.load(this.state.quizId);
  }

  load(quizId) {
    let url = quizId || this.props.quizId;
    /** note the url used for network request */
    axios(`../${url}`).then((res) => {
      let quiz = res.data;
      quiz.questions.forEach((q) => {
        q.options.forEach((o) => (o.selected = false));
      });
      quiz.config = Object.assign(this.props.quiz.config || {}, quiz.config);
      this.pager.count = quiz.questions.length / this.pager.size;
      this.props.onQuizLoad(quiz);
      this.props.onPagerUpdate(this.pager);
    });
  }

  onChange = (e) => {
    this.setState({ quizId: e.target.value });
    this.load(e.target.value);
  };

  render() {
    return (
      <div className="container">
        <header className="p-2">
          <div className="row">
            <div className="col-6">
              <h3 className="pageTitle">Quiz Application</h3>
            </div>
            <div className="col-6 text-right">
              <label className="mr-1">Select Quiz:</label>
              <select onChange={this.onChange} className="selectQuiz">
                {this.state.quizes.map((q) => (
                  <option key={q.id} value={q.id}>
                    {q.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>
        <Quiz
          quiz={this.state.quiz}
          quizId={this.state.quizId}
          mode={this.state.mode}
        />
      </div>
    );
  }
}
// export default QuizWrapper
// console.log("this is quizWrapper", QuizWrapper.toString());
// console.log(QuizWrapper);
export default connect(mapStateToProps, mapDispatchToProps)(QuizWrapper);

import React from 'react';
import propTypes from 'prop-types';
import helper from '../helpers/qnAHelper.js'
class AllClicks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadAnswerState: false,
      questionClickCount: 1,
      lastIndex:null,
      showQuestionButton: false,
      helpfulQuestionCount: 0,
      question_id: null,



    }
    this.moreAnsweredQorLoadMoreAnswers = this.moreAnsweredQorLoadMoreAnswers.bind(this)
    this.loadNewQuestions = this.loadNewQuestions.bind(this)
    this.helpfulQuestionIndicatorClick = this.helpfulQuestionIndicatorClick.bind(this)

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.questionClickCount !== this.state.questionClickCount) {
      let showMoreAnsweredQuestions = helper.moreAnsweredQButtonDisplay(this.state.questionClickCount, this.state.lastIndex);
      this.setState({
        showQuestionButton: showMoreAnsweredQuestions
      })
    }
  }


  moreAnsweredQorLoadMoreAnswers(e) {
    if (e.target.className === 'loadMoreAnswersButton') {
      this.setState({
        loadAnswerState: !this.state.loadAnswerState
      })
    }
  }
  loadNewQuestions(questionLength){
    let count = this.state.questionClickCount + 2
    let lastI = questionLength
    this.setState({
      questionClickCount: count,
      lastIndex: lastI
    })

  }
  helpfulQuestionIndicatorClick(questionId) {
    if (this.state.question_id !== questionId) {
      this.setState({
        helpfulQuestionCount: 1,
        question_id: questionId
      })
    }

  }


  render () {
    const renderProps = {
      loadAnswerState: this.state.loadAnswerState,
      questionClickCount: this.state.questionClickCount,
      lastIndex: this.state.lastIndex,
      showQuestionButton: this.state.showQuestionButton,
      helpfulQuestionCount: this.state.helpfulQuestionCount,
      question_id: this.state.question_id,
      loadMoreAnsOrQ: this.moreAnsweredQorLoadMoreAnswers,
      loadNewQuestions: this.loadNewQuestions,
      helpfulQuestionIndicatorClick: this.helpfulQuestionIndicatorClick

    }

    return typeof this.props.children === 'function'
    ? this.props.children(renderProps)
    : this.props.children
  }

}

AllClicks.propTypes = {
  children: propTypes.oneOfType([propTypes.func, propTypes.obj])

}
export default AllClicks;
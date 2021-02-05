import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import { resetGame, addRanking } from '../actions';
import '../style/feedback.css';
import growth from '../image/growth.png';
import jogging from '../image/jogging.png';

class Feedback extends Component {
  componentDidMount() {
    const { sendRanking, name, hash } = this.props;
    sendRanking(name, hash);
  }

  feedbackMessage() {
    const { assertions } = this.props;
    const MIN_ASSERTIONS = 3;

    if (assertions < MIN_ASSERTIONS) {
      return (
        <div data-testid="feedback-text" className="feedback-top">
          <img src={jogging} className="image-fb"/>
          <p className="fb"> Could be better... </p></div>
      );
    } if (assertions >= MIN_ASSERTIONS) {
      return (
        <div data-testid="feedback-text" className="feedback-top">
          <img src={growth} className="image-fb"/>
          <p className="fb"> Nice job!</p>
        </div>
      );
    }
  }

  render() {
    const { score, assertions, reset } = this.props;
    return (
      <div >
        <p className= "title"> Trivia</p>
        <p className= "subtitle"> The Game</p>
        <div className="container">
          <div className="container-feedback">
            <Header />
            {this.feedbackMessage()}
            <div className="fb-q">
              <p>
                You got 
                {' '}
                <span data-testid="feedback-total-question">{assertions}</span>
                {' '}
               question right!
                <br />
              A total of
                {' '}
                <span data-testid="feedback-total-score">{score}</span>
                {' '}
                points
              </p>
            </div>
            <div className="btn-ranking">
              <Link to="/ranking">
                <button
                  type="button"
                  data-testid="btn-ranking"
                  onClick={ reset }
                  className="fbb"
                >        
                SEE RANKING
                </button>
              </Link>
              <Link to="/">
                <button
                  type="button"
                  data-testid="btn-play-again"
                  onClick={ reset }
                  className=" fbb"
                >
                PLAY AGAIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.game.assertions,
  score: state.game.score,
  name: state.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetGame()),
  sendRanking: (name, hash) => dispatch(addRanking(name, hash)),
});

Feedback.propTypes = {
  user: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

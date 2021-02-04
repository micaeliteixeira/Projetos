import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style/header.css'


class Header extends Component {
  render() {
    const { name, score, hash } = this.props;
    return (
      <div className="class-header">
        <div className="hello">
          <img
            data-testid="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${hash}` }
            alt="Header profile"
            className="img-gravatar"
          />
          <p data-testid="header-player-name" className= "header-player-name">
              Hello {name}!!
          </p>
        </div>
        <div className="div-score">
          <span data-testid="header-score" className="header-score" >
           {score}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  name: state.user.name,
  score: state.game.score,
  hash: state.user.hash,
});

Header.propTypes = {
  dispatchScore: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Header);

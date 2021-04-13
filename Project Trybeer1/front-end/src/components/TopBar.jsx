import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import '../styles/topbar.css';

function TopBar({ name }) {
  const [visible, setVisible] = useState(true);

  function applyClass() {
    document.getElementById('menuhamburguer').classList.toggle('change');
  }

  return (
    <div>
      <div className="topbar">
        <button
          type="button"
          id="menuhamburguer"
          data-testid="top-hamburguer"
          className="container"
          onClick={ () => { setVisible(!visible); applyClass(); } }
        >
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </button>
        <h1 data-testid="top-title" className="title">{name}</h1>
      </div>
      <div hidden={ visible }>
        <SideBar />
      </div>
    </div>
  );
}

TopBar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TopBar;

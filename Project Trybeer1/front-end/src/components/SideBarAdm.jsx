import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/sidebaradm.css';

function SideBarAdm() {
  const history = useHistory();

  const handleLogout = async () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div className="admin-side-bar-container">
      <h3 className="title-adm-sidebar"> TryBeer </h3>
      <button
        className="buttonside"
        type="button"
        data-testid="side-menu-item-orders"
        onClick={ () => history.push('/admin/orders') }
      >
        Pedidos
      </button>
      <button
        className="buttonside"
        type="button"
        data-testid="side-menu-item-profile"
        onClick={ () => history.push('/admin/profile') }
      >
        Perfil
      </button>
      <button
        className="buttonside"
        type="button"
        data-testid="side-menu-item-logout"
        onClick={ handleLogout }
      >
        Sair
      </button>
    </div>
  );
}

export default SideBarAdm;

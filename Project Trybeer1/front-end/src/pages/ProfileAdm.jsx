import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBarAdm from '../components/SideBarAdm';
import '../styles/profileadm.css';

function ProfileAdm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      history.push('/login');
    } else if (user.role !== 'administrator') {
      history.push('/profile');
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [history]);

  return (
    <div>
      <SideBarAdm />
      <div className="profileContainer">
        <h1> Perfil </h1>
        <div className="text" data-testid="profile-name">
          {`Nome: ${name}`}
        </div>
        <div className="text" data-testid="profile-email">
          {`Email: ${email}`}
        </div>
      </div>
    </div>
  );
}

export default ProfileAdm;

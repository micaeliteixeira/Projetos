import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import { updateUser } from '../services/users';
import '../styles/profile.css';

function Profile() {
  const { name, email, token, role } = JSON.parse(localStorage.getItem('user'));
  const [userName, setUserName] = useState(name);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const nameRegex = /^[a-záàâãéèêíïóôõöúçñ ]+$/gi;
    const nameIsValid = nameRegex.test(userName);

    if (userName !== name && nameIsValid) setIsDisabled(false);
    else setIsDisabled(true);
  }, [name, userName]);

  const handleSubmit = async () => {
    const visibleInterval = 1500;

    await updateUser(userName, email);

    localStorage.setItem('user', JSON.stringify({ name: userName, email, token, role }));

    setIsVisible(false);

    setTimeout(() => setIsVisible(true), visibleInterval);
  };

  return (
    <div>
      <TopBar name="Meu perfil" />
      <div className="profilecontainer">
        <div className="profileinformations">
          <label className="labelprofile" htmlFor="profileNameInput">
            Nome
            <input
              id="profileNameInput"
              data-testid="profile-name-input"
              className="inputprofile"
              value={ userName }
              onChange={ (e) => setUserName(e.target.value) }
            />
          </label>
          <label className="labelprofile" htmlFor="profileEmailInput">
            Email
            <input
              id="profileEmailInput"
              data-testid="profile-email-input"
              className="inputprofile"
              value={ email }
              readOnly
            />
          </label>
          <button
            type="button"
            className="buttonprofile"
            data-testid="profile-save-btn"
            disabled={ isDisabled }
            onClick={ handleSubmit }
          >
            Salvar
          </button>
          <div hidden={ isVisible }>Atualização concluída com sucesso</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

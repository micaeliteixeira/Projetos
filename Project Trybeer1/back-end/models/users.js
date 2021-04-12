const connection = require('./connection');

const coll = 'users';

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM Trybeer.users;');

  return users;
};

const getUser = async (email, password) => {
  const [user] = await connection.execute(
    `SELECT * FROM Trybeer.${coll} WHERE email = ? AND password = ?`, [email, password],
  );

  return user;
};

const getUserByEmail = async (email) => {
  const [user] = await connection.execute(
    `SELECT * FROM Trybeer.${coll} WHERE email = ?`, [email],
  );

  const { id, name, email: userEmail } = user[0];

  return { id, name, userEmail };
};

const addUser = async (name, email, password, role) => {
  try {
    await connection.execute(
      `INSERT INTO Trybeer.${coll} (name, email, password, role) VALUES(?, ?, ?, ?);`,
      [name, email, password, role],
    );
  
    const user = await getUser(email, password);
  
    return user;
  } catch (error) {
    return undefined;
  }
};

const updateUser = async (name, email) => {
  await connection.execute(
    'UPDATE Trybeer.users SET name = ? WHERE email = ?', [name, email],
  );
};

module.exports = {
  getAll,
  getUser,
  getUserByEmail,
  addUser,
  updateUser,
};

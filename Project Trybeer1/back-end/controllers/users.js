const { Router } = require('express');
const services = require('../services/users');
const createToken = require('../auth/createToken');

const usersRouter = new Router();

usersRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const [user] = await services.getUser(email, password);

  if (user) {
    const token = createToken({ email, id: user.id, name: user.name });
    const { name, email: userEmail, role } = user;

    return res.status(200).json({ name, email: userEmail, token, role });
  }

  return res.status(404).json({ message: 'user not found' });
});

usersRouter.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await services.addUser(name, email, password, role);

  if (!user) return res.status(401).send({ message: 'E-mail already in database.' });

  const token = createToken({ email });

  return res.status(200).json({ token, role });
});

usersRouter.put('/profile', async (req, res) => {
  const { name, email } = req.body;

  await services.updateUser(name, email);

  return res.status(200).json({ message: 'Atualização concluída com sucesso' });
});

module.exports = {
  usersRouter,
};

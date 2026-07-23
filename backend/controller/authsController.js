exports.handleRegister = (req, res) => {
  res.json({ message: 'Register endpoint hit', body: req.body });
};

exports.handleLogin = (req, res) => {
  res.json({ message: 'Login endpoint hit', body: req.body });
};
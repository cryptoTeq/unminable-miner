exports.healthCheckController = async (req, res) => {
  res.json({ health: true });
};

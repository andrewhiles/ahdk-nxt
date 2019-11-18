export default (req, res) => {
    const reply = require(`../../../data/agenda.json`);
    res.json(reply);
  };
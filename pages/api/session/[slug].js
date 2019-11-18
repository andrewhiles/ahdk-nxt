// pages/api/session/[slug].js
export default (req, res) => {
    const {
      query: { slug },
    } = req;
    const reply = require(`../../../data/${slug}.json`);
    res.status(200).json(reply);
  };
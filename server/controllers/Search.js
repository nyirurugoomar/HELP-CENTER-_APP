// controllers/searchController.js
const search = require("../model/Search");

const searchController = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  try {
    const results = await search(query);
    res.json(results);
  } catch (error) {
    console.error("Error searching:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { searchController };

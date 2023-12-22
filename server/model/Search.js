// models/Search.js
const mongoose = require("mongoose");

const SearchSchema = new mongoose.Schema({
  // Define the fields you want to index or search on
  title: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  ssdNo: {
    type: String,
    required: true,
  },
});

const Search = mongoose.model("Search", SearchSchema);

// Create a function to perform the search
const search = async (query) => {
  // Use a regex to perform a case-insensitive search
  const regex = new RegExp(query, "i");

  // Search for documents that match the query
  const results = await Search.find({
    $or: [{ title: regex }, { service: regex }, { ssdNo: regex }],
  });

  return results;
};

module.exports = { Search, search };

const router = require("express").Router();
const {
  getCards,
  createCard,
  updateCard,
  deleteCard,
} = require("./controllers/Card");
const { register, login } = require("./controllers/authController.js");
const {
  getUserProfile,
  updateUserProfile,
} = require("./controllers/userProfile");
const { searchController } = require("./controllers/Search.js");

router.get("/cards", getCards);
router.post("/cards", createCard);
router.put("/cards/:cardID", updateCard);
router.delete("/cards/:cardID", deleteCard);
router.post("/register", register);
router.post("/login", login);
router.get("/getUserProfile/:userId", getUserProfile);
router.put("/updateUserProfile/:userId", updateUserProfile);
router.get("/searchController", searchController);

module.exports = router;

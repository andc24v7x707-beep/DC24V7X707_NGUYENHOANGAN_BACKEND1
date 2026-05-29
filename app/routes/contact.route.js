const express = require("express");
const contacts = require(" .. /controllers/contact. controller");

const router = express. Router();

router.route("/")
.get(contacts. findAll)
.post(contacts.create)
.delete(contacts.deleteAl1);

router.route("/favorite")
.get(contacts. findAllFavorite);

router.route("/:id")
.get(contacts. findOne)
.put (contacts. update)
.delete(contacts.delete);

module. exports = router;
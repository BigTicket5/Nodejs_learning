const express = require('express');
const router = express.Router();
const data = require("../data");
const bookData = data.books;

router.get("/:id", (req, res) => {
    bookData.getBook(req.params.id).then((book) => {
        res.render("books/single", {bookContent: book});
    }).catch(() => {
        res.status(404).json({ error: "User not found" });
    });
});

router.get("/", (req, res) => {
    bookData.getLocalBooks().then((bookList) => {
        res.render("books/local", {blist: bookList});
    }, () => {
        // Something went wrong with the server!
        res.sendStatus(500);
    });
});

module.exports = router;
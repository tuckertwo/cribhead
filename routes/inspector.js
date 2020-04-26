// Router for /inspect
// Functions to get raw database state for debugging.

'use strict';

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) =>
{
  res.render('index_links',
    {
      title: "Database Inspector",
      links:
      [
        {addr: "users", text: "Query database for users."},
        {addr: "games", text: "Query database for games."},
        {addr: "ranks", text: "Query leaderboards."}
      ]
    });
});

router.get("/users", (req, res, next) =>
{
  throw new Error("Not implemented yet!");
});

router.get("/games", (req, res, next) =>
{
  throw new Error("Not implemented yet!");
});

router.get("/ranks", (req, res, next) =>
{
  throw new Error("Not implemented yet!");
});

module.exports = router;

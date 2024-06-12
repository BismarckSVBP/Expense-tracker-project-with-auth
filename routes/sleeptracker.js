const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

  
   return res.end("Project is Under-Deplopment.So you can enjoy other features of my web-project.Good Bye Baby...");
});

module.exports = router;

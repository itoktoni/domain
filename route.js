const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message: 'OK' });
  });

  router.get('/:code', (req, res, next) => {

      const { code } = req.params;
      let data = {
        "nama" : "tidak ditemukan",
        "domain" : null,
        "logo" : null,
        "warna" : null,
        "menu" : null,
        // "server" : "rebuild.alphara.co.id",
        // "username" : "admin",
        // "password" : "admin123",
        // "database" : "obsesiman",
        // "updated" : "2023-12-05",
      };

      switch (code) {
        case "obsesiman":
          data = {
            "nama" : "Obsesiman",
            "domain" : "https://live.obsesiman.my.id",
            "logo" : "http://alphara.co.id/assets/obsesiman.png",
            "warna" : null,
            "menu" : null,
            // "server" : "obsesiman.my.id",
            // "username" : "admin",
            // "password" : "admin123",
            // "database" : "obsesiman",
            // "updated" : "2023-12-05",
          };
          break;
        case "rebuild":
            data = {
              "nama" : "Obsesiman",
              "domain" : "https://live.obsesiman.my.id",
              "logo" : "http://live.co.id/assets/obsesiman.png",
              "domain" : "https://obsesiman.my.id",
              "warna" : null,
              "menu" : null,
              // "server" : "rebuild.alphara.co.id",
              // "username" : "admin",
              // "password" : "admin123",
              // "database" : "obsesiman",
              // "updated" : "2023-12-05",
            };
            break;
        default:
          break;
      }

      res.json(data);

  });

  module.exports = router;

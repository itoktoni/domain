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
      };
  
      switch (code) {
        case "obsesiman":
          data = {
            "nama" : "Obsesiman",
            "domain" : "https://obsesiman.my.id",
            "database" : "obsesiman.my.id",
            "logo" : "http://alphara.co.id/assets/obsesiman.png"
          };
          break;
        case "rebuild":
            data = {
              "nama" : "Obsesiman",
              "domain" : "https://rebuild.obsesiman.my.id",
              "database" : "rebuild.obsesiman.my.id",
              "logo" : "http://alphara.co.id/assets/obsesiman.png"
            };
            break;
        default:
          break;
      }
  
      res.json(data);
  
  });
  
  module.exports = router;
  
'use strict'

const axios = require('axios');

class LogoController{
  static async getLogos(req, res){
    // const { artist, title } = req.body
    try {
      const response = await axios.get(`https://api.uplead.com/v2/company-name-to-domain?company_name=amazon`);
      res.status(200).json(response.data);
    } catch (err) {
      res.status(404).json({msg: err.message});
    }
  }
}

module.exports = LogoController;
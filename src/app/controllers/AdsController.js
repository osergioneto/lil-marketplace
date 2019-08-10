const Ad = require("../models/Ad");

class AdsController {
  async index(req, res) {
    const ads = await Ad.find();

    return res.json(ads);
  }

  async show(req, res) {
    const ad = await Ad.findById(req.params.id);

    return res.json(ad);
  }

  async store(req, res) {
    const ad = Ad.create({ ...req.body, author: req.userId });

    return res.json(ad);
  }

  async update(req, res) {
    const ad = await Ad.findOneAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(ad);
  }

  async destroy(req, res) {
    await Ad.findOneAndDelete(req.params.id);

    return res.send();
  }
}

module.exports = new AdsController();

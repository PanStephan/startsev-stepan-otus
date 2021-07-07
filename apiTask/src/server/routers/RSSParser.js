let Parser = require('rss-parser')
const {Router} = require('express')

const XML = require('../models/RSS')
let parser = new Parser()
const router = Router()
 
// /api/RSS/
router.post('/', async (req, res) => {
  try {
    // req exmp https://www.feedforall.com/sample.xml
    let xml = await parser.parseURL(req.body.url)

    const newXML = new XML({
      xml: JSON.stringify(xml),
      address: req.body.url
    })

    await newXML.save()
    res.status(201).json("ok")

  } catch(e) {
    // TODO: 404 status send 
    console.log(e)
    res.status(404).send()
  }
})

router.get('/all_urls', async (req, res) => {
  try {
    let urls = await XML.find({})
    urls = urls.map(el => {
      return el.address
    })
    res.json(urls)
  } catch(e) {
    console.log(e)
    res.status(404).send()
  }
})

router.get('/all_rss', async (req, res) => {
  try {
    let urls = await XML.find({})
    urls = urls.map(el => {
      return el.xml
    })
    res.json(urls)
  } catch(e) {
    console.log(e)
    res.status(404).send()
  }
})

module.exports = router
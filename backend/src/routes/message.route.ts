const router = require('express').Router()
const { addMessage, getMessages, addImage } = require('../controller/message.controller')

router.post('/addmsg', addMessage)
router.post('/addimg', addImage)
router.get('/getmsg', getMessages)

module.exports = router
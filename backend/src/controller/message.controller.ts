const {addMessage, getMessages, addImage} = require('../service/message.service')

import {Request, Response} from "express"

class MessageController {
    async addMessage(req: Request, res: Response) {
        try {
            return addMessage(req, res)     
        } catch (e) {
            res.status(400).json({message: 'Something went wrong...'})
        }
    }

    async addImage(req: Request, res: Response) {
        try {
            return addImage(req, res)
        } catch (e) {
            res.status(400).json({message: 'Something went wrong...'})
        }
    }

    async getMessages(req: Request, res: Response) {
        try {
            return getMessages(req, res)
        } catch (e) {
            res.status(400).json({message: 'Something went wrong...'})
        }
    }
}

module.exports = new MessageController()
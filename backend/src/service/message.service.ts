import {Request, Response} from "express";

const MessageModel = require('../models/Message')

class MessageService {
    async addMessage(req: Request, res: Response): Promise<Response | void> {
        const {content} = req.body
        try {
            const newMessage = await MessageModel.create({content})
            await newMessage.save()
            res.status(201).json(newMessage)
        } catch (e) {
            res.status(400).json({message: 'Something went wrong...', e})
        }
    }

    async addImage(req: Request, res: Response): Promise<Response | void> {
        const {img} = req.body
        try {
            const newImage = await MessageModel.create({img})
            await newImage.save()
            res.status(201).json(newImage)
        } catch (e) {
            res.status(400).json({message: 'Something went wrong...', e})
        }
    }

    async getMessages(req: Request, res: Response): Promise<Response | void> {
        try {
            const AllMessages = await MessageModel.find()

            res.status(200).json(AllMessages)
        } catch (e) {
            res.status(400).json({message: 'Something went wrong...', e})
        }
    }
}

module.exports = new MessageService()
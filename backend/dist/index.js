"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
//Routes
app.use('/api/messages', require('./routes/message.route'));
const PORT = process.env.MONGO_URI || 5000;
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect(process.env.MONGO_DB);
            app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
        }
        catch (e) {
            console.log('Server Error', e.message);
            process.exit(1);
        }
    });
}
start();

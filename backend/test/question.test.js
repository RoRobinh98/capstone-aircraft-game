const mongoose = require('mongoose');
const request = require('supertest')
mongoose.set('useUnifiedTopology', true);
const path = require("path")
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const url = process.env.MONGODB_URL;

describe("Question Test", () => {
    beforeAll( () =>  {
        mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
        server = require('../src/app');
    })


    it("connect to server", async done => {
        await request(server).get('/').expect(200)
        done()
    }, 40000)


    it("insert questions", async done => {
        const resp = await request(server)
            .post("/questions")
            .send({iid:1})
        expect(resp.status).toEqual(200)
        done()
    }, 40000)

    it("insert options", async done => {
        const resp = await request(server)
            .post("/options")
            .send()
        expect(resp.status).toEqual(200)
        done()
    }, 40000)


    afterAll(async () => {
        const questionD = request(server)
            .post("/questions/drop")
            .send();
        const optionD = request(server)
            .post("/options/drop")
            .send();
        await mongoose.disconnect();
    })
})
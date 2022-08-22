const mongoose = require('mongoose');
const request = require('supertest')
mongoose.set('useUnifiedTopology', true);
const path = require("path")
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const url = process.env.MONGODB_URL;

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});

describe("Play Test", () => {
    var server, gameId;

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

    it("create new game", async done => {
        const resp = await request(server)
            .post("/play/new")
            .send({name: "alice", duration: 10})
        expect(resp.status).toEqual(200)
        gameId = resp.body.gameID;
        done()
    }, 40000)

    it("join a game", async done => {
        const resp = await request(server)
            .post("/play/new")
            .send({name: "alice", duration: 10})
        expect(resp.status).toEqual(200)
        gameId = resp.body.gameID;

        // join game
        const join = await request(server)
            .post("/play/join/"+gameId)
            .send({name: "player"})
        expect(join.status).toEqual(200)
        done()
    }, 40000)

    it("Test: choose available role", async done => {
        await request(server).get('/').expect(200)
        const response = await request(server)
            .post("/play/new")
            .send({name: "alice", duration: 10})
        expect(response.status).toEqual(200)
        gameId = response.body.gameID;

        const resp = await request(server)
            .post('/play/choose-role/'+gameId)
            .send({name: "alice", roleID: 1})
        //console.log(resp.request)
        expect(resp.body.isAvailable).toBeFalsy();
        expect(resp.body.player).toEqual("alice")
        done()
    }, 40000);

    it("Test: choose unavailable role", async done => {
        await request(server).get('/').expect(200)
        const response = await request(server)
            .post("/play/new")
            .send({name: "alice", duration: 10})
        expect(response.status).toEqual(200)
        gameId = response.body.gameID;

        await request(server)
            .post('/play/choose-role/'+gameId)
            .send({name: "alice", roleID: 1})
        const resp = await request(server)
            .post('/play/choose-role/'+gameId)
            .send({name: "alice", roleID: 1})
        expect(resp.status).not.toEqual(200)
        done()
    }, 40000)

    it("Test: make decision",async done => {
        await request(server).get('/').expect(200)
        const response = await request(server)
            .post("/play/new")
            .send({name: "alice", duration: 10})
        expect(response.status).toEqual(200)
        gameId = response.body.gameID;

        const resp = await request(server)
            .post('/play/choose-role/'+gameId)
            .send({name: "alice", roleID: 1})
        expect(resp.status).toEqual(200)

        const resp2 = await request(server)
            .post('/play/make-decision/'+gameId)
            .send({roleID: 1, optionID: 1})
        expect(resp2.status).toEqual(200)
        done()
    }, 40000)

	it ('get role information',async done=>{
		for (var i = 0; i < 5; i++) {
			const resp = await request(server)
				.get('/roles/introduction'+'?roleID='+i.toString())
				//.send({roleID: i.toString()})
			expect(resp.status).toEqual(200);
		}
		done()
	}, 40000)

    it("Test: get outcome", async done => {
        await request(server).get('/').expect(200)
        const response = await request(server)
            .post("/play/new")
            .send({name: "alice", duration: 10})
        expect(response.status).toEqual(200)
        gameId = response.body.gameID;

        let players = ["heather1", "heather2", "heather3", "heather4"]
        for (const player of players){
            // join game
            const join = await request(server)
                .post("/play/join/"+gameId)
                .send({name: player})
            expect(join.status).toEqual(200)
        }

        players.unshift("alice")
        for (let i = 0; i < players.length; i++) {
            // choose roles for each player
            const choose = await request(server)
                .post("/play/choose-role/"+gameId)
                .send({name: players[i], roleID: i})
                .catch(error => {
                    console.log(error)
                })
            expect(choose.status).toEqual(200)

            // make choice
            const makeChoice = await request(server)
                .post("/play/make-decision/"+gameId)
                .send({roleID: i, optionID: 1})
            expect(makeChoice.status).toEqual(200)
        }

        const resp3 = await request(server)
            .get('/play/'+gameId+'/round-outcome');
        expect(resp3.status).toEqual(400); //this case is not completed
        //expect(resp3.body.result.optionID).toEqual(1)
        done()
    }, 40000)

    it("Test: get reflection", async done => {
        const response = await request(server)
            .post("/play/new")
            .send({name: "alice", duration: 10})
        expect(response.status).toEqual(200)
        gameId = response.body.gameID;

        let players = ["heather1", "heather2", "heather3", "heather4"]
        for (const player of players){
            // join game
            const join = await request(server)
                .post("/play/join/"+gameId)
                .send({name: player})
            expect(join.status).toEqual(200)
        }

        players.unshift("alice")
        for (let i = 0; i < players.length; i++) {
            // choose roles for each player
            const choose = await request(server)
                .post("/play/choose-role/"+gameId)
                .send({name: players[i], roleID: i})
                .catch(error => {
                    console.log(error)
                })
            expect(choose.status).toEqual(200)

            // make choice
            const makeChoice = await request(server)
                .post("/play/make-decision/"+gameId)
                .send({roleID: i, optionID: 1})
            expect(makeChoice.status).toEqual(200)
        }

        const resp3 = await request(server)
            .get('/play/make-decision/'+gameId);
        expect(resp3.status).toEqual(200)
        expect(resp3.body.reflection.text).not.toEqual("")
        done()
    }, 40000)
});
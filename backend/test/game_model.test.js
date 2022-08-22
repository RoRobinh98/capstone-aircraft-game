const mongoose = require('mongoose');
const path = require("path")
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const url = process.env.MONGODB_URL;
const GameModel = require("../models/Game.js");
const RoleModel = require("../models/Role.js");
const roleData = [toObjectId("5f4799a4a8f5ee5188d0d0f7"),toObjectId("5f4799a4a8f5ee5188d0d0f4"),toObjectId("5f4799a4a8f5ee5188d0d0f3"),toObjectId("5f4799a4a8f5ee5188d0d0f0"),toObjectId("5f4799a4a8f5ee5188d0d0f8")];//we will only store roleID in game now
const companyData = toObjectId("5f4799a4a8f4ee5188d0d0f7");
const listData = toObjectId("5f4799a4a8f5ae5188d0d0f7");
const questionData={
    questionID:2,
    description: "this is a demo question 1",
    options: null,
	duration:20,
	weights:[1,1,1,1,1]
}


const gameData = { duration: 1, playerCount: 1, status: "jest", roles: roleData, decisionList:listData, companyState:companyData,currQuestion:questionData};
mongoose.set('useUnifiedTopology', true);

describe('Game Model Test', () => {

    // It's just so easy to connect to the MongoDB Memory Server
    // By using mongoose.connect
    beforeAll(async () => {
        await mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save game successfully', async () => {
        const validGame = new GameModel(gameData);
        const savedGame = await validGame.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedGame._id).toBeDefined();
        expect(savedGame.shortcode).toBeDefined();
        expect(savedGame.duration).toBe(gameData.duration);
        // expect(savedGame.university).toBe(gameData.university);
        // expect(savedGame.studentid).toBe(gameData.studentid);
    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert game successfully, but the field does not defined in schema should be undefined', async () => {
        const gameWithInvalidField = new GameModel({ duration: 1, dob: "jest" });
        const savedGameWithInvalidField = await gameWithInvalidField.save();
        expect(savedGameWithInvalidField._id).toBeDefined();
        expect(savedGameWithInvalidField.shortcode).toBeDefined();
        expect(savedGameWithInvalidField.dob).toBeUndefined();
    });

    afterAll(async () => {
        await GameModel.collection.drop();
        await mongoose.disconnect()
    })

});
function toObjectId(string) {
    return mongoose.Types.ObjectId(string);
}
const mongoose = require('mongoose');
const path = require("path")
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const url = process.env.MONGODB_URL;
const UserModel = require("../models/User.js");
const userData = { name: 'jest', university: 'jest', studentid: 1 };
mongoose.set('useUnifiedTopology', true);

describe('User Model Test', () => {

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

    it('create & save user successfully', async () => {
        const validUser = new UserModel(userData);
        const savedUser = await validUser.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe(userData.name);
        expect(savedUser.university).toBe(userData.university);
        expect(savedUser.studentid).toBe(userData.studentid);
    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new UserModel({ name: 'jest', university: 'jest', dob: "jest" });
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField._id).toBeDefined();
        expect(savedUserWithInvalidField.dob).toBeUndefined();
    });

    afterAll(async () => {
        await UserModel.collection.drop();
        await mongoose.disconnect()
    })

});
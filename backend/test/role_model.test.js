const mongoose = require('mongoose');
const path = require("path")
const request = require('supertest')
const server= require('../src/app');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const url = process.env.MONGODB_URL;
const RoleModel = require("../models/Role.js");
const roleData = { name: 'jest' };
mongoose.set('useUnifiedTopology', true);

describe('Role Model Test', () => {

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

    it('create & save role successfully', async () => {
        const validRole = new RoleModel(roleData);
        const savedRole = await validRole.save();
        // Object Id should be defined when successfully saved to MongoDB.
        console.log(savedRole)
        expect(savedRole._id).toBeDefined();
    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert role successfully, but the field does not defined in schema should be undefined', async () => {
        const roleWithInvalidField = new RoleModel({ name: 'jest', dob: "jest" });
        const savedRoleWithInvalidField = await roleWithInvalidField.save();
        expect(savedRoleWithInvalidField._id).toBeDefined();
        expect(savedRoleWithInvalidField.dob).toBeUndefined();
    });
	


    afterAll(async () => {
        await RoleModel.collection.drop();
        await mongoose.disconnect()
    })

});
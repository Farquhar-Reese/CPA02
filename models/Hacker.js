'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var hackerSchema = Schema( {
    secretID: String,
    securityClierence: Number,
    victims: Number,
    completedJobs: Number,
    expierienceLevel: Number,
    speciality: String,
    price: Number,
    instructor: Boolean
} );

module.exports = mongoose.model( 'Hacker', hackerSchema );

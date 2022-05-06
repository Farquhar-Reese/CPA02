'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var courseSchema = Schema( {
    secretID: Number,
    securityClierence: Number,
    victims: [String],
    completedJobs: [String],
    expierienceLevel: Number,
    speciality: String,
    price: Number,
} );

module.exports = mongoose.model( 'Hacker', hackerSchema );

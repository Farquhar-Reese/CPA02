'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var courseSchema = Schema( {
    secretID: Number,
    securityClierence: Number,
    victims: [String],
    expierienceLevel: Number,
    speciality: String,
} );

module.exports = mongoose.model( 'Hacker', hackerSchema );

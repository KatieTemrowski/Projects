var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// See http://mongoosejs.com/docs/schematypes.html

var animalSchema = new Schema({
	
	// name: {type: String, required: true}, // this version requires this field to exist
	// name: {type: String, unique: true}, // this version requires this field to be unique in the db
	age: Number,
	moment: String,
	firstcrush: String,
	agefirstlove: Number,
	firstlove: String,
	feeloflove: String,
	whatislove: String,
	romanticlove: String
	// dateAdded : { type: Date, default: Date.now },
})

// export 'Person' model so we can interact with it in other files
module.exports = mongoose.model('Animal',animalSchema);
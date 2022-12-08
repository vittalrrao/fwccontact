var mongoose = require('mongoose');
var Schema = mongoose.Schema;

contactSchema = new Schema( {
	
	name:String,
	email: String,
	subject: String,
	message: String,

}),
Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
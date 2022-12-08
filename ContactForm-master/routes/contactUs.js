const express = require('express');

var router = express.Router(); 
var Contact = require('./models/contactform');             





router.post('/', function(req, res, next) {
	console.log(req.body);
	var contactInfo = req.body;


	if(!contactInfo.email || !contactInfo.name || !contactInfo.subject || !contactInfo.message){
		res.send();
	} else {
		 

			Contact.findOne({email:contactInfo.email},function(err,data){
				if(!data){
					var c;
					Contact.findOne({},function(err,data){

						if (data) {

							//console.log("if");
						
						}else{
							c=1;
						}

						var newPerson = new Contact({
						
							email:contactInfo.email,
							name: contactInfo.name,
							subject: contactInfo.subject,
							message: contactInfo.message
						});

						newPerson.save(function(err){
							if(err)
								console.log(err);
							else
								res.send({"success":'Thank You for contacting us We will get back you soon'});
						});

					})
				}else{
					res.send({"false":"you have already submitted your details we will get back you soon Thank you"});
				}

			});
	
	}
});




module.exports = router;
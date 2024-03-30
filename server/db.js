const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect('mongodb+srv://miraclestar896:J0wkY1NX06K3VJnm@cluster0.kkhoask.mongodb.net/?retryWrites=true&w=majority', connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};

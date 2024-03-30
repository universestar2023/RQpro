// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// // This is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straight-forward, schema-based solution to model your application data.
// import cors from 'cors';
// // cors: This middleware enables Cross-Origin Resource Sharing (CORS) in Express, which allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
// //const express=require('express');

// import postRoutes from './routes/posts.js';


// const app=express();
// // This line initializes an Express application.
// app.use('/posts',postRoutes);
// app.use(bodyParser.json({limit:"30mb",extended:true}));
// app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
// //setting up bodyParser
// //here bodyparser is a middleware which handles requests sent by
// //client before route handlers such as JSON data or URL-encoded(URL sent By the client may contain some special characters which are encoded with a specific syntax as percent number(%40 for @)
// // Open order that server should handle the data sent by the client It should be converted into its compatible format and is passed by the body parser And is given to the property called as request body
// // present in the route handler functions)
// //setting limit(setting limit on requested body eg. JSON or form data) as we are sending images
// app.use(cors());
// //setting up cors
// // This line enables CORS for all routes in the Express application. It allows the server to respond to cross-origin requests.

// /**
//  * In Express and the body-parser middleware, the "extended" option
//  *  for parsing URL-encoded bodies determines whether to use 
//  * the traditional encoding (when set to false) or
//  *  the extended encoding (when set to true).
//  * With extended: true, the data submitted in a URL-encoded format can include nested objects 
//  * and arrays, which are parsed and represented in the req.body object as JavaScript objects.
//  * The traditional encoding does not support nested objects or arrays in the URL-encoded format.
//  *  It treats the data as a flat set of key-value pairs.
//  */

// //connecting mangodb https://www.mongodb.com/cloud/atlas  
// //this means mongodb will be hosting our website on atlas cloud

// // the provided code sets up a basic Express server with middleware for
// // parsing request bodies and enabling CORS.

// //DETAILED EXPLAINATION
// // https://chat.openai.com/share/bfd1b8be-c31f-4def-b584-2451c55e7856

// const CONNECTION_URL='mongodb+srv://Sujata:Sujata@cluster0.sq2clqf.mongodb.net/?retryWrites=true&w=majority';
// /*
//     url to connect cluster created om Mongodb atlas
// */
// const PORT=process.env.PORT || 5000;

// /*
//     Holds the port number on which the server will listen for connections.
// It's set to either the value from the process.env.PORT environment variable
//  (common in deployment environments) or defaults to 5000 if that variable is not present.
// */

// mongoose.connect(CONNECTION_URL)
// .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
// .catch((error) => console.error(error.message));

// /*
// export default async function connectDB() {
//   try {
//     const connect = await mongoose.connect(CONNECTION_URL);
//     console.log("Database connected successfully" + connect.connection.host);
//   } catch (error) {
//     console.log(error);
//   }
// }


// connectDB();
// app.listen(PORT,()=>{})
// */

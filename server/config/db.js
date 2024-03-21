import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:5000/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

export default mongoose.connection;

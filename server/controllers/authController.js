import User from '../models/User';

export const registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, parentName, mobileNo, username, password } = req.body;

    // Check if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      parentName,
      mobileNo,
      username,
      password
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

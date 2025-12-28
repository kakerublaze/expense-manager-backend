import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";


export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    // 1. Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3. Hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    // 4. Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // 5. Send response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

  res.status(200).json({
  message: "Login successful",
  token: generateToken(user._id),
  user: {
    id: user._id,
    name: user.name,
    email: user.email
  }
});

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnect();

    const { name, email, phoneNumber, password } = req.body;

    // Ensure that all required fields are present
    if (!name || !email || !phoneNumber || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({
      name,
      email,
      phoneNumber,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

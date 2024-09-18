import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import bcrypt from "bcryptjs"; // Ensure bcryptjs or bcrypt is installed

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid email or password" });
      }

      // Check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid email or password" });
      }

      // If everything is fine, return a success response
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

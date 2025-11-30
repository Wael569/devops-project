import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.post("/api/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: "User added successfully", user });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🔥 Backend running on port ${PORT}`);
});

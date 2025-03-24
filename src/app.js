import express from "express";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Welcome to my Ecommerce API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});

export default app;

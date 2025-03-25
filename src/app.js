import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Configure CORS with options
const corsOptions = {
  origin: ['http://localhost:3000', 'https://yourdomain.com'],  // Allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true // Allow credentials (cookies, authorization headers, etc)
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to my Ecommerce API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});

export default app;

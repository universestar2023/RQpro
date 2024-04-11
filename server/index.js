import { config } from 'dotenv';
import express from "express";
const app = express();
import cors from "cors";
import connection from "./database/db.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import testRoutes from "./routes/route.js";

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:8080' }));
config();

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/route', testRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

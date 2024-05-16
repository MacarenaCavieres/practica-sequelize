import "dotenv/config";
import express from "express";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

app.use("*", (req, res) => {
    return res.json({ ok: false, msg: "Página no encontrada" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

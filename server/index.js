const express = require("express");
const path = require("path");
const app = express();
const PORT = 33000;

const publicDir = path.join(__dirname, "..", "public");
app.use("/public", express.static(publicDir));

// Generic front-end route, React will handle client-side routing
app.get("/*", (_, res) => res.sendFile(path.join(publicDir, "index.html")));

app.listen(PORT, () => console.log("Server is runng and ready for you"));

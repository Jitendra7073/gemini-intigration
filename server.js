const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const processRoutes = require("./routes/pdfRoutes"); // Ensure the path is correct

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mount the process route under "/api"
app.use("/api", processRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

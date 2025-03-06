import "./config/envLoader.js";
import app from "./app.js";
import sequelize from "./config/db.js";
const port = process.env.NODE_PORT || 4000;

sequelize.sync();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

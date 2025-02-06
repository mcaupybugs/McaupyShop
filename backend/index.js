import app from "./app.js";
import sequelize from "./config/db.js";
const port = 4000;

sequelize.sync();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express")
const chalk = require("chalk")
const debug = require("debug")("app")
const morgan = require("morgan")
const path = require("path")

const app = express()
const port = process.env.PORT || 3000

app.use(morgan("combined"))
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", { username: "John", customers: ["Alice", "Bob", "Charlie"] })
})

app.listen(port, () => {
    debug(`Server is running on ` + chalk.green(`http://localhost:${port}`))
})

import express from "express"
import { routes } from "./routes"
import { errors } from "./middlewares/error"

const PORT = 3333
const app = express()

app.use(express.json())
app.use(routes)
app.use(errors)

app.listen(PORT)
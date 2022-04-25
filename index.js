import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const user = [];
const usersTweets = [];
let userAvatar = ""

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    user.push({username, avatar});
    res.status(200).send("Ok");
})

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;
    userAvatar = user.find(element => element.username === username);
    usersTweets.push({username, avatar: userAvatar.avatar, tweet});
    res.status(200).send("Ok");
})

app.get("/tweets", (req, res) => {
    const lastTweets = usersTweets.slice(-10);
    res.send(lastTweets);
})

app.listen(5000);
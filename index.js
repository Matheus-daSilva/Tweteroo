import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const user = [];
const usersTweets = [];

app.post("/sign-up", (req, res) => {
    const username = req.params.username;
    const avatar = req.params.avatar;
    user.push({username: username, avatar: avatar});
    res.send("Ok");
})

app.post("/tweets", (req, res) => {
    const name = req.params.username;
    const tweet = req.params.tweet;
    const userInfo = user.avatar;
    usersTweets.push({name: name, avatar: userInfo, tweet: tweet});
    res.send("Ok");
})

app.get("/tweets", (req, res) => {
    res.send(usersTweets);
})


app.listen(5000);
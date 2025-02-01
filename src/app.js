import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Custom CORS Middleware for anonymous access (Allow any origin)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");  // Allow any origin
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");  // Allow specific methods
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");  // Allow specific headers
    res.header("Access-Control-Allow-Credentials", "false");  // Do not allow credentials (cookies/auth)
    
    // Handle preflight (OPTIONS) request
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    next();
});

// Your other middleware
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes (same as before)
import userRouter from "./routes/user.routes.js";
import commentRouter from "./routes/comment.routes.js";
import likeRouter from "./routes/like.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import videoRouter from "./routes/video.routes.js";
import playlistRouter from "./routes/playlist.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";

app.get("/", (req, res) => res.send("Working Good"));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/tweets", tweetRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/videos", videoRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/dashboard", dashboardRouter);

export { app };

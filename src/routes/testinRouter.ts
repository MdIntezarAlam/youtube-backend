import { Router } from "express";

const router = Router();

router.route("/test").get((req, res) => {
  res.send("Hello World!");
});

export default router;

//https://next-youtube-backend.netlify.app/.netlify/functions/api

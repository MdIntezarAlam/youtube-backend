import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.json({ message: "Hello World!" });
})

export default router;

//https://next-youtube-backend.netlify.app/.netlify/functions/api

import { Router } from "express";

const router = Router();

router.get("/signup", (req, res) => {
  res.send("User signup");
});

export default router;

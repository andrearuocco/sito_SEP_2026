import { Router } from "express";
import rateLimit from "express-rate-limit";
import contactSchema from "../models/contactSchema.js";

const router = Router();

// Anti-spam basilare: max 10 richieste / 15 minuti per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/", limiter, async (req, res, next) => {
  try {
    const { nome, cognome, email, telefono, messaggio } = req.body ?? {};

    // Validazione minima server-side
    if (!nome || !email || !messaggio) {
      return res.status(400).json({ error: "nome, email e messaggio sono obbligatori" });
    }

    const doc = await contactSchema.create({
      nome,
      cognome,
      email,
      telefono,
      messaggio,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
      source: "website",
    });

    // Risposta “pulita” per FE (non serve rimandare tutto)
    return res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    next(err);
  }
});

export default router;

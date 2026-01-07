import { model, Schema } from "mongoose"

const contactMessageSchema = new Schema(
  {
    nome: { type: String, required: true, trim: true, minlength: 2, maxlength: 60 },
    cognome: { type: String, trim: true, maxlength: 60 },
    email: { type: String, required: true, trim: true, lowercase: true },
    telefono: { type: String, trim: true, maxlength: 30 },
    messaggio: { type: String, required: true, trim: true, minlength: 5, maxlength: 4000 },

    // Metadati utili
    source: { type: String, default: "website" },
    ip: { type: String },
    userAgent: { type: String },
  },
  { collection: "contact_messages", timestamps: true }
)

export default model("ContactMessage", contactMessageSchema)

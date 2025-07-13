import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, required: true }, // e.g., Plumbing, Electrician
  price: { type: Number, required: true },
  image: String,
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Service', serviceSchema);
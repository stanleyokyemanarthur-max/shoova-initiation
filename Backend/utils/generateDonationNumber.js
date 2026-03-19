import Counter from "../models/Counter.js";

export default async function generateDonationNumber() {

  const counter = await Counter.findOneAndUpdate(
    { name: "donation" },
    { $inc: { value: 1 } },
    { new: true, upsert: true }
  );

  const number = String(counter.value).padStart(5, "0");

  const year = new Date().getFullYear();

  return `SHV-${year}-${number}`;
}
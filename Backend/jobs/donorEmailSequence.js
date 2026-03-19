// import cron from "node-cron";
// import Donation from "../models/Donation.js";
// import { sendHumanConnectionEmail } from "../utils/sendHumanConnectionEmail.js";
// import { sendEngagementEmail } from "../utils/sendEngagementEmail.js";

// cron.schedule("0 9 * * *", async () => {

//   console.log("Running donor email sequence job");

//   const donations = await Donation.find();

//   for (const donation of donations) {

//     const daysSinceDonation =
//       (Date.now() - donation.donationDate) / (1000 * 60 * 60 * 24);

//     if (donation.emailSequenceStage === 1 && daysSinceDonation >= 3) {

//       await sendHumanConnectionEmail(
//         donation.name,
//         donation.email
//       );

//       donation.emailSequenceStage = 2;
//       await donation.save();
//     }

//     if (donation.emailSequenceStage === 2 && daysSinceDonation >= 7) {

//       await sendEngagementEmail(
//         donation.name,
//         donation.email
//       );

//       donation.emailSequenceStage = 3;
//       await donation.save();
//     }

//   }

// });
import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import DatePicker from "react-datepicker";

export default function StoryPage() {
  const [birthday, setBirthday] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthdayMonth: "",
    birthdayDay: "",
    birthdayYear: "",
    birthdayReminder: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubscribe = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch("http://localhost:5000/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          birthday: birthday ? birthday.toISOString() : null
        })
      });

      const data = await res.json();

      console.log("SERVER RESPONSE:", data);

      if (data.success) {
        setSubscribed(true);

        // clear form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          birthdayMonth: "",
          birthdayDay: "",
          birthdayYear: "",
          birthdayReminder: false
        });

        setBirthday(null);

        window.scrollTo({ top: 0, behavior: "smooth" });
      }

    } catch (error) {

      console.error("Subscription failed:", error);

    }

  };
  return (
    <div className="font-body antialiased bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">

        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/img/repair.jpg"
            alt="Galamsey destruction"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center text-white">

  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
    Our Story
  </h1>

  <p className="text-2xl md:text-2xl text-white mb-6 leading-relaxed">
    From the impact of illegal mining to the vision of rebuilding through
    education and innovation, this is where restoration begins.
  </p>

</div>

        </div>

        <div className="absolute bottom-8 left-10 text-white/70 animate-bounce">
          ↓
        </div>
      </section>


      {/* ================= FOUNDERS (PREMIUM QUOTE SECTION) ================= */}
      <section className="py-28 bg-gray-50 relative overflow-hidden">

        {/* 🔷 SOFT BRAND BACKGROUND SHAPE */}
        <div className="absolute left-0 top-0 w-1/2 h-full -skew-x-12 bg-secondary/5 origin-top-left"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 relative z-10">

          {/* ================= IMAGE SIDE ================= */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative">

              <img
                src="/img/remove.png"
                alt="Shoova Founders"
                className="w-[340px] md:w-[420px] object-contain drop-shadow-2xl"
              />

              {/* subtle glow */}
              <div className="absolute inset-0 bg-secondary/10 blur-3xl -z-10"></div>

            </div>
          </div>
          {/* ================= TEXT SIDE ================= */}
          <div className="max-w-xl">
            {/* LABEL */}
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-4">
              The Shoova Approach
            </p>

            {/* QUOTE BLOCK */}
            <div className="text-gray-600 text-lg leading-relaxed mb-8 italic relative pl-6">

              {/* OPEN QUOTE */}
              <span className="absolute left-0 top-0 text-4xl text-primary leading-none">
                “
              </span>

              {/* MAIN TEXT */}
              <div className="space-y-5">

                <p className='text-xl'>
                  Our work is anchored in Isaiah 42:22; But this is a people plundered and looted; all of them are trapped in holes and hidden in prisons. They have become prey with no one to rescue them, spoil with no one to say, 'Restore!'
                  <br />
                  We founded the Shoova Initiative because we believe that the same analytical rigor
                  used to manage global portfolios should be applied to healing the earth.
                </p>

                <p className="font-semibold text-gray-900 text-xl">
                  We are not just doing good. We are building a sustainable infrastructure for hope.
                </p>

              </div>

              {/* CLOSE QUOTE */}
              <span className="text-primary text-3xl ml-1">”</span>

            </div>

            {/* SIGNATURE */}
            <h3 className="text-gray-800 font-medium">
              <span className="font-semibold">William Agyekum & Salome Agyekum</span>
              <span className="text-gray-500"> — Co-Founders, Shoova Initiative</span>
            </h3>

          </div>

        </div>

      </section>
      {/* ================= PARTNERSHIP CTA ================= */}
      <section className="py-32 bg-white text-center">

        <div className="max-w-4xl mx-auto px-6">

          {/* LABEL */}
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-4">
            Institutional Partnership
          </p>

          {/* HEADLINE */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build the Blueprint With Us
          </h2>

          {/* BODY */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The Shoova Restoration Campus is a scalable model for vocational excellence
            and environmental repair. We are inviting partners to help build a world-class
            institution that transforms both land and lives.
          </p>

          {/* HIGHLIGHT */}
          <p className="text-lg font-semibold text-gray-900 mb-10">
            Naming-right opportunities are available for labs, workshops, and student facilities.
          </p>

          {/* CTA */}
          <Link to='/contact' className="px-8 py-4 bg-secondary text-white font-semibold rounded-full hover:bg-secondaryHover transition">
            Contact Our Board
          </Link>

        </div>

      </section>


      {/* ================= TRANSFORMATION SECTION ================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">

        {/* 🔷 BACKGROUND SHAPE */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-secondary/5 -skew-x-12 origin-top-right"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">

            <img
              src="/img/future.jpg"
              alt="Land restoration"
              className="w-full h-[450px] md:h-[600px] object-cover rounded-3xl shadow-2xl"
            />

            {/* subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>

          </div>


          {/* ================= TEXT SIDE ================= */}
          <div className="max-w-xl">

            {/* LABEL */}
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-4">
              The Turning Point
            </p>

            {/* HEADING */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Land Can Heal
            </h2>

            {/* BODY */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              What has been destroyed is not beyond repair.
              With the right skills, the right tools, and the right people,
              restoration becomes possible.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This is where Shoova begins — turning damaged land into opportunity,
              and lost potential into purpose.
            </p>

            {/* EMPHASIS LINE */}
            <p className="text-xl font-semibold text-gray-900">
              From extraction to restoration.
            </p>

          </div>

        </div>

      </section>

      {/* ================= TURN ================= */}
      <section className="py-40">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            What if the youth in the mines
            became the engineers of restoration?
          </h2>

        </div>
      </section>


      {/* ================= OUR PROCESS ================= */}
      <section className="relative bg-white pt-24 pb-10">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16 px-6">

          <p className="text-sm uppercase tracking-[0.25em] text-secondary/80 mb-4">
            Our Process
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-textDark mb-4 leading-tight">
            Turning destruction into restoration
          </h2>

          <div className="w-16 h-[2px] bg-secondary mx-auto mb-32"></div>

        </div>

        {/* PROCESS CARD */}
        <div className="relative -mt-16 md:-mt-20 mb-20 md:mb-28 px-6 md:px-10 z-20">

          <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl">

            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* STEP 1 */}
              <div className="bg-[#0f2f44] text-white px-8 py-28 flex flex-col justify-center hover:-translate-y-1 transition">

                <p className="text-md uppercase tracking-widest text-white/60 mb-3">
                  Step 01
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Reclaim
                </h3>

                <p className="text-white/80 text-md leading-relaxed">
                  We identify lands devastated by illegal mining and engage local
                  communities to begin environmental recovery.
                </p>

              </div>


              {/* STEP 2 */}
              <div className="bg-[#c9a96a] text-white px-8 py-28 flex flex-col justify-center hover:-translate-y-1 transition">

                <p className="text-md uppercase tracking-widest text-white/70 mb-3">
                  Step 02
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Train
                </h3>

                <p className="text-white/90 text-md leading-relaxed">
                  We equip youth with engineering, environmental, and vocational
                  skills that create real alternatives to galamsey.
                </p>

              </div>


              {/* STEP 3 */}
              <div className="bg-[#d94a34] text-white px-8 py-28 flex flex-col justify-center hover:-translate-y-1 transition">

                <p className="text-md uppercase tracking-widest text-white/70 mb-3">
                  Step 03
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Restore
                </h3>

                <p className="text-white/90 text-md leading-relaxed">
                  Our graduates rebuild ecosystems, restore livelihoods, and lead
                  communities away from destructive mining practices.
                </p>

              </div>

            </div>

          </div>
        </div>

      </section>


      {/* ================= CAMPUS ================= */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Shoova Restoration Campus
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            We are building an 8-acre vocational institute where youth are trained
            in engineering, sustainability, and leadership — transforming extraction
            into restoration.
          </p>

        </div>
      </section>

      {/* ================= HOW YOU CAN BE PART OF RESTORATION ================= */}
      <section className="py-28 bg-[#f4f7f8]">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT IMAGES ================= */}
          <div className="space-y-6">

            <div>
              <img
                src="/img/program.jpg"
                className="w-full h-[260px] object-cover rounded-xl shadow-md"
                alt="Youth training"
              />
              <p className="text-xs text-gray-500 mt-2">
                Training youth in restoration skills
              </p>
            </div>

            <div>
              <img
                src="/img/community.jpg"
                className="w-full h-[260px] object-cover rounded-xl shadow-md"
                alt="Land restoration"
              />
              <p className="text-xs text-gray-500 mt-2">
                Restoring degraded land and ecosystems
              </p>
            </div>

          </div>


          {/* ================= RIGHT CONTENT ================= */}
          <div className="max-w-xl">

            {/* BLOCK 1 */}
            <div className="mb-10">

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Take action to restore the land
              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>• Support the transition from illegal mining to sustainable livelihoods</li>
                <li>• Help fund vocational training for youth in affected communities</li>
              </ul>

            </div>


            {/* BLOCK 2 */}
            <div className="mb-10">

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Invest in a restoration movement
              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>• Contribute to building the Shoova Restoration Campus</li>
                <li>• Support scalable solutions for environmental and economic recovery</li>
              </ul>

            </div>


            {/* BLOCK 3 */}
            <div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Demonstrate long-term impact
              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>• Align with measurable land restoration and youth empowerment outcomes</li>
                <li>• Be part of a system designed for transparency, accountability, and scale</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Restoration Report */}
      <section
        id="restoration_report"
        className="py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE — EMOTIONAL IMAGE */}
            <div className="relative">

              <img
                src="/img/gh12.jpg"
                alt="Youth restoring degraded land in Ghana"
                className="w-full h-[520px] object-cover rounded-2xl shadow-xl"
              />

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg max-w-xs">
                <p className="text-sm text-gray-700 font-medium">
                  Youth restoring degraded land in Ghana’s Eastern Region through the
                  Shoova Restoration Initiative.
                </p>
              </div>

            </div>


            {/* RIGHT SIDE — FORM */}
            <form onSubmit={handleSubscribe}
              className="bg-[#f7f7f7] p-10 rounded-2xl shadow-sm space-y-6">

              {/* Heading */}
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-textDark mb-3">
                  Subscribe to the Shoova Restoration Report
                </h2>

                <p className="text-lg text-text leading-relaxed">
                  Receive updates on land restoration, youth training, and the progress of the Shoova Restoration Campus.
                </p>
              </div>


              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="block text-xs font-semibold tracking-wide mb-2">
                    FIRST NAME
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide mb-2">
                    LAST NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  />
                </div>

              </div>


              {/* Email */}
              <div>

                <label className="block text-xs font-semibold tracking-wide mb-2">
                  EMAIL
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />

              </div>


              {/* Birthday */}
              <div>

                <label className="block text-xs font-semibold tracking-wide mb-2">
                  BIRTHDAY (OPTIONAL)
                </label>

                <DatePicker
                  selected={birthday}
                  onChange={(date) => setBirthday(date)}
                  dateFormat="MMMM d, yyyy"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={80}
                  maxDate={new Date()}
                  placeholderText="Select your birthday"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />

              </div>


              {/* Birthday Reminder Checkbox */}
              <div className="flex items-start gap-3">

                <input
                  type="checkbox"
                  name="birthdayReminder"
                  checked={formData.birthdayReminder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthdayReminder: e.target.checked
                    })
                  }
                  className="mt-1"
                />

                <p className="text-sm text-gray-700 leading-relaxed">
                  Set a reminder to pledge my birthday and help restore land and
                  empower communities.
                </p>

              </div>


              {/* Subscribe Button */}
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondaryHover text-white font-semibold py-4 rounded-md transition shadow-md"
              >
                Keep Me Informed
              </button>


              {/* Privacy / reCAPTCHA */}
              <p className="text-xs text-gray-500 leading-relaxed">

                By clicking “Subscribe”, you agree to receive updates from the
                Shoova Restoration Initiative.

                <br /><br />

                This site is protected by reCAPTCHA and the Google
                Privacy Policy and Terms of Service apply.

              </p>

            </form>

          </div>

        </div>
      </section>
    </div>
  );
}
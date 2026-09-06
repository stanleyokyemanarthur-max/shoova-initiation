import React, { useState } from "react";

const API_URL = "https://shoova-initiation-nf6m.onrender.com";

export default function TestLinkPreview() {
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePreview = async () => {
    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    setLoading(true);
    setError("");
    setPreview(null);

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_URL}/link-preview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          url: url.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch preview");
      }

      setPreview(data.preview);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Test Link Preview
      </h1>

      <p className="mt-2 text-gray-500">
        Paste a news article URL to test the preview system.
      </p>

      <div className="mt-8 flex gap-3">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.modernghana.com/..."
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-500"
        />

        <button
          onClick={handlePreview}
          disabled={loading}
          className="rounded-xl bg-[#0f172a] px-6 py-3 font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Fetching..." : "Fetch Preview"}
        </button>
      </div>

      {error && (
        <div className="mt-6 rounded-xl bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {preview && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {preview.image && (
            <img
              src={preview.image}
              alt={preview.title}
              className="h-64 w-full object-cover"
            />
          )}

          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C1C2E]">
              {preview.siteName}
            </p>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              {preview.title}
            </h2>

            {preview.description && (
              <p className="mt-4 leading-7 text-gray-600">
                {preview.description}
              </p>
            )}

            <a
              href={preview.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-semibold text-[#7C1C2E]"
            >
              Read Original Article →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  ImagePlus,
  Newspaper,
  RefreshCw,
  Trash2,
  Star,
} from "lucide-react";
import { toast } from "react-hot-toast";

const API_URL = "https://shoova-initiation-nf6m.onrender.com";

export default function MediaCoverage() {
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState(null);
  const [featured, setFeatured] = useState(false);

  const [coverage, setCoverage] = useState([]);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loadingCoverage, setLoadingCoverage] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const token = localStorage.getItem("adminToken");

  // ============================================
  // FETCH SAVED MEDIA COVERAGE
  // ============================================

  const fetchCoverage = async () => {
    try {
      setLoadingCoverage(true);

      const response = await fetch(`${API_URL}/media-coverage/admin/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch media coverage");
      }

      setCoverage(data.coverage || []);
    } catch (error) {
      console.error("Fetch media coverage error:", error);
      toast.error(error.message || "Failed to load media coverage");
    } finally {
      setLoadingCoverage(false);
    }
  };

  useEffect(() => {
    fetchCoverage();
  }, []);

  // ============================================
  // FETCH ARTICLE PREVIEW
  // ============================================

  const handleFetchPreview = async () => {
    if (!url.trim()) {
      toast.error("Please enter a news article URL.");
      return;
    }

    setLoadingPreview(true);
    setPreview(null);

    try {
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

      toast.success("Article preview loaded!");
    } catch (error) {
      console.error("Preview error:", error);
      toast.error(error.message || "Could not fetch article preview");
    } finally {
      setLoadingPreview(false);
    }
  };

  // ============================================
  // SAVE COVERAGE
  // ============================================

  const handleSaveCoverage = async () => {
    if (!preview) {
      toast.error("Fetch an article preview first.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(`${API_URL}/media-coverage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          url: preview.url,
          title: preview.title,
          description: preview.description,
          image: preview.image,
          siteName: preview.siteName,
          featured,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save coverage");
      }

      toast.success("Media coverage saved successfully!");

      setUrl("");
      setPreview(null);
      setFeatured(false);

      fetchCoverage();
    } catch (error) {
      console.error("Save coverage error:", error);
      toast.error(error.message || "Failed to save coverage");
    } finally {
      setSaving(false);
    }
  };

  // ============================================
  // DELETE COVERAGE
  // ============================================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this media coverage?"
    );

    if (!confirmed) return;

    setDeletingId(id);

    try {
      const response = await fetch(`${API_URL}/media-coverage/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete coverage");
      }

      toast.success("Media coverage deleted.");

      setCoverage((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Delete coverage error:", error);
      toast.error(error.message || "Failed to delete coverage");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">

      {/* HEADER */}
      <div>
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition mb-4"
        >
          <ArrowLeft size={17} />
          Back to Dashboard
        </Link>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#0f172a] text-white flex items-center justify-center">
            <Newspaper size={24} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Media Coverage
            </h1>

            <p className="text-gray-500 mt-1">
              Add and manage news articles written about Shoova.
            </p>
          </div>
        </div>
      </div>


      {/* ADD COVERAGE */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Add News Coverage
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Paste a link to an article published by another news organization.
          </p>
        </div>


        {/* URL INPUT */}
        <div className="flex flex-col md:flex-row gap-3">

          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.classfmonline.com/..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-500 transition"
          />

          <button
            type="button"
            onClick={handleFetchPreview}
            disabled={loadingPreview}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0f172a] text-white font-semibold hover:bg-[#1e293b] transition disabled:opacity-50"
          >
            {loadingPreview ? (
              <>
                <RefreshCw size={18} className="animate-spin" />
                Fetching...
              </>
            ) : (
              <>
                <ExternalLink size={18} />
                Fetch Preview
              </>
            )}
          </button>

        </div>


        {/* PREVIEW */}
        {preview && (
          <div className="mt-8 border border-gray-200 rounded-2xl overflow-hidden">

            {preview.image && (
              <img
                src={preview.image}
                alt={preview.title}
                className="w-full max-h-[400px] object-cover"
              />
            )}

            <div className="p-6">

              <p className="text-xs font-bold uppercase tracking-widest text-[#7C1C2E]">
                {preview.siteName}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                {preview.title}
              </h3>

              {preview.description && (
                <p className="mt-4 text-gray-600 leading-7">
                  {preview.description}
                </p>
              )}

              <a
                href={preview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#7C1C2E]"
              >
                Read Original Article
                <ExternalLink size={16} />
              </a>


              {/* FEATURED */}
              <label className="flex items-start gap-3 mt-7 cursor-pointer">

                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="mt-1 w-5 h-5"
                />

                <div>
                  <div className="flex items-center gap-2 font-semibold text-gray-800">
                    <Star size={17} />
                    Feature this coverage
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    Give this article priority in the public In the News section.
                  </p>
                </div>

              </label>


              {/* SAVE */}
              <button
                type="button"
                onClick={handleSaveCoverage}
                disabled={saving}
                className="mt-6 px-6 py-3 rounded-xl bg-[#0f172a] text-white font-semibold hover:bg-[#1e293b] transition disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Coverage"}
              </button>

            </div>
          </div>
        )}

      </section>


      {/* SAVED COVERAGE */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Published Coverage
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              News articles currently stored in your media library.
            </p>
          </div>

          <button
            onClick={fetchCoverage}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold hover:bg-gray-50"
          >
            <RefreshCw size={16} />
            Refresh
          </button>

        </div>


        {loadingCoverage ? (
          <div className="py-12 text-center text-gray-500">
            Loading coverage...
          </div>
        ) : coverage.length === 0 ? (
          <div className="py-12 text-center border border-dashed border-gray-300 rounded-xl">
            <Newspaper
              size={32}
              className="mx-auto text-gray-400 mb-3"
            />

            <p className="font-semibold text-gray-700">
              No media coverage yet
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Add your first news article above.
            </p>
          </div>
        ) : (
          <div className="space-y-5">

            {coverage.map((item) => (
              <article
                key={item._id}
                className="flex flex-col md:flex-row gap-5 border border-gray-200 rounded-xl p-4"
              >

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full md:w-48 h-32 rounded-lg bg-gray-100 flex items-center justify-center">
                    <ImagePlus className="text-gray-400" />
                  </div>
                )}


                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="text-xs font-bold uppercase tracking-widest text-[#7C1C2E]">
                      {item.siteName}
                    </span>

                    {item.featured && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full">
                        <Star size={12} />
                        Featured
                      </span>
                    )}

                  </div>

                  <h3 className="mt-2 font-semibold text-lg text-gray-900">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                  )}

                  <div className="flex items-center gap-4 mt-4">

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C1C2E]"
                    >
                      View Article
                      <ExternalLink size={15} />
                    </a>

                    <button
                      onClick={() => handleDelete(item._id)}
                      disabled={deletingId === item._id}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 disabled:opacity-50"
                    >
                      <Trash2 size={15} />
                      {deletingId === item._id ? "Deleting..." : "Delete"}
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>
        )}

      </section>

    </div>
  );
}
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Loader2,
  Newspaper,
} from "lucide-react";

const API_URL = "https://shoova-initiation-nf6m.onrender.com";

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const getExcerpt = (text, length = 160) => {
  if (!text) return "";

  return text.length > length
    ? `${text.substring(0, length).trim()}...`
    : text;
};

export default function ArticlePage() {
  const { slug } = useParams();

  const [story, setStory] = useState(null);
  const [relatedStories, setRelatedStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        setError("");
        setNotFound(false);

        const response = await fetch(
          `${API_URL}/stories/slug/${slug}`
        );

        if (response.status === 404) {
          setNotFound(true);
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch story");
        }

        const data = await response.json();

        if (!data.success || !data.story) {
          setNotFound(true);
          return;
        }

        setStory(data.story);

        // Fetch other published stories for the related section
        try {
          const storiesResponse = await fetch(`${API_URL}/stories`);

          if (storiesResponse.ok) {
            const storiesData = await storiesResponse.json();

            if (storiesData.success) {
              const related = (storiesData.stories || [])
                .filter((item) => item._id !== data.story._id)
                .filter(
                  (item) =>
                    item.category === data.story.category
                )
                .slice(0, 3);

              setRelatedStories(related);
            }
          }
        } catch (relatedError) {
          console.error(
            "Related stories error:",
            relatedError
          );
        }
      } catch (err) {
        console.error("Article fetch error:", err);
        setError("We couldn't load this story right now.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchStory();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FDF6F0] flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#0D1B2A]/60">
          <Loader2
            size={22}
            className="animate-spin"
          />
          <span>Loading story...</span>
        </div>
      </main>
    );
  }

  if (notFound) {
    return (
      <main className="min-h-screen bg-[#FDF6F0] text-[#0D1B2A]">
        <section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 text-center">
          <div>
            <Newspaper
              size={52}
              strokeWidth={1}
              className="mx-auto mb-6 text-[#0D1B2A]/20"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7C1C2E]">
              Story not found
            </p>

            <h1 className="mt-4 font-serif text-4xl md:text-5xl">
              We couldn't find that story.
            </h1>

            <p className="mx-auto mt-5 max-w-lg leading-7 text-[#0D1B2A]/60">
              The story may have been unpublished, moved, or the
              link may be incorrect.
            </p>

            <Link
              to="/stories"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D1B2A] px-6 py-3 text-sm font-semibold text-[#ECD9B0] transition hover:bg-[#7C1C2E]"
            >
              <ArrowLeft size={17} />
              Back to Journal
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (error || !story) {
    return (
      <main className="min-h-screen bg-[#FDF6F0] text-[#0D1B2A]">
        <section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 text-center">
          <div>
            <p className="text-lg font-medium">
              {error || "Something went wrong."}
            </p>

            <Link
              to="/stories"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7C1C2E]"
            >
              <ArrowLeft size={16} />
              Back to Journal
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDF6F0] text-[#0D1B2A]">

      {/* ARTICLE HEADER */}
      <section className="bg-[#0D1B2A]">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-32 md:px-10 md:pb-20 lg:pt-40">
          
          {/* Back link */}
          <Link
            to="/stories"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#ECD9B0]/70 transition hover:text-[#ECD9B0]"
          >
            <ArrowLeft size={16} />
            Back to Journal
          </Link>

          {/* Category */}
          <div className="mb-6">
            <span className="inline-flex rounded-full bg-[#ECD9B0] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0D1B2A]">
              {story.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-5xl font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-7xl">
            {story.title}
          </h1>

          {/* Excerpt */}
          {story.excerpt && (
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
              {story.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <CalendarDays size={15} />
              <span>
                {formatDate(
                  story.publishedAt || story.createdAt
                )}
              </span>
            </div>

            <div className="h-1 w-1 rounded-full bg-white/30" />

            <span>
              By {story.author || "Shoova Initiative"}
            </span>
          </div>
        </div>
      </section>

      {/* COVER IMAGE */}
      {story.coverImage && (
        <section className="mx-auto max-w-7xl px-0 md:px-10 lg:px-16">
          <div className="relative aspect-[16/8] overflow-hidden bg-[#E9DED5] md:rounded-b-2xl">
            <img
              src={story.coverImage}
              alt={story.title}
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      )}

      {/* ARTICLE CONTENT */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20 lg:py-24">

        <div
          className="
            prose
            prose-lg
            max-w-none

            prose-headings:font-serif
            prose-headings:text-[#0D1B2A]

            prose-p:text-[#0D1B2A]/75
            prose-p:leading-8

            prose-a:text-[#7C1C2E]
            prose-a:no-underline
            hover:prose-a:underline

            prose-strong:text-[#0D1B2A]

            prose-blockquote:border-l-[#ECD9B0]
            prose-blockquote:text-[#0D1B2A]/70
            prose-blockquote:font-serif

            prose-ul:text-[#0D1B2A]/75
            prose-ol:text-[#0D1B2A]/75

            prose-img:rounded-xl
          "
        >
          {story.content
            .split(/\n\s*\n/)
            .map((paragraph, index) => {
              const trimmed = paragraph.trim();

              if (!trimmed) return null;

              return (
                <p key={index}>
                  {trimmed}
                </p>
              );
            })}
        </div>
      </article>

      {/* ARTICLE FOOTER */}
      <section className="border-t border-[#0D1B2A]/10">
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-10">

          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C1C2E] transition hover:gap-3"
          >
            <ArrowLeft size={16} />
            Back to Journal
          </Link>

        </div>
      </section>

      {/* RELATED STORIES */}
      {relatedStories.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">

            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7C1C2E]">
                Continue reading
              </p>

              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                More from the Journal
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedStories.map((relatedStory) => (
                <article
                  key={relatedStory._id}
                  className="group"
                >
                  <Link
                    to={`/stories/${relatedStory.slug}`}
                  >
                    <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-[#E9DED5]">
                      {relatedStory.coverImage ? (
                        <img
                          src={relatedStory.coverImage}
                          alt={relatedStory.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Newspaper
                            size={40}
                            strokeWidth={1}
                            className="text-[#0D1B2A]/20"
                          />
                        </div>
                      )}

                      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0D1B2A]">
                        {relatedStory.category}
                      </div>
                    </div>

                    <div className="mb-3 flex items-center gap-2 text-xs text-[#0D1B2A]/45">
                      <CalendarDays size={13} />

                      {formatDate(
                        relatedStory.publishedAt ||
                          relatedStory.createdAt
                      )}
                    </div>

                    <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-[#7C1C2E]">
                      {relatedStory.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#0D1B2A]/60">
                      {getExcerpt(relatedStory.excerpt)}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#7C1C2E]">
                      Read story
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="bg-[#0D1B2A]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 lg:py-24">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ECD9B0]">
            Be part of the movement
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl">
            Restoration begins when we choose to act.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
            Support Shoova's work to restore land, create
            opportunity, and build stronger communities.
          </p>

          <Link
            to="/donate"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ECD9B0] px-7 py-3.5 text-sm font-semibold text-[#0D1B2A] transition hover:bg-white"
          >
            Support the work
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}
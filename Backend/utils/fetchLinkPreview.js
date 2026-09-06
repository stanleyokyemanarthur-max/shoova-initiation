import axios from "axios";
import * as cheerio from "cheerio";

export const fetchLinkPreview = async (url) => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
      maxRedirects: 5,
    });

    const $ = cheerio.load(response.data);

    const getMeta = (property, name) => {
      return (
        $(`meta[property="${property}"]`).attr("content") ||
        $(`meta[name="${name}"]`).attr("content") ||
        ""
      ).trim();
    };

    const title =
      getMeta("og:title", "twitter:title") ||
      $("title").text().trim();

    const description =
      getMeta("og:description", "twitter:description") ||
      getMeta("", "description");

    const image =
      getMeta("og:image", "twitter:image") ||
      getMeta("twitter:image", "");

    const siteName =
      getMeta("og:site_name", "") ||
      new URL(url).hostname.replace(/^www\./, "");

    return {
      success: true,
      preview: {
        url,
        title,
        description,
        image,
        siteName,
      },
    };
  } catch (error) {
    console.error("Link preview error:", error.message);

    throw new Error("Unable to fetch article preview");
  }
};
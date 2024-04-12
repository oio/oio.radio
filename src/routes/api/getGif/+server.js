import { env } from "$env/dynamic/private";
import { error } from "@sveltejs/kit";

const key = env.GIPHY_KEY;

// This function fetches a random gif from Giphy based on the given tag
export async function GET({ url }) {
  // Extract the tag from the query string
  const tag = url.searchParams.get("tag") || "hypnotic";
  const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}&rating=pg-13`;

  try {
    const response = await fetch(giphyURL);
    if (!response.ok) {
      throw error(500, `Failed to fetch GIF from Giphy`);
    }
    const data = await response.json();
    return new Response(JSON.stringify(data.data.images.original.url), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw error(500, `Error fetching GIF: ${err.message}`);
  }
}

<script>
  import staticGif from "$lib/assets/static.gif";
  import Papa from "papaparse";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let isChannelOn = true;
  let isLoaded = false;
  let sheet;
  let counter = 0;
  let backgroundImage = staticGif;

  const gifDuration = 5000;
  const spreadsheetURL =
    "https://docs.google.com/spreadsheets/d/1bqQ9ULoLgHO60ZNRf6ULOkCkLLI56Gak8a2AVL5_P0Y/pub?output=csv";
  const streamURL = "https://a6.asurahosting.com:8000/radio.mp3";

  onMount(async () => {
    // parse spreadsheet
    Papa.parse(spreadsheetURL, {
      download: true,
      header: true,
      complete: async function (results) {
        const data = results.data;
        sheet = data[0];

        const tag = sheet?.gifsTag;
        isChannelOn = sheet.POWER === "ON";

        isLoaded = true;

        if (isChannelOn) {
          setTimeout(async () => {
            backgroundImage = await fetchGif(tag, counter);
          }, 1000);
        }
      },
    });

    // refresh gif every 5 seconds
    setInterval(async () => {
      if (isChannelOn) {
        counter++;
        if (counter % 2 === 0) {
          const tag = sheet?.gifsTag;
          backgroundImage = await fetchGif(tag, counter);
        } else {
          backgroundImage = staticGif;
        }
      }
    }, gifDuration);
  });

  const fetchGif = async (tag, counter) => {
    const response = await fetch(`/api/getGif?tag=${tag}&counter=${counter}`);
    if (response.ok) {
      const gifUrl = await response.text();
      return gifUrl;
    } else {
      console.error("Failed to load GIF");
    }
  };
</script>

<svelte:body style="background-image: url({backgroundImage});" />

<div
  style="background-image: url({backgroundImage});"
  class="fixed w-full h-screen z-0 bg-no-repeat bg-cover bg-center"
></div>

{#if isLoaded}
  <div
    transition:fade
    class="absolute z-10 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-dmono uppercase"
  >
    {#if isChannelOn}
      <h1>
        <a href="https://oio.studio" target="_blank">{sheet?.header || ""}</a>
      </h1>
      <p>{sheet?.subtitle || ""}</p>
      <audio autoplay controls preload="none" type="audio/mp3">
        Your browser does not support the audio element.
        <source src={streamURL} type="audio/mp3" />
      </audio>
      <p>{sheet?.subtext || ""}</p>
    {:else}
      <p>{sheet?.offMessage || ""}</p>
      <p>{sheet?.offSubMessage || ""}</p>
    {/if}
  </div>

  <footer
    transition:fade
    class="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 text-white"
  >
    <p>
      another experiment from your friends at <a
        href="//oio.studio"
        target="_blank">oio</a
      >
    </p>
  </footer>
{/if}

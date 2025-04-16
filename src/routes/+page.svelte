<script>
	import staticGif from '../lib/assets/static.gif';
	import Papa from 'papaparse';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Oio from '$lib/assets/oio.svelte';
	import { offlineMessages } from '$lib';

	let isChannelOn = $state(true);
	let isLoaded = $state(false);
	let sheet = $state(null);
	let counter = $state(0);
	let backgroundImage = $state(staticGif);

	const gifDuration = 5000;
	const spreadsheetURL =
		'https://docs.google.com/spreadsheets/d/1bqQ9ULoLgHO60ZNRf6ULOkCkLLI56Gak8a2AVL5_P0Y/pub?output=csv';
	const streamURL = 'https://a6.asurahosting.com:8000/radio.mp3';

	onMount(async () => {
		// parse spreadsheet
		Papa.parse(spreadsheetURL, {
			download: true,
			header: true,
			complete: async function (results) {
				const data = results.data;
				sheet = data[0];

				const tag = sheet?.gifsTag;
				isChannelOn = sheet.POWER === 'ON';

				isLoaded = true;

				if (isChannelOn) {
					setTimeout(async () => {
						backgroundImage = await fetchGif(tag, counter);
					}, 1000);
				}
			}
		});

		// refresh gif every 5 seconds
		setInterval(async () => {
			if (isChannelOn) {
				// rotate gifs
				counter++;
				if (counter % 2 === 0) {
					const tag = sheet?.gifsTag;
					backgroundImage = await fetchGif(tag, counter);
				} else {
					backgroundImage = staticGif;
				}
			} else {
				// get random offline message
				const randomMessage = offlineMessages[Math.floor(Math.random() * offlineMessages.length)];
				sheet = {
					offMessage: randomMessage[0],
					offSubMessage: randomMessage[1]
				};
			}
		}, gifDuration);
	});

	// fetchGif
	const fetchGif = async (tag, counter) => {
		const response = await fetch(`/api/getGif?tag=${tag}&counter=${counter}`);
		if (response.ok) {
			const gifUrl = await response.text();
			return gifUrl;
		} else {
			console.error('Failed to load GIF');
		}
	};
</script>

<div
	style="background-image: url({backgroundImage});"
	class="fixed z-0 h-screen w-full bg-cover bg-center bg-no-repeat"
></div>

{#if isLoaded}
	<div class="flex h-screen w-full justify-center">
		<div
			transition:fade
			class="relative z-10 inline-flex w-full flex-col items-center justify-between py-6 text-center text-white"
		>
			<div class="w-16">
				<Oio />
			</div>
			<div class="font-dmono relative flex w-full flex-col items-center lowercase">
				{#if isChannelOn}
					<h1>
						<a href="https://oio.studio" target="_blank">{sheet?.header || ''}</a>
					</h1>
					<p>{sheet?.subtitle || ''}</p>
					<audio class="my-4" autoplay controls preload="none" type="audio/mp3">
						Your browser does not support the audio element.
						<source src={streamURL} type="audio/mp3" />
					</audio>
					<p>{sheet?.subtext || ''}</p>
				{:else}
					{#key sheet}
						<div
							class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg"
							in:fade={{ duration: 500, delay: 600 }}
							out:fade={{ duration: 500 }}
						>
							<p>
								<span class="bg-black">
									{sheet?.offMessage || ''}
								</span>
							</p>
							<p>
								<span class="bg-black">
									{sheet?.offSubMessage || ''}
								</span>
							</p>
						</div>
					{/key}
				{/if}
			</div>

			<footer class="font-dmono text-sm">
				<p>
					<span class="bg-black">
						another nice experiment from your friends at <a
							href="//oio.studio"
							class="border-primary-yellow border-b-2"
							target="_blank">oio</a
						>
					</span>
				</p>
			</footer>
		</div>
	</div>
{/if}

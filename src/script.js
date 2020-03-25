document.addEventListener("DOMContentLoaded", function(event) {
	// Initiate gifLoop for set interval
	var refresh;
	// Duration count in seconds
	const duration = 1000 * 3;
	// Giphy API defaults
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
		tag: "trippy",
		type: "random",
		rating: "pg-13"
	};
	// Target gif-wrap container
	const $gif_wrap = document.getElementById("gif-wrap");
	// Giphy API URL
	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.apiKey +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);	

    let newGif = () => {
        fetch(giphyURL)
        .then(res => res.json())
        .then((out) => {
            renderGif(out.data);        
            })
        .catch(err => { throw err });
        }

	// Display Gif in gif wrap container
	var renderGif = _giphy => {		
		// Set gif as bg image
		document.querySelector(".channel").style.backgroundImage =  "url('" + _giphy.image_original_url + "')"

		// Start duration countdown
		refreshRate();
	};

	// Call for new gif after duration
	var refreshRate = () => {
		// Reset set intervals
		clearInterval(refresh);
		refresh = setInterval(function() {            
            // Call Giphy API for new gif
            if (Math.random() > 0.7) 
                newGif();            
            else         
                document.querySelector(".channel").style.backgroundImage =  "url('static.gif')"            
		}, duration);
	};

	// Call Giphy API for new gif
	newGif();
	
	
	// const newGifButton = document.getElementById('new-gif');
	
	// newGifButton.onclick = newGif
});

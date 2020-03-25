import static from "./static.gif"

document.addEventListener("DOMContentLoaded", function(event) {
	// Initiate gifLoop for set interval
    var refresh;
    let counter = 0
	// Duration count in seconds
	const duration = 1000 * 5;
	// Giphy API defaults
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: "q2YzkzhfEzjpkMNrvF5vQP2d8gWQ6rZF",
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
            counter++          
            // Call Giphy API for new gif
            if (counter % 2 == 0) 
                newGif();            
            else         
                document.querySelector(".channel").style.backgroundImage =  "url('" + `${static}` + "')"
		}, duration);
	};

	// Call Giphy API for new gif
	newGif();
	
	
	// const newGifButton = document.getElementById('new-gif');
	
	// newGifButton.onclick = newGif
});

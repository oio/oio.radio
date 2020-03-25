const keys = [
	"q2YzkzhfEzjpkMNrvF5vQP2d8gWQ6rZF",
	"cqIxo6l4eeaYMkLcZPGJnQdMoP5V4zWT",
	"44OyxHJgyRmAz4FCyp9IQf4gMafvSlNR",
	"j7BL2bRNpiil1re1QorRGdrx2fdAUl1M",
	"YTLay1ZytLqLwfPq3spUAtA0dddPjlBi",
	"ukNYGeEVE3lvQjxZglDghcifIOyKCCHc",
	"5MFUOWfllMf4uBQSdt9EU5h3GfA5bTl2",
]

import static from "./static.gif"

const on = false
let counter = 0

document.addEventListener("DOMContentLoaded", function(event) {
	// Initiate gifLoop for set interval
    var refresh;    
	// Duration count in seconds
	const duration = 1000 * 5;
	// Giphy API defaults
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: keys[counter],
		tag: "trippy",
		type: "random",
		rating: "pg-13"
	};		

    let newGif = () => {
		let key = keys[counter]		
		let giphyURL = encodeURI(
			giphy.baseURL +
				giphy.type +
				"?api_key=" +
				key +
				"&tag=" +
				giphy.tag +
				"&rating=" +
				giphy.rating
		);

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

	if (on) 
		// Call Giphy API for new gif
		newGif();
		
});

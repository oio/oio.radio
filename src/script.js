import Tabletop from './tabletop.min.js'

const keys = [
	"q2YzkzhfEzjpkMNrvF5vQP2d8gWQ6rZF",
	"cqIxo6l4eeaYMkLcZPGJnQdMoP5V4zWT",
	"44OyxHJgyRmAz4FCyp9IQf4gMafvSlNR",
	"j7BL2bRNpiil1re1QorRGdrx2fdAUl1M",
	"YTLay1ZytLqLwfPq3spUAtA0dddPjlBi",
	"ukNYGeEVE3lvQjxZglDghcifIOyKCCHc",
	"5MFUOWfllMf4uBQSdt9EU5h3GfA5bTl2",
]

import static from "./ass/static.gif"

let on = false
let counter = 0
let tag = "hypnotic"

document.addEventListener("DOMContentLoaded", function(event) {

	Tabletop.init( {
		key: 'https://docs.google.com/spreadsheets/d/1bqQ9ULoLgHO60ZNRf6ULOkCkLLI56Gak8a2AVL5_P0Y/',
		simpleSheet: true 
	}).then(function(data, tabletop) { 
		
		let sheet = data[0]
		
		tag = sheet.gifsTag		

		if (sheet.POWER === "ON") on = true
		
		if (on) {
			newGif()
			document.getElementById("off").remove()			
			document.querySelector("#on h1 a").innerHTML = sheet.header
			document.querySelector("#on p").innerHTML = sheet.subtitle
			document.querySelector("#on pre").innerHTML = sheet.subtext
			document.querySelector("audio").setAttribute("src", "https://stream.oio.radio/stream")
		}		
		else {
			document.getElementById("on").remove()
			document.querySelector("#off p").innerHTML = sheet.offMessage
			document.querySelector("#off pre").innerHTML = sheet.offSubMessage
		}

		document.querySelector(".all").style.opacity = 1		

	})

	// Initiate gifLoop for set interval
    var refresh;    
	// Duration count in seconds
	const duration = 1000 * 5;
	// Giphy API defaults	
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: keys[counter],
		tag: tag,
		type: "random",
		rating: "pg-13"
	};		

    let newGif = () => {
		let key = keys[counter%keys.length]		
		let giphyURL = encodeURI(
			giphy.baseURL +
				giphy.type +
				"?api_key=" +
				key +
				"&tag=" +
				tag +
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
		// refreshRate();
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

	// document.body.onclick = newGif
		
});
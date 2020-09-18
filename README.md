# [👉 www.oio.radio](https://oio.radio)

# 📡 oio.radio
An open streaming service for the lockdown

![oio radio](https://raw.githubusercontent.com/oio/oio.radio/master/pics/radioe.jpg)



## 🗼 Stream

Anyone can stream on oio radio through a Shoutcast client, such as [Butt](http://danielnoethen.de/butt/).

Streamers can coordinate on the `#oio-radio` channel on Discord for air time.



## 👯‍♀️ Info and background images

The "Backend" of the website is a Google Sheet spreadsheet. 

![oio radio backend](https://raw.githubusercontent.com/oio/oio.radio/master/pics/radio.gif)

From there it's possible to switch ON and OFF the radio and update the relevant streaming information.

In the `gifsTag` column it's possible to set a keyword for the background animations.

You can request edit access on the `#oio-radio` channel on Discord.



## 👩🏻‍💻 Develop

### 🔑🙅🏻‍♀️ Keys not included

You need to get API keys from the [Giphy Developer portal](https://developers.giphy.com/). I suggest to create multiple accounts and get 4/5 different keys, to avoid reaching the API limit.

Then create a `keys.js` file in the `src` folder with just this content:

```
export const keys = [
    // your keys here
    "q2Yzkz...",
    "cqIxo6..."
]
```

### 🏃🏻‍♂️ Run the radio

The app is packaged using Yarn.
You can start by typing 

```
yarn install
```
then 

```
yarn start
```

and build for deployment using

```
yarn build
```

stay stealthy

-matlo
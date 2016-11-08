# WoW Crypt

> World of Warcraft Armory Desktop Application
>>Vue.js & Blizzard's WoW Community API  
>>HTML, CSS, and VueJS 2.0

## Build Setup

```bash
# apikey - you'll need this later
zn2vjjju6qpav96datyqh78smc6s3wax
```

``` bash
# install dependencies
npm install
```
``` bash
# serve with hot reload at localhost:9080
npm run dev
```
``` bash
# build electron app for production
npm run build
```
> Windows:
>>Run Command Prompt as Administrator  
>>--to fix: "Cannot create symlinks; skipping xxxxx platform"

``` bash
# cleans the 'builds' folder
npm run build:clean
# build
npm run build:[win32|darwin|mas|linux]
```
``` bash
# lint all JS/Vue component files in `app/src`
npm run lint
```
``` bash
# run webpack in production
npm run pack
```
## Running
After the app has loaded you will get to the home page.  
On this page you can navigate to subpages

## What can I do

<ul>
  <li>Achievement Lookup</li>
  <li><del>Auction House Data<del></li>
  <li>Boss Lookup</li>
  <li>Character Lookup</li>
  <li>Item Lookup</li>
</ul>

## Todo
```
- implement full API
```
---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about electron-vue can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

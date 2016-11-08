# WoW Crypt

> World of Warcraft Armory Desktop Application
>>Blizzard's WoW Community API  
>>HTML, CSS, and VueJS 2.0

## What can I do

<ul>
  <li>Achievement Lookup</li>
  <li><del>Auction House Data<del></li>
  <li>Boss Lookup</li>
  <li>Character Lookup</li>
  <li>Item Lookup</li>
</ul>

## Downloads
#### [WoWCrypt Downloads](https://github.com/XeonPowder/WoWCrypt/releases)

## Running
After the app has loaded you will get to the home page.  
Before you can use the features you need to have an apikey to access the World of Warcraft API  
via the home page you can navigate to subpages

## API-Key registered with blizzard
```bash
# apikey (you can use this.)
# 100 - Calls per second
# 36,000 - Calls per hour
zn2vjjju6qpav96datyqh78smc6s3wax
```

## Build from Source Code

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

## Todo
```
- implement full API
```
---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about electron-vue can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

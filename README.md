<p align="center">
![](https://cloud.githubusercontent.com/assets/2179775/20145553/23d9a9d2-a666-11e6-83a2-16ad10c6f6ea.png)
<p>
<p align="center">
![alt text](https://img.shields.io/badge/HTML-5-ffa800.svg?style=flat-square)
![alt text](https://img.shields.io/badge/CSS-3-a600ff.svg?style=flat-square)
![alt text](https://img.shields.io/badge/VueJS-2.0.1-00ffb3.svg?style=flat-square)
<p>

<p align="center">
![alt text](https://img.shields.io/badge/vue--router-2.0.0-c2ae00.svg?style=flat-square)
![alt text](https://img.shields.io/badge/vuex-2.0.0-c2ae00.svg?style=flat-square)
![alt text](https://img.shields.io/badge/vue--electron-1.0.0-c2ae00.svg?style=flat-square)
![alt text](https://img.shields.io/badge/vue--resource-1.0.3-c2ae00.svg?style=flat-square)
<p>
<p align="center">
![alt text](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
<p>

<h1 align="center">Table of Contents</h1>
* [___Description___](https://github.com/XeonPowder/WoWCrypt#description)
* [___Downloads___](https://github.com/XeonPowder/WoWCrypt#downloads)
* [___Usage___](https://github.com/XeonPowder/WoWCrypt#usage)
* [___API-Key___](https://github.com/XeonPowder/WoWCrypt#api-key)
* [___Build Source Code___](https://github.com/XeonPowder/WoWCrypt#build-source-code)
* [___Todo___](https://github.com/XeonPowder/WoWCrypt#todo)


<h1 align="center">Description</h1>
> World of Warcraft Armory Desktop Application  
> Blizzard's WoW Community API  
> HTML, CSS, and VueJS 2.0

what is possible?

<ul>
  <li>Achievement Lookup</li>
  <li>Auction House Data</li>
  <li>Boss Lookup</li>
  <li>Character Lookup</li>
  <li>Guild Lookup</li>
  <li>Item Lookup</li>
  <li>Mount Lookup</li>
  <li>Pet Lookup</li>
  <li>PvP Lookup</li>
  <li>Quest Lookup</li>
  <li>Realm Lookup</li>
  <li>Recipe Lookup</li>
  <li>Zone Lookup</li>
</ul>

<h1 align="center">Downloads</h1>
#### [___Releases (Binaries & Source Code)___](https://github.com/XeonPowder/WoWCrypt/releases)


<h1 align="center">Usage</h1>
#### 1.0
Download the [___binary___](https://github.com/XeonPowder/WoWCrypt#wowcrypt-downloads) that fits your operating system and unzip.  
-- or --  
Grab the [___source code___](https://github.com/XeonPowder/WoWCrypt#wowcrypt-downloads) and [___build___](https://github.com/XeonPowder/WoWCrypt#build-from-source-code) the app yourself.
#### 1.1
Open the application  
Go to the settings page  
Input the [___api-key___](https://github.com/XeonPowder/WoWCrypt#api-key) and choose your region



<h1 align="center">API-Key</h1>
```bash
# apikey (you can use this.)
# 100 - Calls per second
# 36,000 - Calls per hour
zn2vjjju6qpav96datyqh78smc6s3wax
```


<h1 align="center">Build Source Code</h1>
#### 1.0

Make sure you have
[___NodeJS___](https://nodejs.org/en/)
#### 1.1
``` bash
# insde of the WoWCrypt directory, install dependencies
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

<h1 align="center">Todo</h1>
```
- Implement full api
- Add exciting features
```
---

This project was generated from [___electron-vue___](https://github.com/SimulatedGREG/electron-vue) ([___Documentation___](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html)) using [___vue-cli___](https://github.com/vuejs/vue-cli).  

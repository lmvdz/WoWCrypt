# Table of Contents
* [Description](https://github.com/XeonPowder/WoWCrypt#description)
* [Downloads](https://github.com/XeonPowder/WoWCrypt#downloads)
* [Usage](https://github.com/XeonPowder/WoWCrypt#usage)
* [API-Key](https://github.com/XeonPowder/WoWCrypt#api-key)
* [Build Source Code](https://github.com/XeonPowder/WoWCrypt#build-source-code)
* [Todo](https://github.com/XeonPowder/WoWCrypt#todo)

# Description
> World of Warcraft Armory Desktop Application  
> Blizzard's WoW Community API  
> HTML, CSS, and VueJS 2.0

what is possible?

<ul>
  <li>Achievement Lookup</li>
  <li><del>Auction House Data<del></li>
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

---

# Downloads
#### [___Releases (Binaries & Source Code)___](https://github.com/XeonPowder/WoWCrypt/releases)

---

# Usage
#### 1.1
Download the [binary](https://github.com/XeonPowder/WoWCrypt#wowcrypt-downloads) that fits your operating system and unzip.  
-- or --  
Grab the [source code](https://github.com/XeonPowder/WoWCrypt#wowcrypt-downloads) and [build](https://github.com/XeonPowder/WoWCrypt#build-from-source-code) the app yourself.
#### 1.2

Open the application  
Go to the settings page  
Input the [api-key](https://github.com/XeonPowder/WoWCrypt#api-key) and choose your region

---

# API-Key
```bash
# apikey (you can use this.)
# 100 - Calls per second
# 36,000 - Calls per hour
zn2vjjju6qpav96datyqh78smc6s3wax
```

---

# Build Source Code
#### 1.0

Make sure you have
[NodeJS](https://nodejs.org/en/)
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

# Todo
```
- implement full API
```
---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about electron-vue can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

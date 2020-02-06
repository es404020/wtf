# Work Around
In this section we would learn how to configure cloud function.


## Pre-configure

If you noticed that your project file lacks `lib/index.js` this is for you, otherwise move to the next topic.


## Configuration

###  step 1 
 Check what version of node you have on your local machine .Use


```
node —version
```
If it is not the same update to  system version by change the node version number on the package .json file

```
 "engines": {
    "node": "system-version"
  },
```

### setp 2

Update your main to src/index.js from 

```
  "main": "lib/index.js", to   "main": "src/index.js",

```

### step 3
Edit  your firebase .json file to 

```
{
  "functions": {
    "predeploy": "npm --prefix functions run build"
  }
}
```
 That all 😀.

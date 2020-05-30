# Electron Playground
This is a repo to try different electron functionalities

## Getting started

1. Clone the repo
```
 git clone https://github.com/kaushikchaubal/electron-playground.git
```

2. Install the dependencies
```
cd electron-playground
npm install
```

3. Run  default config
```
npm start
```

(Optional) 4. Run arbitrary URL
```
<!-- For eg, to load https://www.google.com/ -->
URL=https://www.google.com/ npm start
```

## Functionalities added:

1. Electron packaging (for Linux, Windows and MacOS)
```
<!-- Run the following command -->
electron-packager . --platform=linux,win32,darwin --arch=x64
```



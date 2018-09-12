# Simple demo of Ionic Offline File support

This demo shows how to work with pdf-files on android device and provide offline functionality by downloading files and share them in a folder.

## First Demo - File Chooser with File Opener for PDF

## Second Demo 
1. Download a file to download directory and open it
2. Open an already downloaded file in download directory (when offline)
3. delete that file in download directory

## Third Demo
1. Create a new directoy for this application
2. download PDF into that directory
3. open the PDF from that directory

# System requirements

### Ionic:

   - ionic (Ionic CLI)  : 4.1.2
   - Ionic Framework    : ionic-angular 3.9.2
   - @ionic/app-scripts : 3.2.0

#### Cordova:

   - cordova (Cordova CLI) : not installed
   - Cordova Platforms     : not available
   - Cordova Plugins       : cordova-plugin-ionic-keyboard 2.1.2, 
   - cordova-plugin-ionic-webview 2.1.3, (and 10 other plugins)


### System:

   - NodeJS : v6.7.0 
   - npm    : 3.10.3

# How to build and run the demo
1. Make sure you have the right version of nodejs, npm and ionic already installed. As well you need cordova

```
npm i -g ionic@3.2.0 cordova
```

2. Clone the repo to you local file system

```
cd to-cloned-path
npm install
```

3. Build and run on attached android device

```
ionic cordova run android
```

4. Enjoy on your android device

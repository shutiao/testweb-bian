# 狴犴
开发新测试网站“狴犴”，整合多种JavaScript框架及复杂测试场景  
内网演示地址：http://10.10.68.90:3000/  
公网演示地址：https://bianweb.herokuapp.com  
## To Deploy the Web Server
```sh
git clone https://github.com/SphinxWork/tests.git
cd bian
npm install
chmod +x ./bin/www
```
## To run the Web Server  
The app needs restart everytime source code is updated  
Dependency module doesn't come with the source code, use npm install before restarting  
``` bash
tests$ git pull
cd bian
npm install
./bin/www
```
## Routes Description
Level-1 Name | Function
----------- | --------
/NGJS | AngularJS 1.x Framework Site
/Vue | Vue Framework Site
/Angular | Angular v5 Framework Site
/HTTP | Core Web Use Case - HTTP Module
/HTML | Core Web Use Case - HTML Module
/Misc/HealthCheck | F5/Nginx Heath Check

## Helpful Commands
### Install [Node.js][0] in Ubuntu
``` bash
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
```
### Complie Angular App
```
cd angular-app
ng build
```
### Config Proxy to Speed Up
``` bash
git config --global http.proxy 'socks5://10.10.8.66:1080'
git config --global https.proxy 'socks5://10.10.8.66:1080'
``` 
### Run server in the backend continuously
``` bash
[sudo] npm install forever -g
forever start ./bian/bin/www
```
### Emulate Additional Server Processing Time
``` JavaScript
|--- bian
        └── routes
                └── timeout.js
// the delay is 0 milliseconds to wait before proceeding to next middleware
setTimeout(function(){next();}, 0);
```
## Design and Development
### File Organizing
Folder Name | Function
----------- | --------
bin | bootstrape the web server
app.js | Server-side entry point
routes | Server-side endpoint handler
routes/index.js | Server-side routes entry point
views  | Client-side HTML files
public | Client-side static(js) files

### Organizing Style
+ Keep files encapsualted and bite-size
+ Server Side: Put Each Module in a Separate File for Routing (e.g. NGJS, HTTP)
+ Client Side: Put JS file separate from HTML file

### Test Case Development Code
+ Each Test Case should have an unique number to identify and track. <module-name>-<test-suite>-<case-number>. eg. HTTP-1-1
+ Each Test Case should have a description and expecation attached to it.

### Add a new level-one endpoint
1. /views/partials/nav.html Add hyperlink(/modulename) into the navigation menu
2. Create a separate file (modulenameR.js) in the /routes and add it into routes/index.js
3. /routes/modulenameR.js Add GET/POST handler


[0]: https://nodejs.org/en/download/package-manager/
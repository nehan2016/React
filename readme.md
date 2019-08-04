To install or update nvm, you can use the install script using cURL:

sudo apt-get install curl 

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
or Wget:

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

Note: On Linux, after running the install script, if you get nvm: command not found or see no feedback from your terminal after you type:

command -v nvm
simply close your current terminal, open a new terminal, and try verifying again.

For windows:
download the installer from https://github.com/coreybutler/nvm-windows/releases

To check list of node version installed in your system
nvm list

to install node version in your system

nvm install version-number
ex: nvm install 10.16.1 
or 
nvm install node (to install latest version)

to switch existing version of node in your system
nvm list
nvm use version-number

check the versions
nvm --version
node --version
npm --version

React:

To install react cli module
npm install create-react-app -g
or 
npm install create-react-app

create a project using create-react-app
create-react-app app-name
or
npx create-react-app app-name

After installation 
cd app-name

to run the code
npm start

to install node module from package.json
npm install

to install packages from package-lock.json
npm ci

to build project 
npm run build

you can use below CDN's as well
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.js"></script>
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.js"></script>

# wordpress-webpack-tailwind
Wordpress theme built with tailwindcss and webpack


### What is this repository for? ###

* Wordpress theme with webpack automation
* Automatically compiles scss files into css and bundles it
* Automatically bundles javascript files



### How do I get set up? ###

* Clone to local dir using git command: git clone repo_url
* Change the directory on cmd to yourlocaldir/ 
* In cmd type: yarn install (This will install required plugins for the project) 
* In webpack.config.js change the dir url inside BrowserSyncPlugin (proxy: 'http://virtualhost/')
* In src/js/app.js file change the css/scss and javascript file dir
* Confirm functions.php file changes
* In terminal type 'npm run start' to start compiling
* Use 'npm run build' for production ready files



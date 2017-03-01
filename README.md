## Lightshed
LightShed: Empathy Building Machine. Documentary films made for virtual reality.
## Setup
- We used Yeoman as a scaffolding generator.
- We used Grunt as a build system and Bower as a package manager.
## Toolchain
- To use this toolchain you'll have to install a few things on your machine
- Install npm
- Install grunt cli (command line interface)
- Install grunt
- Install git (if you don't already have it).
- Install Sass
## Git Instructions
From there you *should* be able to clone (or fork) the github repo and build the site locally on your laptop/desktop.  

A series of commands like the following should get you started:
 - git clone https://github.com/ideo-digital-shop/unvr.git (from the directory you'd like to work from)
 - bower install
 - grunt serve

The site should then be running at localhost:3000

To minimize/combine/uglify/etc. use this command:
 - grunt build

Then you'll push the resulting /dist directory up to dreamhost using FTP via instructions Gabo can provide.  

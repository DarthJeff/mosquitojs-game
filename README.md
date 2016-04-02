# mosquitojs-game-loop

Mosquitojs is an extremely light dependency injection library for JavaScript. Inspired by AngularJS, mosquitojs enables the easy creation of modules, controllers and services; thus facilitating clean reusable code within your JavaScript projects.

The mosquitojs-game-loop module utilises mosquitojs to enable the simple integration of a game loop within your mosquito projects.

```html
<script src="mosquito.min.js"></script>
<script src="mosquitojs.gameLoop.min.js"></script>
```

### Bower
```bash
bower install mosquitojs
bower install mosquitojs-game-loop
```

## Module
```bash
gameLoopModule
```
### Other Required Modules
```bash
none
```

## Service
```bash
$gameLoop
```
### Methods
#### currentState
Gets the IsRunning state of the game loop.
```bash
stopped: false
running: true
```
#### start(framesPerSecond)
Start the game loop.
#### restart
Restart the game loop.
#### stop
Stop the the game loop.

## Observable Interface Service
```bash
$IoGameLoop
```
### Methods
#### stateChange
Called when the game loop is started, restarted or stopped. Sends the currentState as a parameter.
#### preUpdate
First method in game loop to be called.
#### update
Main updated method which can be called multiple times within game loop if lagging occours.
#### preRender
Called when updating has completed and just before rendering.
#### render
Last method in game loop to be called.

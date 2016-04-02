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

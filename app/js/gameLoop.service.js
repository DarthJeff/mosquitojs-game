"use strict";

mosquito.module('gameLoopModule').service('$gameLoop', ['$IoGameLoop', function($IoGameLoop) {

    var isRunning = false;
    var fps, mspf, previousTime, currentTime, lagTime, elapsedTime;

    function loop() {
        if(isRunning) {
            window.requestAnimationFrame(loop);
            var currentTime = Date.now();
            elapsedTime = currentTime - previousTime;
            previousTime = currentTime;
            lagTime += elapsedTime;
            $IoGameLoop.next('preUpdate');
            while (lagTime >= mspf && isRunning) {
                lagTime -= mspf;
                $IoGameLoop.next('update');
            }
            $IoGameLoop.next('preRender');
            $IoGameLoop.next('render');
        }
    }

    function start(framesPerSecond) {
        fps = framesPerSecond;
        mspf = 1000 / framesPerSecond;
        restart();
    };

    function restart() {
        if(fps) {
            previousTime = Date.now();
            lagTime = 0.0;
            isRunning = true;
            $IoGameLoop.next('stateChange', true);
            window.requestAnimationFrame(loop);
        }
    };

    function stop() {
        isRunning = false;
        $IoGameLoop.next('stateChange', false);
    };

    this.currentState = isRunning;
    this.start = start;
    this.restart = restart;
    this.stop = stop;
}]);

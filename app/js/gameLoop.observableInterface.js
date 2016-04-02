"use strict";

mosquito.module('gameLoopModule').observableInterface('$IoGameLoop', ['stateChange', 'preUpdate', 'update', 'preRender', 'render']);

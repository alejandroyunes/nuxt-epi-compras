<template>
  <div class="container">
    <div class="shooting">
      <div class="star"></div>
      <div v-for="x in 100" :key="x" :class="'star' + x"></div>
    </div>
    <div class="lens"></div>
    <div class="flash"></div>
    <div class="pPos">
      <div class="pyramid one"></div>
      <div class="pyramid two"></div>
      <div class="pyramid three"></div>
      <div class="lPos">
        <div class="lightTop"></div>
        <div class="lightMid"></div>
        <div class="lightBot">
          <div class="window1"></div>
          <div class="window2"></div>
        </div>
      </div>
    </div>
    <div class="cPos">
      <div class="cc">
        <div class="circle one"></div>
        <div class="circle two"></div>
        <div class="circle three"></div>
        <div class="circle four"></div>
        <div class="circle five"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 160px;
  height: 335px;
  background: #13233C;
  border-radius: 100px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 82px;
    background: linear-gradient(to bottom,  #1D406A 0%, #1D406A 20%, #1B355B 20%, #1B355B 40%, #132A49 40%, #132A49 60%, #101F38 60%, #101F38 80%, #000811 80%, #000811 100%);
  }
}

.lens {
  position: absolute;
  width: 160px;
  height: 335px;
  background: #D6ECED;
  border-radius: 100px;
  z-index: 100;
  opacity: .1;
  transform: translateX(330px);
  animation-name: lens;	
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  transform-style: preserve-3d;
}

@keyframes lens {
  0% {
    transform: translateX(330px);
  }
  100% {
    transform: translateX(-165px);
  }
}

.flash {
  position: absolute;
  width: 150%;
  height: 30px;
  top: 46%;
  left: calc(50% - 120px);
  opacity: .4;
  clip-path: polygon(0 0, 50% 50%, 100% 0, 100% 100%, 50% 50%, 0 100%, 0 0);
  background: linear-gradient(to left, rgba(255,255,255,0) 0%, #FFF 30%, #5D99E0 50%, #FFF 40%, rgba(255,255,255,0) 100%);
  z-index: 90;
  animation-name: flash;	
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-delay: .5s;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
}

@keyframes flash {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.lc {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lPos {
  position: absolute;
  bottom: 0;
  left: calc(50% - 12.5px);
  z-index: 2;
}

.lightBot {
  width: 25px;
  height: 80px;
  clip-path: polygon(0 0, 100% 0, 90% 10%, 100% 100%, 0 100%, 10% 10%);
  background: linear-gradient(to bottom, #FFF 0%,	#FFF 15%,	#E04A28 15%, #E04A28 35%, #FFF 35%, #FFF 45%, #E04A28 45%, #E04A28 65%, #FFF 65%, #FFF 100%);

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    clip-path: polygon(80% 0, 100% 0, 90% 10%, 100% 100%, 70% 100%, 70% 10%);
    background: rgba(0,0,0,.4);
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    clip-path: polygon(30% 0, 80% 0, 70% 10%, 70% 100%, 30% 100%);
    background: rgba(0,0,0,0.2);
  }

  .window1,
  .window2 {
    position: absolute;
    width: 6px;
    height: 10px;
    border-radius: 50% 50% 0 0;
    background: #000;
    left: 9px;
  }

  .window1 {
    top: 40px;
  }

  .window2 {
    top: 64px;
  }
}

.lightMid {
  width: 25px;
  height: 10px;
}

.lightTop {
  width: 18px;
  height: 15px;
  margin: 0 auto;
  clip-path: polygon(50% 0, 60% 40%, 100% 60%, 100% 100%, 0 100%, 0 60%, 40% 40%);
  background: #FFF;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 18px;
    height: 12px;
    background: #E04A28;
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 18px;
    height: 15px;
    clip-path: polygon(50% 0, 60% 40%, 100% 60%, 100% 100%, 50% 60%);
    z-index: 10;
    background: rgba(0,0,0,.4);
  }
}

.pPos {
  position: relative;
  height: 110px;
  width: 100%;
  top: 43%;
  z-index: 15;
}

.pyramid {
  position: absolute;
  bottom: 0;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  background: #DFFAFA;

  &:after {
    content: '';
    display: block;
    margin-left: 50%;
    width: 100%;
    height: 150%;
    transform: rotate(-25deg);
    background:	#98B4BB;
    transform-origin: 0 0;
  }

  &.one {
    width: 95px;
    height: 45px;
    z-index: 4;
  }

  &.two {
    width: 55px;
    height: 25px;
    z-index: 3;
    left: 42%;
  }

  &.three {
    background: #D6ECED;
    width: 135px;
    height: 60px;
    z-index: 1;
    right: -5px;
  }
}

.cPos {
  position: relative;
  top: 18%;
  left: calc(50% - 80px);
  z-index: 9;
}

.cc {
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  position: absolute;
  background: #38659E;
  border-radius: 50%;

  &.one {
    width: 140px;
    height: 140px;
    opacity: .2;
  }

  &.two {
    width: 110px;
    height: 110px;
    opacity: .2;
  }

  &.three {
    width: 80px;
    height: 80px;
    opacity: .2;
  }

  &.four {
    width: 50px;
    height: 50px;
    opacity: .2;
  }

  &.five {
    width: 25px;
    height: 25px;
    opacity: .2;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@for $i from 1 through 100 {
  $size: random(4) + px;
  .star#{$i} {
    position: absolute;
    width: $size;
    height: $size;
    border-radius: 50%;
    background: white;
    top: random(400) - 100 + px;
    left: random(400) - 100 + px;
    opacity: 0;
    animation-name: blink;
    animation-duration: random(2) + 1 + s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
}

.shooting {
  top: 100px;
  left: 100px;
  position: absolute;
  z-index: 200;
  transform: translate3d(300px, -300px, 0);
  animation-name: shooting;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-delay: 3s;
  transform-style: preserve-3d;

  .star {
    width: 3px;
    height: 30px;
    background: linear-gradient(to top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); 
    transform: rotate(55deg);
  }
}

@keyframes shooting {
  0% {
    transform: translate3d(300px, -200px, 0);
  }
  100% {
    transform: translate3d(-300px, 200px, 0);
  }
}

// floof
html, body {
  overflow: hidden;
}

body {
  background: #E6FFFF;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
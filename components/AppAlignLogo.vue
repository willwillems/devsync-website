<template>
  <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="align-icon" stroke="none" stroke-width="1" fill="#FF2C85" fill-rule="evenodd">
        <circle id="background" opacity="0.337983631" cx="30" cy="30" r="30"></circle>
        <rect id="a-1" x="13" y="16" width="34" height="8" rx="4"></rect>
        <rect id="a-2" opacity="0.580171131" x="13" y="26" width="15" height="8" rx="4"></rect>
        <rect id="a-3" opacity="0.500372024" x="13" y="36" width="26" height="8" rx="4"></rect>
    </g>

    <animate 
        xlink:href="#a-2"
        attributeName="x"
        values   = "13 ; 13  ; 32  ; 32  ; 13 "
        keyTimes = "0  ; 0.3 ; 0.5 ; 0.8 ; 1  "
        keySplines="0 0 1 1; .7 0 .3 1; 0 0 1 1; .7 0 .3 1"
        calcMode="spline"
        from="13"
        to="13" 
        dur="3.5s"
        repeatCount="indefinite"
        fill="freeze"
        id="align-2-anim"/>

    <animate 
        xlink:href="#a-3"
        attributeName="x"
        from="13"
        to="13"
        values   = "13 ; 13  ; 21  ; 21  ; 13 "
        keyTimes = "0  ; 0.3 ; 0.5 ; 0.8 ; 1  "
        keySplines="0 0 1 1; .7 0 .3 1; 0 0 1 1; .7 0 .3 1"
        calcMode="spline"
        dur="3.5s"
        repeatCount="indefinite"
        fill="freeze"
        id="align-3-anim"/>
  </svg>
</template>
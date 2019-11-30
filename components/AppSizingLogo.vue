<template>
  <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="sizing-icon" stroke="none" stroke-width="1" fill="#CE51FF" fill-rule="evenodd">
        <circle id="background" opacity="0.38" cx="30" cy="30" r="30"></circle>
        <rect id="rect" x="13" y="13" width="34" height="34" rx="4"></rect>
    </g>
    <animate 
        xlink:href="#rect"
        attributeName="width"
        values   = "13 ; 13  ; 34  ; 34  ; 13 "
        keyTimes = "0  ; 0.3 ; 0.5 ; 0.8 ; 1  "
        keySplines="0 0 1 1; .7 0 .3 1; 0 0 1 1; .7 0 .3 1"
        calcMode="spline"
        from="13"
        to="13" 
        dur="2.5s"
        repeatCount="indefinite"
        fill="freeze"
        id="align-2-anim"/>

    <animate 
        xlink:href="#rect"
        attributeName="height"
        from="13"
        to="13"
        values   = "13 ; 13  ; 34  ; 34  ; 13 "
        keyTimes = "0  ; 0.3 ; 0.5 ; 0.8 ; 1  "
        keySplines="0 0 1 1; .7 0 .3 1; 0 0 1 1; .7 0 .3 1"
        calcMode="spline"
        dur="2.5s"
        repeatCount="indefinite"
        fill="freeze"
        id="align-3-anim"/>
  </svg>
</template>
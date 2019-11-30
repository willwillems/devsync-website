<template>
  <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="position-icon" stroke="none" stroke-width="1" fill="#1E9AFF" fill-rule="evenodd">
        <circle id="background" opacity="0.337983631" cx="30" cy="30" r="30"></circle>
        <rect id="el" x="13" y="13" width="13" height="13" rx="4"></rect>
        <path d="M30,13 C30.5522847,13 31,13.4477153 31,14 L31,29 L46,29 C46.5522847,29 47,29.4477153 47,30 C47,30.5522847 46.5522847,31 46,31 L31,31 L31,46 C31,46.5522847 30.5522847,47 30,47 C29.4477153,47 29,46.5522847 29,46 L29,31 L14,31 C13.4477153,31 13,30.5522847 13,30 C13,29.4477153 13.4477153,29 14,29 L29,29 L29,14 C29,13.4477153 29.4477153,13 30,13 Z" id="axis" opacity="0.2"></path>
        <rect id="bt" opacity="0.3" x="23" y="7" width="14" height="2" rx="1"></rect>
        <rect id="bb" opacity="0.3" x="23" y="51" width="14" height="2" rx="1"></rect>
        <rect id="br" opacity="0.3" x="51" y="23" width="2" height="14" rx="1"></rect>
        <rect id="bl" opacity="0.3" x="7" y="23" width="2" height="14" rx="1"></rect>
    </g>
    <animate 
        xlink:href="#el"
        attributeName="x"
        values   = "13      ; 13        ; 34      ; 34        ; 23.5    ; 23.5      ; 23.5    ; 23.5      ; 13      "
        keyTimes = "0       ; 0.15      ; 0.25    ; 0.35      ; 0.45     ; 0.65      ; 0.75    ; 0.9       ; 1       "
        keySplines="0 0 1 1 ; .7 0 .3 1 ; 0 0 1 1 ; .7 0 .3 1 ; 0 0 1 1 ; .7 0 .3 1 ; 0 0 1 1 ; .7 0 .3 1 "
        calcMode="spline"
        from="13"
        to="13" 
        dur="6s"
        repeatCount="indefinite"
        fill="freeze"
        id="align-2-anim"/>

    <animate 
        xlink:href="#el"
        attributeName="y"
        from="13"
        to="13"
        values   = "13      ; 13        ; 34      ; 34        ; 34      ; 34        ; 13      ; 13        ; 13      "
        keyTimes = "0       ; 0.15      ; 0.25    ; 0.35      ; 0.45    ; 0.65      ; 0.75    ; 0.9       ; 1       "
        keySplines="0 0 1 1 ; .7 0 .3 1 ; 0 0 1 1 ; .7 0 .3 1 ; 0 0 1 1 ; .7 0 .3 1 ; 0 0 1 1 ; .7 0 .3 1 "
        calcMode="spline"
        dur="3s"
        repeatCount="indefinite"
        fill="freeze"
        id="align-3-anim"/>
  </svg>
</template>
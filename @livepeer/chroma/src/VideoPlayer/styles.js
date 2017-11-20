import { injectGlobal } from 'styled-components'
let injected = false
export default () => {
  if (injected) return
  injected = true
  injectGlobal`
  .video-react .video-react-big-play-button:before, .video-react .video-react-control:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
  }
  .video-react .video-react-big-play-button:before, .video-react .video-react-control:before {
    text-align: center
  }
  @font-face {
    font-family: "video-react";
    src: url(data:application/vnd.ms-fontobject;base64,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?#iefix) format("eot")
  }
  @font-face {
    font-family: "video-react";
    src: url(data:application/font-woff;base64,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) format("woff"), url(data:application/x-font-ttf;base64,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) format("truetype");
    font-weight: normal;
    font-style: normal
  }
  .video-react-icon, .video-react .video-react-big-play-button, .video-react .video-react-mouse-display, .video-react .video-react-play-progress, .video-react .video-react-play-control, .video-react .video-react-mute-control, .video-react .video-react-volume-menu-button, .video-react .video-react-volume-level, .video-react .video-react-bezel .video-react-bezel-icon {
    font-family: 'video-react' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }
  .video-react-icon-play-arrow:before, .video-react .video-react-big-play-button:before, .video-react .video-react-play-control:before, .video-react .video-react-bezel .video-react-bezel-icon-play:before {
    content: "\\F200"
  }
  .video-react-icon-play-circle-filled:before {
    content: "\\F201"
  }
  .video-react-icon-play-circle-outline:before {
    content: "\\F202"
  }
  .video-react-icon-pause:before, .video-react .video-react-play-control.video-react-playing:before, .video-react .video-react-bezel .video-react-bezel-icon-pause:before {
    content: "\\F203"
  }
  .video-react-icon-pause-circle-filled:before {
    content: "\\F204"
  }
  .video-react-icon-pause-circle-outline:before {
    content: "\\F205"
  }
  .video-react-icon-stop:before {
    content: "\\F206"
  }
  .video-react-icon-fast-rewind:before, .video-react .video-react-bezel .video-react-bezel-icon-fast-rewind:before {
    content: "\\F207"
  }
  .video-react-icon-fast-forward:before, .video-react .video-react-bezel .video-react-bezel-icon-fast-forward:before {
    content: "\\F208"
  }
  .video-react-icon-skip-previous:before {
    content: "\\F209"
  }
  .video-react-icon-skip-next:before {
    content: "\\F20A"
  }
  .video-react-icon-replay-5:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-5:before {
    content: "\\F20B"
  }
  .video-react-icon-replay-10:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-10:before {
    content: "\\F20C"
  }
  .video-react-icon-replay-30:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-30:before {
    content: "\\F20D"
  }
  .video-react-icon-forward-5:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-5:before {
    content: "\\F20E"
  }
  .video-react-icon-forward-10:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-10:before {
    content: "\\F20F"
  }
  .video-react-icon-forward-30:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-30:before {
    content: "\\F210"
  }
  .video-react-icon-volume-off:before, .video-react .video-react-mute-control.video-react-vol-muted:before, .video-react .video-react-volume-menu-button.video-react-vol-muted:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-off:before {
    content: "\\F211"
  }
  .video-react-icon-volume-mute:before, .video-react .video-react-mute-control.video-react-vol-0:before, .video-react .video-react-volume-menu-button.video-react-vol-0:before {
    content: "\\F212"
  }
  .video-react-icon-volume-down:before, .video-react .video-react-mute-control.video-react-vol-1:before, .video-react .video-react-volume-menu-button.video-react-vol-1:before, .video-react .video-react-mute-control.video-react-vol-2:before, .video-react .video-react-volume-menu-button.video-react-vol-2:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-down:before {
    content: "\\F213"
  }
  .video-react-icon-volume-up:before, .video-react .video-react-mute-control:before, .video-react .video-react-volume-menu-button:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-up:before {
    content: "\\F214"
  }
  .video-react-icon-fullscreen:before {
    content: "\\F215"
  }
  .video-react-icon-fullscreen-exit:before {
    content: "\\F216"
  }
  .video-react-icon-closed-caption:before {
    content: "\\F217"
  }
  .video-react-icon-hd:before {
    content: "\\F218"
  }
  .video-react-icon-settings:before {
    content: "\\F219"
  }
  .video-react-icon-share:before {
    content: "\\F21A"
  }
  .video-react-icon-info:before {
    content: "\\F21B"
  }
  .video-react-icon-info-outline:before {
    content: "\\F21C"
  }
  .video-react-icon-close:before {
    content: "\\F21D"
  }
  .video-react-icon-circle:before, .video-react .video-react-mouse-display:before, .video-react .video-react-play-progress:before, .video-react .video-react-volume-level:before {
    content: "\\F21E"
  }
  .video-react-icon-circle-outline:before {
    content: "\\F21F"
  }
  .video-react-icon-circle-inner-circle:before {
    content: "\\F220"
  }
  .video-react {
    display: block;
    vertical-align: top;
    box-sizing: border-box;
    color: #fff;
    background-color: #000;
    position: relative;
    font-size: 10px;
    line-height: 1;
    font-family: helvetica, arial, sans-serif;
    user-select: none;
    outline: none;
  }
  .video-react:-moz-full-screen {
    position: absolute
  }
  .video-react:-webkit-full-screen {
    width: 100% !important;
    height: 100% !important
  }
  .video-react *, .video-react *:before, .video-react *:after {
    box-sizing: inherit
  }
  .video-react ul {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    list-style-position: outside;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0
  }
  .video-react.video-react-fluid, .video-react.video-react-16-9, .video-react.video-react-4-3 {
    width: 100%;
    max-width: 100%;
    height: 0
  }
  .video-react.video-react-16-9 {
    padding-top: 56.25%
  }
  .video-react.video-react-4-3 {
    padding-top: 75%
  }
  .video-react.video-react-fill {
    width: 100%;
    height: 100%
  }
  .video-react .video-react-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
  }
  .video-react.video-react-fullscreen {
    width: 100% !important;
    height: 100% !important;
    padding-top: 0 !important
  }
  .video-react.video-react-fullscreen.video-react-user-inactive {
    cursor: none
  }
  body.video-react-full-window {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow-y: auto
  }
  body.video-react-full-window .video-react-fullscreen {
    position: fixed;
    overflow: hidden;
    z-index: 1000;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0
  }
  .video-react button {
    background: none;
    border: none;
    color: inherit;
    display: inline-block;
    cursor: pointer;
    overflow: visible;
    font-size: inherit;
    line-height: inherit;
    text-transform: none;
    text-decoration: none;
    transition: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
  }
  .video-react .video-react-loading-spinner {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    opacity: 0.85;
    text-align: left;
    border: 6px solid rgba(43, 51, 63, 0.7);
    box-sizing: border-box;
    background-clip: padding-box;
    width: 50px;
    height: 50px;
    border-radius: 25px
  }
  .video-react .video-react-loading-spinner:before, .video-react .video-react-loading-spinner:after {
    content: "";
    position: absolute;
    margin: -6px;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 1;
    border: inherit;
    border-color: transparent;
    border-top-color: white;
    -webkit-animation: video-react-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, video-react-spinner-fade 1.1s linear infinite;
    animation: video-react-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, video-react-spinner-fade 1.1s linear infinite
  }
  .video-react-seeking .video-react-loading-spinner, .video-react-waiting .video-react-loading-spinner {
    display: block
  }
  .video-react-seeking .video-react-loading-spinner:before, .video-react-waiting .video-react-loading-spinner:before {
    border-top-color: #fff
  }
  .video-react-seeking .video-react-loading-spinner:after, .video-react-waiting .video-react-loading-spinner:after {
    border-top-color: #fff;
    -webkit-animation-delay: 0.44s;
    animation-delay: 0.44s
  }
  @keyframes video-react-spinner-spin {
    100% {
      transform: rotate(360deg)
    }
  }
  @-webkit-keyframes video-react-spinner-spin {
    100% {
      -webkit-transform: rotate(360deg)
    }
  }
  @keyframes video-react-spinner-fade {
    0% {
      border-top-color: #73859f
    }
    20% {
      border-top-color: #73859f
    }
    35% {
      border-top-color: white
    }
    60% {
      border-top-color: #73859f
    }
    100% {
      border-top-color: #73859f
    }
  }
  @-webkit-keyframes video-react-spinner-fade {
    0% {
      border-top-color: #73859f
    }
    20% {
      border-top-color: #73859f
    }
    35% {
      border-top-color: white
    }
    60% {
      border-top-color: #73859f
    }
    100% {
      border-top-color: #73859f
    }
  }
  .video-react .video-react-big-play-button {
    font-size: 3em;
    line-height: 2;
    height: 64px;
    width: 64px;
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 0;
    cursor: pointer;
    opacity: 1;
    border: 0.06666em solid #fff;
    background-color: rgba(43, 51, 63, 0.7);
    border-radius: 50%;
    transition: all 0.4s
  }
  .video-react .video-react-big-play-button.video-react-big-play-button-center {
    top: 50%;
    left: 50%;
    margin-top: -.75em;
    margin-left: -1.5em
  }
  .video-react .video-react-big-play-button.big-play-button-hide {
    display: none
  }
  .video-react:hover .video-react-big-play-button, .video-react .video-react-big-play-button:focus {
    outline: 0;
    border-color: #fff;
    background-color: #73859f;
    background-color: rgba(115, 133, 159, 0.5);
    -webkit-transition: all 0s;
    -moz-transition: all 0s;
    -o-transition: all 0s;
    transition: all 0s
  }
  .video-react-menu-button {
    cursor: pointer
  }
  .video-react-menu-button.video-react-disabled {
    cursor: default
  }
  .video-react-menu .video-react-menu-content {
    display: block;
    padding: 0;
    margin: 0;
    overflow: auto;
    font-family: helvetica, arial, sans-serif;
  }
  .video-react-menu li {
    list-style: none;
    margin: 0;
    padding: 0.2em 0;
    line-height: 1.4em;
    font-size: 1.2em;
    text-align: center;
    text-transform: lowercase
  }
  .video-react-menu li:focus, .video-react-menu li:hover {
    outline: 0;
    background-color: #73859f;
    background-color: rgba(115, 133, 159, 0.5)
  }
  .video-react-menu li.video-react-selected, .video-react-menu li.video-react-selected:focus, .video-react-menu li.video-react-selected:hover {
    background-color: #fff;
    color: #2B333F
  }
  .video-react-menu li.vjs-menu-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 1em;
    line-height: 2em;
    padding: 0;
    margin: 0 0 0.3em 0;
    font-weight: bold;
    cursor: default
  }
  .video-react-scrubbing .vjs-menu-button:hover .video-react-menu {
    display: none
  }
  .video-react .video-react-menu-button-popup .video-react-menu {
    display: none;
    position: absolute;
    bottom: 0;
    width: 10em;
    left: -3em;
    height: 0em;
    margin-bottom: 1.5em;
    border-top-color: rgba(43, 51, 63, 0.7)
  }
  .video-react .video-react-menu-button-popup .video-react-menu .video-react-menu-content {
    background-color: #2B333F;
    background-color: rgba(43, 51, 63, 0.7);
    position: absolute;
    width: 100%;
    bottom: 1.5em;
    max-height: 15em
  }
  .video-react-menu-button-popup .video-react-menu.video-react-lock-showing {
    display: block
  }
  .video-react .video-react-menu-button-inline {
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    overflow: hidden
  }
  .video-react .video-react-menu-button-inline:before {
    width: 2.222222222em
  }
  .video-react .video-react-menu-button-inline:hover, .video-react .video-react-menu-button-inline:focus, .video-react .video-react-menu-button-inline.video-react-slider-active {
    width: 12em
  }
  .video-react .video-react-menu-button-inline:hover .video-react-menu, .video-react .video-react-menu-button-inline:focus .video-react-menu, .video-react .video-react-menu-button-inline.video-react-slider-active .video-react-menu {
    display: block;
    opacity: 1
  }
  .video-react .video-react-menu-button-inline.video-react-slider-active {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none
  }
  .video-react .video-react-menu-button-inline .video-react-menu {
    opacity: 0;
    height: 100%;
    width: auto;
    position: absolute;
    left: 4em;
    top: 0;
    padding: 0;
    margin: 0;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s
  }
  .video-react .video-react-menu-button-inline .video-react-menu-content {
    width: auto;
    height: 100%;
    margin: 0;
    overflow: hidden
  }
  .video-react-no-flex .video-react-menu-button-inline .video-react-menu {
    display: block;
    opacity: 1;
    position: relative;
    width: auto
  }
  .video-react-no-flex .video-react-menu-button-inline:hover, .video-react-no-flex .video-react-menu-button-inline:focus, .video-react-no-flex .video-react-menu-button-inline.video-react-slider-active {
    width: auto
  }
  .video-react .video-react-poster {
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    background-color: #000000;
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%
  }
  .video-react .video-react-poster img {
    display: block;
    vertical-align: middle;
    margin: 0 auto;
    max-height: 100%;
    padding: 0;
    width: 100%
  }
  .video-react .video-react-slider {
    outline: 0;
    position: relative;
    cursor: pointer;
    padding: 0;
    margin: 0 0.45em 0 0.45em;
    background-color: #73859f;
    background-color: rgba(115, 133, 159, 0.5)
  }
  .video-react .video-react-slider:focus {
    text-shadow: 0em 0em 1em #fff;
    -webkit-box-shadow: 0 0 1em #fff;
    -moz-box-shadow: 0 0 1em #fff;
    box-shadow: 0 0 1em #fff
  }
  .video-react .video-react-control {
    outline: none;
    position: relative;
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 4em;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none
  }
  .video-react .video-react-control:before {
    font-size: 1.8em;
    line-height: 1.67
  }
  .video-react .video-react-control:focus:before, .video-react .video-react-control:hover:before, .video-react .video-react-control:focus {
    text-shadow: 0em 0em 1em #fff
  }
  .video-react .video-react-control-text {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px
  }
  .video-react-no-flex .video-react-control {
    display: table-cell;
    vertical-align: middle
  }
  .video-react .video-react-control-bar {
    display: none;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3.0em;
    background: linear-gradient(to top, rgba(43,51,63,1) -25%, transparent);
  }
  .video-react-has-started .video-react-control-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    visibility: visible;
    opacity: 1;
    -webkit-transition: visibility 0.1s, opacity 0.1s;
    -moz-transition: visibility 0.1s, opacity 0.1s;
    -o-transition: visibility 0.1s, opacity 0.1s;
    transition: visibility 0.1s, opacity 0.1s
  }
  .video-react-has-started.video-react-user-inactive.video-react-playing .video-react-control-bar.video-react-control-bar-auto-hide {
    visibility: visible;
    opacity: 0;
    -webkit-transition: visibility 1s, opacity 1s;
    -moz-transition: visibility 1s, opacity 1s;
    -o-transition: visibility 1s, opacity 1s;
    transition: visibility 1s, opacity 1s
  }
  .video-react-controls-disabled .video-react-control-bar, .video-react-using-native-controls .video-react-control-bar, .video-react-error .video-react-control-bar {
    display: none !important
  }
  .video-react-audio.video-react-has-started.video-react-user-inactive.video-react-playing .video-react-control-bar {
    opacity: 1;
    visibility: visible
  }
  .video-react-has-started.video-react-no-flex .video-react-control-bar {
    display: table
  }
  .video-react .video-react-progress-control {
    -webkit-box-flex: auto;
    -moz-box-flex: auto;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 4em
  }
  .video-react-live .video-react-progress-control {
    display: none
  }
  .video-react .video-react-progress-holder {
    -webkit-box-flex: auto;
    -moz-box-flex: auto;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    height: 0.3em
  }
  .video-react .video-react-progress-control:hover .video-react-progress-holder {
    font-size: 1.666666666666666666em
  }
  .video-react .video-react-progress-control:hover .video-react-time-tooltip, .video-react .video-react-progress-control:hover .video-react-mouse-display:after, .video-react .video-react-progress-control:hover .video-react-play-progress:after {
    visibility: visible;
    font-size: 0.6em;
  }
  .video-react .video-react-progress-holder .video-react-play-progress, .video-react .video-react-progress-holder .video-react-load-progress, .video-react .video-react-progress-holder .video-react-tooltip-progress-bar, .video-react .video-react-progress-holder .video-react-load-progress div {
    position: absolute;
    display: block;
    height: 0.3em;
    margin: 0;
    padding: 0;
    width: 0;
    left: 0;
    top: 0
  }
  .video-react .video-react-mouse-display:before {
    display: none
  }
  .video-react .video-react-play-progress {
    background-color: #fff
  }
  .video-react .video-react-play-progress:before {
    position: absolute;
    top: -0.333333333333333em;
    right: -0.5em;
    font-size: 0.9em
  }
  .video-react .video-react-time-tooltip, .video-react .video-react-mouse-display:after, .video-react .video-react-play-progress:after {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    top: -3.4em;
    right: -1.9em;
    font-size: 0.9em;
    font-family: helvetica, arial, sans-serif;
    color: #000;
    content: attr(data-current-time);
    padding: 6px 8px 8px 8px;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-border-radius: .3em;
    -moz-border-radius: .3em;
    border-radius: .3em
  }
  .video-react .video-react-time-tooltip, .video-react .video-react-play-progress:before, .video-react .video-react-play-progress:after {
    z-index: 1
  }
  .video-react .video-react-progress-control .video-react-keep-tooltips-inside:after {
    display: none
  }
  .video-react .video-react-load-progress {
    background: #bfc7d3;
    background: rgba(115, 133, 159, 0.5)
  }
  .video-react .video-react-load-progress div {
    background: #fff;
    background: rgba(115, 133, 159, 0.75)
  }
  .video-react.video-react-no-flex .video-react-progress-control {
    width: auto
  }
  .video-react .video-react-time-tooltip {
    display: inline-block;
    height: 2.4em;
    position: relative;
    float: right;
    right: -1.9em
  }
  .video-react .video-react-tooltip-progress-bar {
    visibility: hidden
  }
  .video-react .video-react-progress-control .video-react-mouse-display {
    display: none;
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: #000;
    z-index: 1
  }
  .video-react-no-flex .video-react-progress-control .video-react-mouse-display {
    z-index: 0
  }
  .video-react .video-react-progress-control:hover .video-react-mouse-display {
    display: block
  }
  .video-react.video-react-user-inactive .video-react-progress-control .video-react-mouse-display, .video-react.video-react-user-inactive .video-react-progress-control .video-react-mouse-display:after {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: visibility 1s, opacity 1s;
    -moz-transition: visibility 1s, opacity 1s;
    -o-transition: visibility 1s, opacity 1s;
    transition: visibility 1s, opacity 1s
  }
  .video-react.video-react-user-inactive.video-react-no-flex .video-react-progress-control .video-react-mouse-display, .video-react.video-react-user-inactive.video-react-no-flex .video-react-progress-control .video-react-mouse-display:after {
    display: none
  }
  .video-react .video-react-mouse-display .video-react-time-tooltip, .video-react .video-react-progress-control .video-react-mouse-display:after {
    font-family: helvetica, arial, sans-serif;
    color: #fff;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.8)
  }
  .video-react .video-react-play-control {
    cursor: pointer;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none
  }
  .video-react .video-react-fullscreen-control {
    cursor: pointer;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none
  }
  .video-react.video-react-fullscreen {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9999
  }
  .video-react .video-react-time-control {
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    font-size: 1em;
    line-height: 3em;
    min-width: 2em;
    width: auto;
    padding-left: 1em;
    padding-right: 1em
  }
  .video-react .video-react-time-divider {
    line-height: 3em;
    min-width: initial;
    padding: 0
  }
  .video-react .video-react-mute-control, .video-react .video-react-volume-menu-button {
    cursor: pointer;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none
  }
  .video-react .video-react-volume-control {
    width: 5em;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
  }
  .video-react .video-react-volume-bar {
    margin: 1.35em 0.45em
  }
  .video-react .video-react-volume-bar.video-react-slider-horizontal {
    width: 5em;
    height: 0.3em
  }
  .video-react .video-react-volume-bar.video-react-slider-horizontal .video-react-volume-level {
    width: 100%
  }
  .video-react .video-react-volume-bar.video-react-slider-vertical {
    width: 0.3em;
    height: 5em;
    margin: 1.35em auto
  }
  .video-react .video-react-volume-bar.video-react-slider-vertical .video-react-volume-level {
    height: 100%
  }
  .video-react .video-react-volume-level {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff
  }
  .video-react .video-react-volume-level:before {
    position: absolute;
    font-size: 0.9em
  }
  .video-react .video-react-slider-vertical .video-react-volume-level {
    width: 0.3em
  }
  .video-react .video-react-slider-vertical .video-react-volume-level:before {
    top: -0.5em;
    left: -0.3em
  }
  .video-react .video-react-slider-horizontal .video-react-volume-level {
    height: 0.3em
  }
  .video-react .video-react-slider-horizontal .video-react-volume-level:before {
    top: -0.3em;
    right: -0.5em
  }
  .video-react .video-react-menu-button-popup.video-react-volume-menu-button .video-react-menu {
    display: block;
    width: 0;
    height: 0;
    border-top-color: transparent
  }
  .video-react .video-react-menu-button-popup.video-react-volume-menu-button-vertical .video-react-menu {
    left: 0.5em;
    height: 8em
  }
  .video-react .video-react-menu-button-popup.video-react-volume-menu-button-horizontal .video-react-menu {
    left: -2em
  }
  .video-react .video-react-menu-button-popup.video-react-volume-menu-button .video-react-menu-content {
    height: 0;
    width: 0;
    overflow-x: hidden;
    overflow-y: hidden
  }
  .video-react .video-react-volume-menu-button-vertical:hover .video-react-menu-content, .video-react .video-react-volume-menu-button-vertical:focus .video-react-menu-content, .video-react .video-react-volume-menu-button-vertical.video-react-slider-active .video-react-menu-content, .video-react .video-react-volume-menu-button-vertical .video-react-lock-showing .video-react-menu-content {
    height: 8em;
    width: 2.9em
  }
  .video-react .video-react-volume-menu-button-horizontal:hover .video-react-menu-content, .video-react .video-react-volume-menu-button-horizontal:focus .video-react-menu-content, .video-react .video-react-volume-menu-button-horizontal .video-react-slider-active .video-react-menu-content, .video-react .video-react-volume-menu-button-horizontal .video-react-lock-showing .video-react-menu-content {
    height: 2.9em;
    width: 8em
  }
  .video-react .video-react-volume-menu-button.video-react-menu-button-inline .video-react-menu-content {
    background-color: transparent !important
  }
  .video-react .video-react-playback-rate .video-react-playback-rate-value {
    line-height: 3em;
    text-align: center
  }
  .video-react .video-react-playback-rate .video-react-menu {
    width: 4em;
    left: 0em
  }
  .video-react .video-react-bezel {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 52px;
    height: 52px;
    z-index: 17;
    margin-left: -26px;
    margin-top: -26px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 26px
  }
  .video-react .video-react-bezel.video-react-bezel-animation {
    -moz-animation: video-react-bezel-fadeout .5s linear 1 normal forwards;
    -webkit-animation: video-react-bezel-fadeout .5s linear 1 normal forwards;
    animation: video-react-bezel-fadeout .5s linear 1 normal forwards;
    pointer-events: none
  }
  .video-react .video-react-bezel.video-react-bezel-animation-alt {
    -moz-animation: video-react-bezel-fadeout-alt .5s linear 1 normal forwards;
    -webkit-animation: video-react-bezel-fadeout-alt .5s linear 1 normal forwards;
    animation: video-react-bezel-fadeout-alt .5s linear 1 normal forwards;
    pointer-events: none
  }
  .video-react .video-react-bezel .video-react-bezel-icon {
    width: 36px;
    height: 36px;
    margin: 8px;
    font-size: 26px;
    line-height: 36px;
    text-align: center
  }
  @keyframes video-react-bezel-fadeout {
    0% {
      opacity: 1
    }
    to {
      opacity: 0;
      transform: scale(2)
    }
  }
  @keyframes video-react-bezel-fadeout-alt {
    0% {
      opacity: 1
    }
    to {
      opacity: 0;
      transform: scale(2)
    }
  }
`
}

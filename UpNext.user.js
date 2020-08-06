// ==UserScript==
// @name          UpNext In One 
// @version       0.1
// @description   Loads Next Page Through Ajax
// @grant         unsafeWindow
// @run-at        document-start
// @match         http://*
// @match         https://*
// @include       https://*
// @updateURL     https://github.com/ah-wn/UpNext/raw/master/UpNext.user.js
// @downloadURL   https://github.com/ah-wn/UpNext/raw/master/UpNext.user.js
// ==/UserScript==

const UpNext = {
  isScrollAtEnd:()=>{
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const scrolledToBottom = (scrollTop + window.innerHeight) >= scrollHeight-1;
        return scrolledToBottom;
    },
  onScrollAtEnd: function(run){
    const that = this

    return window.addEventListener("scroll", function(){
      if(that.isScrollAtEnd()){
        run();
      }
  }, false)},// function required for "this"
};

let i = 0, latch = false;
UpNext.onScrollAtEnd(()=>{
  latch = true;
  console.log('@ end', i++, "times.");
  latch = false;
})

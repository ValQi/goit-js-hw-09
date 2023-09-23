!function(){let t=null,e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");e.addEventListener("click",()=>{e.disabled=!0,d.disabled=!1,t=setInterval(()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3)}),d.addEventListener("click",()=>{e.disabled=!1,d.disabled=!0,clearInterval(t)})}();//# sourceMappingURL=01-color-switcher.eaea66f7.js.map

//# sourceMappingURL=01-color-switcher.eaea66f7.js.map

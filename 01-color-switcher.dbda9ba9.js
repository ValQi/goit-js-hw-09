!function(){let e=null,t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");t.addEventListener("click",()=>{t.disabled=!0,d.disabled=!1,e=setInterval(()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3)}),d.addEventListener("click",()=>{t.disabled=!1,d.disabled=!0,clearInterval(e)})}();//# sourceMappingURL=01-color-switcher.dbda9ba9.js.map

//# sourceMappingURL=01-color-switcher.dbda9ba9.js.map

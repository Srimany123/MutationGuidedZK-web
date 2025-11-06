
(function(){
  const root = document.documentElement;
  const key = "zk-theme";
  function apply(t){ root.setAttribute("data-theme", t); localStorage.setItem(key,t); }
  function init(){
    const saved = localStorage.getItem(key);
    if(saved){ apply(saved); }
    const btn = document.querySelector('[data-action="toggle-theme"]');
    if(btn){
      btn.addEventListener("click", () => {
        const cur = root.getAttribute("data-theme");
        apply(cur === "light" ? "dark" : "light");
        btn.textContent = (root.getAttribute("data-theme")==="light") ? "🌙 Dark" : "☀️ Light";
      });
      // initial label
      const cur = root.getAttribute("data-theme") || "dark";
      btn.textContent = (cur==="light") ? "🌙 Dark" : "☀️ Light";
    }
  }
  document.addEventListener("DOMContentLoaded", init);
})();

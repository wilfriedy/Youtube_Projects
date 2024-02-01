import { tab_content } from "./data.js";

const all_tabs = document.querySelectorAll(".tab");

const tabs_container = document.querySelector(".tabs-container");
const tab_indicator = document.querySelector(".tab-indicator");
const tab_body = document.querySelector(".contents");
console.log(tab_content);
const insertTab = (data) => {
  tab_body.innerHTML = data.template;
};
insertTab(tab_content[0]);

tabs_container.addEventListener("click", (e) => {
  const target_tab = e.target.closest(".tab");
  if (!target_tab) return;
  const data_val = target_tab.dataset.tab;
  all_tabs.forEach((tab) => {
    tab.classList.remove("active");
    if (tab.dataset.tab === data_val) {
      tab.classList.add("active");
    }
  });
  const position = data_val - 1;
  tab_indicator.style.left = `${position * 24}%`;
  insertTab(tab_content[position]);
  // console.log(data_val);
});

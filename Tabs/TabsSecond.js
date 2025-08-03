function main() {
  createStructure();
  const tabsContainer = document.querySelector(".tabs");
  const tab1 = tabsContainer?.children[0];
  const tab2 = tabsContainer?.children[1];
  const tab3 = tabsContainer?.children[2];
  const box1 = document?.getElementById("box1");
  const box2 = document?.getElementById("box2");
  const box3 = document?.getElementById("box3");
  tab1.style.backgroundColor = "#5d63f7";
    tab1.style.color = "white";
  tab1?.addEventListener("click", () => {
    setTabStyle(tab1, tab2, tab3);
    return setStyle(box1, box2, box3);
  });
  tab2?.addEventListener("click", () => {
    setTabStyle(tab2, tab1, tab3);
    return setStyle(box2, box1, box3);
  });
  tab3?.addEventListener("click", () => {
    setTabStyle(tab3, tab2, tab1);
    return setStyle(box3, box2, box1);
  });
}

const createStructure = () => {
  const root = document.getElementById("root");
  console.log(root);
  const container = `
    <div class="container">
      <div class="tabs">
       <div>Tab 1</div>
       <div>Tab 2</div>
       <div>Tab 3</div>
      </div>
      <div class="content-box">
       <div class="tab-box" id="box1">Tab 1</div>
       <div class="tab-box" id="box2">Tab 2</div>
       <div class="tab-box" id="box3">Tab 3</div>
      </div>
    </div>
    `;  
  root.innerHTML = container;
};
const setTabStyle = (tab1, tab2, tab3) => {
    tab1.style.backgroundColor = "#5d63f7";
    tab1.style.color = "white";
    tab3.style.color = "black";
    tab2.style.backgroundColor = "white";
    tab2.style.color = "black";
    tab3.style.backgroundColor = "white";
}
const setStyle = (box1, box2, box3) => {
  console.log(box1, box2, box3);
  box1.style.visibility = "visible";
  box2.style.visibility = "hidden";
  box3.style.visibility = "hidden";
};
main();

window.onload = () => {
    // grabing data-switcher attribute
    const tab_switchers = document.querySelectorAll("[data-tab]");
  console.log(tab_switchers)
    for (let i = 0; i < tab_switchers.length; i++) {
      // single node element not the array
      const tab_switcher = tab_switchers[i];
  
      // passes back anything "data-" then return the name after the "-"
      const page_id = tab_switcher.dataset.tab;
  
      tab_switcher.addEventListener("click", () => {
        // deactivate active on the previous selected list 
        document
          .querySelector(".tabs .tab.is-active")
          .classList.remove("is-active");
        // activate active on clicked list
        tab_switcher.parentNode.classList.add("is-active");
        // checking the page id
        // console.log(page_id);
        
        // using page_id switch the pages
        SwitchPage(page_id)
      });
    }
  };
  
  const SwitchPage = (page_id) => {
    const current_page = document.querySelector(".pages .page.is-active")
    current_page.classList.remove('is-active')
    
    // were searching for the data-page, if the data-page is same as the page_id then it will show the next page
    const next_page = document.querySelector(`.pages .page[data-page = "${page_id}"]`)
    next_page.classList.add('is-active')
  }











  
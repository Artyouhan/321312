const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

tooltips.forEach(tooltip => {
   const elem = document.createElement('div');
   elem.textContent = tooltip.title;

   tooltip.addEventListener("click", (e) => {
      e.preventDefault();
      elem.classList.add("tooltip");
      tooltip.insertAdjacentElement('beforeBegin', elem);
      elem.style.position = "absolute";
      elem.style.left = `${tooltip.getBoundingClientRect().left}px`;
      elem.style.top = `${tooltip.getBoundingClientRect().bottom}px`;

      const elems = Array.from(document.querySelectorAll(".tooltip_active"));
      const findElem = elems.find(elem => elem.classList.contains("tooltip_active"));

      if (findElem === undefined) {
         elem.classList.add("tooltip_active");
      } else {
         if (findElem !== elem) {
            elem.classList.add("tooltip_active");
         }
         findElem.classList.remove("tooltip_active");
      }
   }
   )
})
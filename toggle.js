function setupToggleKuru(pairNumber) {
    const toggleButtonIngkuru = document.getElementById(`btIngkuru${pairNumber}`);
    const toggleButtonNutkuru = document.getElementById(`btNutkuru${pairNumber}`);
    const toggleDivIngkuru = document.getElementById(`toggleDivIngkuru${pairNumber}`);
    const toggleDivNutkuru = document.getElementById(`toggleDivNutkuru${pairNumber}`);
  
    // Add a click event listener to the Ingkuru button
    toggleButtonIngkuru.addEventListener('click', function () {
      toggleDivIngkuru.style.display = 'block';
      toggleDivNutkuru.style.display = 'none';
      toggleButtonIngkuru.classList.remove(`kuru${pairNumber}bt_i`);
      toggleButtonIngkuru.classList.add(`kuru${pairNumber}bt`);
      toggleButtonNutkuru.classList.remove(`kuru${pairNumber}bt`);
      toggleButtonNutkuru.classList.add(`kuru${pairNumber}bt_i`);
    });
  
    // Add a click event listener to the Nutkuru button
    toggleButtonNutkuru.addEventListener('click', function () {
      toggleDivNutkuru.style.display = 'block';
      toggleDivIngkuru.style.display = 'none';
      toggleButtonNutkuru.classList.remove(`kuru${pairNumber}bt_i`);
      toggleButtonNutkuru.classList.add(`kuru${pairNumber}bt`);
      toggleButtonIngkuru.classList.remove(`kuru${pairNumber}bt`);
      toggleButtonIngkuru.classList.add(`kuru${pairNumber}bt_i`);
    });
  }

  function setupTogglelily(pairNumber) {
    const toggleButtonInglily = document.getElementById(`btInglily${pairNumber}`);
    const toggleButtonNutlily = document.getElementById(`btNutlily${pairNumber}`);
    const toggleDivInglily = document.getElementById(`toggleDivInglily${pairNumber}`);
    const toggleDivNutlily = document.getElementById(`toggleDivNutlily${pairNumber}`);

    // Add a click event listener to the Inglily button
    toggleButtonInglily.addEventListener('click', function () {
      console.log("Toggle1!")
      toggleDivInglily.style.display = 'block';
      toggleDivNutlily.style.display = 'none';
      toggleButtonInglily.classList.remove(`lily${pairNumber}bt_i`);
      toggleButtonInglily.classList.add(`lily${pairNumber}bt`);
      toggleButtonNutlily.classList.remove(`lily${pairNumber}bt`);
      toggleButtonNutlily.classList.add(`lily${pairNumber}bt_i`);
    });
  
    // Add a click event listener to the Nutlily button
    toggleButtonNutlily.addEventListener('click', function () {
      console.log("Toggle2!")
      toggleDivNutlily.style.display = 'block';
      toggleDivInglily.style.display = 'none';
      toggleButtonNutlily.classList.remove(`lily${pairNumber}bt_i`);
      toggleButtonNutlily.classList.add(`lily${pairNumber}bt`);
      toggleButtonInglily.classList.remove(`lily${pairNumber}bt`);
      toggleButtonInglily.classList.add(`lily${pairNumber}bt_i`);
    });
  }

  function setupToggleHerb(pairNumber) {
    const toggleButtonIngherb = document.getElementById(`btIngherb${pairNumber}`);
    const toggleButtonNutherb = document.getElementById(`btNutherb${pairNumber}`);
    const toggleDivIngherb = document.getElementById(`toggleDivIngherb${pairNumber}`);
    const toggleDivNutherb = document.getElementById(`toggleDivNutherb${pairNumber}`);
  
    // Add a click event listener to the Ingherb button
    toggleButtonIngherb.addEventListener('click', function () {
      toggleDivIngherb.style.display = 'block';
      toggleDivNutherb.style.display = 'none';
      toggleButtonIngherb.classList.remove(`herb${pairNumber}bt_i`);
      toggleButtonIngherb.classList.add(`herb${pairNumber}bt`);
      toggleButtonNutherb.classList.remove(`herb${pairNumber}bt`);
      toggleButtonNutherb.classList.add(`herb${pairNumber}bt_i`);
    });
  
    // Add a click event listener to the Nutherb button
    toggleButtonNutherb.addEventListener('click', function () {
      toggleDivNutherb.style.display = 'block';
      toggleDivIngherb.style.display = 'none';
      toggleButtonNutherb.classList.remove(`herb${pairNumber}bt_i`);
      toggleButtonNutherb.classList.add(`herb${pairNumber}bt`);
      toggleButtonIngherb.classList.remove(`herb${pairNumber}bt`);
      toggleButtonIngherb.classList.add(`herb${pairNumber}bt_i`);
    });
  }


function repositionContent(breakpoint, product) {
    const container = document.getElementById("row_"+product);
    const contentInside2 = document.getElementById("table_"+product);

    if (!container || !contentInside2) {
        return;
    }

    document.addEventListener("DOMContentLoaded", function () {
        if (window.innerWidth < breakpoint) {
            const newRow = document.createElement("div");
            newRow.classList.add("row");
            newRow.innerHTML = '<div class="col-12">' + contentInside2.outerHTML + '</div>';
            container.insertAdjacentElement("afterend", newRow);
            contentInside2.parentNode.removeChild(contentInside2);

            // Reattach event handlers to the buttons inside contentInside2
            const newContentInside2 = newRow.querySelector(`#table_${product}`);
            if (newContentInside2) {
                const toggleButtonIng = document.getElementById(`btIng${product}`);
                const toggleButtonNut = document.getElementById(`btNut${product}`);
                const toggleDivIng = document.getElementById(`toggleDivIng${product}`);
                const toggleDivNut = document.getElementById(`toggleDivNut${product}`);

                if (toggleButtonIng) {
                  toggleButtonIng.addEventListener("click", function () {
                        // Your toggle button click event logic here
                        toggleDivIng.style.display = 'block';
                        toggleDivNut.style.display = 'none';
                        toggleButtonIng.classList.remove(`${product}bt_i`);
                        toggleButtonIng.classList.add(`${product}bt`);
                        toggleButtonNut.classList.remove(`${product}bt`);
                        toggleButtonNut.classList.add(`${product}bt_i`);
                    });
                }
                if (toggleButtonNut){
                  toggleButtonNut.addEventListener("click", function () {
                    // Your toggle button click event logic here
                    toggleDivNut.style.display = 'block';
                    toggleDivIng.style.display = 'none';
                    toggleButtonNut.classList.remove(`${product}bt_i`);
                    toggleButtonNut.classList.add(`${product}bt`);
                    toggleButtonIng.classList.remove(`${product}bt`);
                    toggleButtonIng.classList.add(`${product}bt_i`);
                });
                }
            }
        }
    });
}

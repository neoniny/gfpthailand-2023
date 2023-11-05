// document.getElementById("allkuru").innerHTML = renderProduct;
function generateProductSections(container, product, numCount, ml) {
    const productContainer = document.getElementById(container);
    for (let runnum = 1; runnum <= numCount; runnum++) {
        const variableName = `${product}${runnum}`;
        const nutrition = nutritionFactLily.find(nutrition => nutrition.name === `${product}${runnum}`);
        // Your renderProduct template
        const productHTML = `
        <section id="${product}${runnum}" class="productsection ${product} ${product}${runnum}">
            <div class="container" data-aos="fade-up">
                <div class="row" id="row_${product}${runnum}">
                    <div class="col-lg-4 col-md-6 col-sm-4 text-center">
                    <img src="assets/img/${product}/h-${product}${runnum}.png" class="img-fluid">
                    </div>
                    <div class="descContainer col-lg-8 col-md-6 col-sm-8 ">
                        <div class="description content">
                            <h2><span id="${product}_h${runnum}"></span> (${ml}ML)</h2>
                            <p id="${product}_c${runnum}"></p>
                        </div>
                        <div class="tableContainer" id="table_${product}${runnum}">
                            <div class="content">
                                <button id="btIng${product}${runnum}" class="${product}${runnum}bt_i">${ingrediantBnt[0]}</button>
                                <button id="btNut${product}${runnum}" class="${product}${runnum}bt_i">${nutritionBnt[0]}</button>
                            </div>
                            ${displayIngredientsInThai(variableName,ingredients[variableName])}
                                
                            ${generateNutritionFacts(product, runnum)}
                        </div>
                    </div>

                </div>
            </div>
        </section>
      `;

        // Create a temporary element to hold the generated HTML
        const tempElement = document.createElement("div");
        tempElement.innerHTML = productHTML;

        // Append the generated HTML to the productContainer
        productContainer.appendChild(tempElement.firstElementChild);
    }
}

function generateNutritionFacts(product, numCount) {
    let tableContent = ``
    if (product == "lily") {
        const nutrition = nutritionFactLily.find(nutrition => nutrition.name === `${product}${numCount}`);
        if (nutrition) {
            // Handle the variation in the "rdi" object
            const rdi = nutrition.nutritionFact.rdi;
            let rdistr = ""
            for (const nutrient in rdi) {
                rdistr += `<tr><td>${rdiName[nutrient][0]}</td><td>${rdi[nutrient]}</td></tr>`;
            }

            tableContent += `
            <div class="nutritiontable n_${product}${numCount}" id="toggleDivNut${product}${numCount}"  style="display: none;>
            <span class="n_table">${serve[0]} : ${nutrition.nutritionFact.servingSize}</span>
            <hr>
            <div class="n_table row">
                <div class="col-lg-7 col-sm-6">
                    <table><tr>
                        <td width="65%">${n_enengy[0]}</td>
                        <td width="35%">${nutrition.nutritionFact.totalEnergy} ${u_kkal[0]}</td>
                        </tr>
                        <tr>
                        <td>${n_fat[0]}</td>
                        <td>${nutrition.nutritionFact.totalFat} ${u_g[0]}</td>
                        </tr>
                        <tr>
                        <td><span class="wl-20">${n_sfat[0]}</td>
                        <td>${nutrition.nutritionFact.saturatedFat} ${u_g[0]}</td>
                        </tr>
                        <tr>
                        <td>${n_cholesterol[0]}</td>
                        <td>${nutrition.nutritionFact.cholesterol}  ${u_mg[0]}</td>
                        </tr>
                        <tr>
                        <td>${n_protein[0]}</td>
                        <td>${nutrition.nutritionFact.protein} ${u_g[0]}</td>
                        </tr>
                        <tr>
                        <td>${n_carb[0]}</td>
                        <td>${nutrition.nutritionFact.totalCarbohydrate} ${u_g[0]}</td>
                        </tr>
                        <tr>
                        <td><span class="wl-20">${n_fiber[0]}</td>
                        <td>${nutrition.nutritionFact.dietaryFiber} ${u_g[0]}</td>
                        </tr>
                        <tr>
                        <td><span class="wl-20">${n_sugar[0]}</td>
                        <td>${nutrition.nutritionFact.sugar} ${u_g[0]}</td>
                        </tr>
                        <tr>
                        <td>${n_sodium[0]}</td>
                        <td>${nutrition.nutritionFact.sodium} ${u_mg[0]}</td>
                    </tr></table>
                </div>
                <div class="col-lg-5 col-sm-6">
                    <table>
                        <tr>
                            <td colspan="2">${n_rdi[0]}</td>
                        </tr>
                        ${rdistr}
                    </table>
                </div>
            </div>
            </div>`
        } else {
            console.log(`Product '${product} ${numCount}' not found.`);
        }
    } else {
        numDisplay = product == 'herb' ? "" : numCount
        const nutrition = nutritionFact.find(nutrition => nutrition.name === `${product}${numDisplay}`);
        if (nutrition) {
            tableContent += `
            <div class="nutritiontable n_${product}${numCount}" id="toggleDivNut${product}${numCount}" style="display: none;">
            <span class="n_table">${serve[0]} : ${serve1[0]} ${nutrition.nutritionFact.servingSize}</span>
            <hr>
            <div class="n_table">
            <table><tr>
                <td width="75%">${n_enengy[0]}</td>
                <td width="25%">${nutrition.nutritionFact.totalEnergy} ${u_kkal[0]}</td>
                </tr>
                <tr>
                <td>${n_fat[0]}</td>
                <td>${nutrition.nutritionFact.totalFat} ${u_g[0]}</td>
                </tr>
                <tr>
                <td>${n_protein[0]}</td>
                <td>${nutrition.nutritionFact.protein} ${u_g[0]}</td>
                </tr>
                <tr>
                <td>${n_carb[0]}</td>
                <td>${nutrition.nutritionFact.totalCarbohydrate} ${u_g[0]}</td>
                </tr>
                <tr>
                <td>${n_sugar[0]}</td>
                <td>${nutrition.nutritionFact.sugar} ${u_g[0]}</td>
                </tr>
                <tr>
                <td>${n_sodium[0]}</td>
                <td>${nutrition.nutritionFact.sodium} ${u_mg[0]}</td>
                </tr>
                </table></div>`
        } else {
            console.log(`Product '${product} ${numCount}' not found.`);
        }
    }

    return tableContent
}

function applyProductCSS(product, numCount) {
    for (let runnum = 1; runnum <= numCount; runnum++) {
        const cssRules = `
        .${product}${runnum}bt{
            background-color: var(--color-${product}${runnum});
        }
        .${product}${runnum}bt_i{
            background-color: var(--color-secondary);
            border-color:  var(--color-${product}${runnum})!important;
            color: var(--color-${product}${runnum})!important;
        }
        .${product}${runnum}{
            background: url("assets/svg/bg-${product}${runnum}.svg") no-repeat center;
            background-size: cover;
            position: relative;
            top: -10px;
            z-index: 1;
        }
        .${product}${runnum} h2{
            color: var(--color-${product}${runnum});
        }
        .i_${product}${runnum}{
            stroke-width: 0px;
            filter: var(--filter-${product}${runnum});
        }
        .n_${product}${runnum}{
            background-color: var(--color-${product}${runnum}_t);
        }
        `;

        // Create a <style> element
        const styleElement = document.createElement("style");
        styleElement.type = "text/css";

        // Set the innerHTML of the <style> element to your CSS rules
        styleElement.innerHTML = cssRules;

        // Append the <style> element to the <head>
        document.head.appendChild(styleElement);
    }
}

// Create a function to display ingredients in Thai
function displayIngredientsInThai(productname,ingredientList) {
    let ingredientHTML = `<div id="toggleDivIng${productname}" class="content ingredienttable it_${productname}" style="display: none;"><table class="i_${productname}">`;
    ingredientList.forEach((ingredient) => {
        const imgsvg = ingredient[0][2];
        const thaiName = ingredient[0][0];
        const percentage = ingredient[1];
        if (ingredient[1] == 1) {
            ingredientHTML += `<tr>
            <td width="30px"><img src="assets/icon/${imgsvg}.svg"/></td>
            <td><span class="wl-10">${thaiName}</span></td></tr>`
        } else {
            ingredientHTML += `<tr>
            <td width="30px"><img src="assets/icon/${imgsvg}.svg"/></td>
            <td><span class="wl-10">${thaiName} ${percentage}%</span></td></tr>`
        }
    });
    ingredientHTML += `</table></div>`
    return ingredientHTML; // Return the accumulated HTML string
}

// Create a function to display ingredients in English
function displayIngredientsInEnglish(ingredientList) {
    ingredientList.forEach((ingredient, quantity) => {
        const englishName = ingredient[1];
        console.log(`English Name: ${englishName}, Quantity: ${quantity}`);
    });
}

const allProduct = ["allkuru", "alllily"]
// Call the function to generate and insert the product sections and it's session
const elementkuru = document.getElementById('allkuru');
if (elementkuru) {
    generateProductSections("allkuru", "kuru", 4, 280);
    applyProductCSS("kuru", 4);
}
const elementlily = document.getElementById('alllily');
if (elementlily) {
    generateProductSections("alllily", "lily", 4, 250);
    applyProductCSS("lily", 4);
}
const elementherb = document.getElementById('allherb');
if (elementherb) {
    generateProductSections("allherb", "herb", 2, 250);
    applyProductCSS("herb", 4);
}

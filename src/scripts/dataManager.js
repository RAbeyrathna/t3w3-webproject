// Declare JS data that we want to store
let cssThemes = [

];

let pageTheme = "dark";

// Read localstorage
// Read CSS themes
/**
 * Retrieve, assign and return latest stored CSS theme list from the browser localstorage
 * @author Rahal Abeyrathna
 *
 * @returns {Array} Array of objects
 */
function getStoredCssThemes(){
    let rawJsonStringCssThemes = localStorage.getItem("cssThemes");
    cssThemes = JSON.parse(rawJsonStringCssThemes);
    return cssThemes;
}



/**
 * Retrieve, assign and return latest stored page theme from the browser localstorage
 * @author Rahal Abeyrathna
 *
 * @returns {string} Should be "light" or "dark"
 */
function getStoredPageTheme(){
    pageTheme = localStorage.getItem("pagetheme");
    return pageTheme;
}


// Create/Update localstorage
function setCssThemesToString(){
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem("cssThemes", dataAsJsonString);
}

// Delete localstorage
// Apply album / genre primary color to html
waitForElement([
    ".main-topBar-background"
], ([recolorer]) => {
    const observer = new MutationObserver(updateVariable);
    observer.observe(recolorer, { attributes: true, attributeFilter: ["style"]});
    function updateVariable() {
        let style = recolorer.style;
        if (style.backgroundColor) {
            document.documentElement.style.setProperty(
                "background-color", style.backgroundColor);
        } else {
            // do nothing? maybe set to something else? not sure
        }
    }
    updateVariable();
});

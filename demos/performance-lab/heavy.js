// Simulation of a render-blocking script
(function() {
    console.log("Script 'heavy.js' blocking rendering...");
    const start = Date.now();
    // Block the main thread for 500ms
    while (Date.now() - start < 500) {
        // Synchronous block
    }
    console.log("Script 'heavy.js' completed after 500ms.");
})();

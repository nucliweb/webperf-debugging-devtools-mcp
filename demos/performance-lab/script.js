document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('heavy-task-btn');
    const status = document.getElementById('status-text');

    btn.addEventListener('click', () => {
        status.textContent = 'Calculating... (The browser will freeze)';
        
        // Delay a bit so the DOM updates before the block
        setTimeout(() => {
            const start = Date.now();
            console.log('Starting Long Task...');
            
            // Simulation of an extremely heavy task (Long Task)
            // This will appear as a red block in the Performance panel
            while (Date.now() - start < 2000) {
                // Fictional heavy calculation
                Math.sqrt(Math.random() * 1000000);
            }
            
            console.log('Long Task finished.');
            status.textContent = 'Done! Check the Performance panel.';
        }, 100);
    });
});

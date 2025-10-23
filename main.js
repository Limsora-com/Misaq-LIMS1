document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // =========== GLOBAL EVENT HANDLERS & INITIALIZATION ==============
    // =================================================================
    document.querySelector('.tab-bar').addEventListener('click', e => {
        if (e.target.classList.contains('tab-button')) {
            document.querySelectorAll('.tab-button, .tab-content').forEach(el => el.classList.remove('active'));
            const tabButton = e.target.closest('.tab-button');
            tabButton.classList.add('active');
            const tabId = tabButton.dataset.tab;
            document.getElementById(`${tabId}-content`).classList.add('active');
        }
    });

    document.addEventListener('click', e => {
        // This makes the whole modal background clickable to close
        if (e.target.classList.contains('modal')) {
            const modalId = e.target.id;
            if (modalId.startsWith('edit') || modalId === 'addReceiveModal' || modalId === 'testUsageModal') {
                ledgerApp.handleModalClose(modalId);
            } else {
                e.target.style.display = 'none';
            }
        }
        // This handles explicit close buttons (like 'X' or 'Cancel')
        const closeButton = e.target.closest('[data-action="close-modal"]');
        if (closeButton) {
            const modalToClose = closeButton.closest('.modal');
            if (modalToClose) {
                const modalId = modalToClose.id;
                 if (modalId.startsWith('edit') || modalId === 'addReceiveModal' || modalId === 'testUsageModal') {
                    ledgerApp.handleModalClose(modalId);
                } else {
                    modalToClose.style.display = 'none';
                }
            }
        }
    });
    
    // Initialize both applications
    ledgerApp.init();
    reportApp.init();
});
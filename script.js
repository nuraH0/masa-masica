document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // POKAŽI PRVI TAB ODMAH
  function showTab(tabId) {
    // Sakrij sve
    tabContents.forEach(content => content.classList.remove('active'));
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    // POKAŽI odabrani
    document.getElementById(tabId).classList.add('active');
    event.target.closest('.tab-btn')?.classList.add('active') || 
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  }
  
  // Eventi za klik
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showTab(this.dataset.tab);
    });
  });
  
  // OSIGURAJ da prvi tab bude vidljiv ODMAH
  showTab('usluge');
});

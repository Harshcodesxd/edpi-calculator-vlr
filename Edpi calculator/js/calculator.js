/* 
  eDPI Calculator - Valorant eDPI Calculator Logic
*/

document.addEventListener('DOMContentLoaded', () => {
  // Select calculator elements
  const dpiInput = document.getElementById('mouse-dpi');
  const dpiSlider = document.getElementById('mouse-dpi-slider');
  const sensInput = document.getElementById('val-sens');
  const sensSlider = document.getElementById('val-sens-slider');
  
  const resultCard = document.getElementById('result-card');
  const resultVal = document.getElementById('result-value');
  const categoryBadge = document.getElementById('category-badge');
  const categoryDot = document.getElementById('category-dot');
  const categoryText = document.getElementById('category-text');
  
  const visualizerPin = document.getElementById('visualizer-pin');
  
  const copyBtn = document.getElementById('copy-btn');
  const resetBtn = document.getElementById('reset-btn');
  
  // Preset buttons
  const presetBtns = document.querySelectorAll('.preset-btn');
  
  // Slider fine-tune buttons
  const dpiMinus = document.getElementById('dpi-minus');
  const dpiPlus = document.getElementById('dpi-plus');
  const sensMinus = document.getElementById('sens-minus');
  const sensPlus = document.getElementById('sens-plus');

  // Verify elements exist before executing to support other pages that might load calculator.js
  if (!dpiInput || !sensInput) return;

  // Initialize values
  calculateEDPI();

  // Sync Input and Sliders for Mouse DPI
  dpiInput.addEventListener('input', () => {
    let val = parseFloat(dpiInput.value) || 0;
    if (val > 16000) val = 16000;
    if (val < 100 && dpiInput.value !== '') val = 100;
    
    dpiSlider.value = val;
    syncPresets(val);
    calculateEDPI();
  });

  dpiSlider.addEventListener('input', () => {
    dpiInput.value = dpiSlider.value;
    syncPresets(parseInt(dpiSlider.value));
    calculateEDPI();
  });

  // Sync Input and Sliders for Valorant Sens
  sensInput.addEventListener('input', () => {
    let val = parseFloat(sensInput.value) || 0;
    if (val > 4.0) val = 4.0;
    if (val < 0.01 && sensInput.value !== '') val = 0.01;
    
    sensSlider.value = val;
    calculateEDPI();
  });

  sensSlider.addEventListener('input', () => {
    sensInput.value = parseFloat(sensSlider.value).toFixed(2);
    calculateEDPI();
  });

  // Preset Buttons Listener
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from others
      presetBtns.forEach(b => b.classList.remove('active'));
      // Add active to current
      btn.classList.add('active');
      
      const dpiVal = parseInt(btn.getAttribute('data-value'));
      dpiInput.value = dpiVal;
      dpiSlider.value = dpiVal;
      calculateEDPI();
    });
  });

  function syncPresets(currentDPI) {
    presetBtns.forEach(btn => {
      const btnVal = parseInt(btn.getAttribute('data-value'));
      if (btnVal === currentDPI) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Fine-tuning buttons
  dpiMinus.addEventListener('click', () => {
    let val = parseInt(dpiInput.value) || 800;
    val = Math.max(100, val - 50);
    dpiInput.value = val;
    dpiSlider.value = val;
    syncPresets(val);
    calculateEDPI();
  });

  dpiPlus.addEventListener('click', () => {
    let val = parseInt(dpiInput.value) || 800;
    val = Math.min(16000, val + 50);
    dpiInput.value = val;
    dpiSlider.value = val;
    syncPresets(val);
    calculateEDPI();
  });

  sensMinus.addEventListener('click', () => {
    let val = parseFloat(sensInput.value) || 0.40;
    val = Math.max(0.01, val - 0.01);
    sensInput.value = val.toFixed(2);
    sensSlider.value = val;
    calculateEDPI();
  });

  sensPlus.addEventListener('click', () => {
    let val = parseFloat(sensInput.value) || 0.40;
    val = Math.min(4.00, val + 0.01);
    sensInput.value = val.toFixed(2);
    sensSlider.value = val;
    calculateEDPI();
  });

  // eDPI Calculator Engine
  function calculateEDPI() {
    const dpi = parseFloat(dpiInput.value);
    const sens = parseFloat(sensInput.value);

    // Input Validation
    if (isNaN(dpi) || isNaN(sens) || dpi <= 0 || sens <= 0) {
      resultVal.innerText = "Enter valid sensitivity and DPI";
      resultCard.className = "calculator-results error-state";
      visualizerPin.style.left = "0%";
      highlightProMatches(0);
      return;
    }

    const rawEdpi = sens * dpi;
    const edpi = parseFloat(rawEdpi.toFixed(2));
    
    // Update numerical representation
    resultVal.innerText = edpi;

    // Categorization: Very Low (0-200), Low / Pro (200-400), Med (400-800), High (800+)
    let category = '';
    let glowClass = '';
    
    if (edpi <= 200) {
      category = 'Very Low';
      glowClass = 'very-low-glow';
    } else if (edpi > 200 && edpi <= 400) {
      category = 'Low / Pro range';
      glowClass = 'low-glow';
    } else if (edpi > 400 && edpi <= 800) {
      category = 'Medium';
      glowClass = 'med-glow';
    } else {
      category = 'High';
      glowClass = 'high-glow';
    }

    categoryText.innerText = category;

    // Apply color highlights and drop shadows to result box
    resultCard.className = 'calculator-results ' + glowClass;

    // Map pin location on aim slider visual bar
    // Very Low: 0 - 200 (maps to 0% - 25%)
    // Low / Pro range: 200 - 400 (maps to 25% - 50%)
    // Medium: 400 - 800 (maps to 50% - 75%)
    // High: 800 - 1600 (maps to 75% - 100%)
    let pinPercent = 0;
    if (edpi <= 200) {
      pinPercent = (edpi / 200) * 25;
    } else if (edpi <= 400) {
      pinPercent = 25 + ((edpi - 200) / 200) * 25;
    } else if (edpi <= 800) {
      pinPercent = 50 + ((edpi - 400) / 400) * 25;
    } else {
      const highOffset = Math.min(800, edpi - 800);
      pinPercent = 75 + (highOffset / 800) * 25;
    }
    
    visualizerPin.style.left = `${Math.min(100, Math.max(0, pinPercent))}%`;

    // Trigger Pro Match highlight updating
    highlightProMatches(edpi);
  }

  // Check matching professional range list
  function highlightProMatches(userEdpi) {
    const proRows = document.querySelectorAll('.pro-table tbody tr');
    proRows.forEach(row => {
      const proEdpi = parseInt(row.getAttribute('data-edpi'));
      const diff = Math.abs(userEdpi - proEdpi);
      
      // Match if user's eDPI is within ±15 of a Pro player
      if (diff <= 15) {
        row.classList.add('pro-match');
        
        // Ensure "Match" tag is added
        const nameCell = row.querySelector('.pro-name-cell');
        if (nameCell && !nameCell.querySelector('.badge-match')) {
          const matchBadge = document.createElement('span');
          matchBadge.className = 'badge badge-medium badge-match';
          matchBadge.style.marginLeft = '8px';
          matchBadge.style.fontSize = '9px';
          matchBadge.style.verticalAlign = 'middle';
          matchBadge.innerText = 'Aim Match';
          nameCell.appendChild(matchBadge);
        }
      } else {
        row.classList.remove('pro-match');
        
        const badge = row.querySelector('.badge-match');
        if (badge) {
          badge.remove();
        }
      }
    });
  }

  // Copy Result Functionality
  copyBtn.addEventListener('click', () => {
    const edpi = resultVal.innerText;
    navigator.clipboard.writeText(edpi).then(() => {
      // Provide visual feedback
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align: middle;">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg> Copied!
      `;
      copyBtn.style.background = 'var(--success)';
      copyBtn.style.color = '#fff';
      
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.background = '';
        copyBtn.style.color = '';
      }, 1500);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });

  // Reset Functionality
  resetBtn.addEventListener('click', () => {
    dpiInput.value = 800;
    dpiSlider.value = 800;
    sensInput.value = '0.40';
    sensSlider.value = 0.40;
    syncPresets(800);
    calculateEDPI();
  });
});

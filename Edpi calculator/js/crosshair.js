/* 
  eDPI Calculator - Valorant Crosshair Gallery Logic
*/

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('crosshair-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const crosshairGrid = document.getElementById('crosshair-grid');

  if (!crosshairGrid) return;

  // Crosshair Database
  const crosshairsData = [
    {
      id: 'tenz',
      name: 'TenZ',
      team: 'Sentinels (Pro Player)',
      category: 'pro',
      code: '0;s;1;P;c;5;h;0;m;1;0l;4;0v;4;0o;2;0a;1;0f;0;1b;0;S;c;4;s;0.6;o;1',
      color: '#00f0ff', // Cyan
      style: {
        color: '#00f0ff',
        thickness: '2px',
        length: '4px',
        offset: '2px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'aspas',
      name: 'aspas',
      team: 'Leviatán (Pro Player)',
      category: 'dot',
      code: '0;P;c;5;o;1;d;1;z;1;f;0;s;0;0t;0;0l;0;0o;0;0a;0;1t;0;1l;0;1o;0;1a;0;S;c;1;s;0.6',
      color: '#00ffff', // Cyan Dot
      style: {
        color: '#00ffff',
        thickness: '0px',
        length: '0px',
        offset: '0px',
        hasDot: true,
        dotSize: '3px',
        hasCircle: false
      }
    },
    {
      id: 'yay',
      name: 'yay',
      team: 'Bleed (Pro Player)',
      category: 'pro',
      code: '0;P;h;0;0l;4;0v;4;0o;3;0a;1;0f;0;1b;0',
      color: '#ffffff', // White Lines
      style: {
        color: '#ffffff',
        thickness: '2px',
        length: '4px',
        offset: '3px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'jinggg',
      name: 'Jinggg',
      team: 'Paper Rex (Pro Player)',
      category: 'pro',
      code: '0;s;1;P;c;1;o;1;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0;S;c;1;s;0.6',
      color: '#00ff88', // Green Lines
      style: {
        color: '#00ff88',
        thickness: '1px',
        length: '2px',
        offset: '2px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'boaster',
      name: 'Boaster',
      team: 'Fnatic (Pro Player)',
      category: 'dot',
      code: '0;s;1;P;c;1;o;1;d;1;z;4;0b;0;1b;0;S;c;1;s;0.624;o;0.624',
      color: '#00ff88', // Green Dot
      style: {
        color: '#00ff88',
        thickness: '0px',
        length: '0px',
        offset: '0px',
        hasDot: true,
        dotSize: '4px',
        hasCircle: false
      }
    },
    {
      id: 'chronicle',
      name: 'Chronicle',
      team: 'Fnatic (Pro Player)',
      category: 'pro',
      code: '0;P;c;1;o;1;f;0;0t;1;0l;4;0o;2;0a;1;0f;0;1b;0',
      color: '#00ff88', // Green Lines
      style: {
        color: '#00ff88',
        thickness: '1px',
        length: '4px',
        offset: '2px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'demon1',
      name: 'Demon1',
      team: 'NRG (Pro Player)',
      category: 'pro',
      code: '0;P;c;5;o;1;f;0;0t;1;0l;3;0o;1;0a;1;0f;0;1b;0',
      color: '#00ffff',
      style: {
        color: '#00ffff',
        thickness: '1px',
        length: '3px',
        offset: '1px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'f0rsakeN',
      name: 'f0rsakeN',
      team: 'Paper Rex (Pro Player)',
      category: 'pro',
      code: '0;P;o;1;f;0;0t;1;0l;3;0o;1;0a;1;0f;0;1b;0',
      color: '#ffffff',
      style: {
        color: '#ffffff',
        thickness: '1px',
        length: '3px',
        offset: '1px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'nats',
      name: 'nAts',
      team: 'Team Liquid (Pro Player)',
      category: 'pro',
      code: '0;P;c;1;o;1;f;0;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0',
      color: '#00ff88',
      style: {
        color: '#00ff88',
        thickness: '1px',
        length: '2px',
        offset: '2px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'derke',
      name: 'Derke',
      team: 'Fnatic (Pro Player)',
      category: 'pro',
      code: '0;P;o;1;f;0;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0',
      color: '#ffffff',
      style: {
        color: '#ffffff',
        thickness: '1px',
        length: '2px',
        offset: '2px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'cryocells',
      name: 'Cryocells',
      team: '100 Thieves (Pro Player)',
      category: 'pro',
      code: '0;P;c;1;h;0;0l;2;0o;2;0a;1;0f;0;1b;0',
      color: '#00ff88',
      style: {
        color: '#00ff88',
        thickness: '1px',
        length: '2px',
        offset: '2px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'mako',
      name: 'MaKo',
      team: 'DRX (Pro Player)',
      category: 'pro',
      code: '0;P;c;1;o;1;f;0;0t;1;0l;2;0o;1;0a;1;0f;0;1b;0',
      color: '#00ff88',
      style: {
        color: '#00ff88',
        thickness: '1px',
        length: '2px',
        offset: '1px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'keznit',
      name: 'keznit',
      team: 'KRÜ Esports (Pro Player)',
      category: 'pro',
      code: '0;P;c;5;h;0;0l;4;0v;4;0o;2;0a;1;0f;0;1b;0',
      color: '#00f0ff',
      style: {
        color: '#00f0ff',
        thickness: '1.5px',
        length: '4px',
        offset: '2px',
        hasDot: false,
        hasCircle: false
      }
    },
    {
      id: 'circle',
      name: 'Perfect Circle',
      team: 'Community Custom',
      category: 'fun',
      code: '0;P;c;1;h;0;d;1;z;3;f;0;0t;3;0l;1;0o;1;0a;1;0f;0;1t;0;1l;0;1o;0;1a;0',
      color: '#00ff88',
      style: {
        color: '#00ff88',
        thickness: '1.5px',
        length: '0px',
        offset: '0px',
        hasDot: false,
        hasCircle: true,
        circleDiameter: '12px'
      }
    },
    {
      id: 'heart',
      name: 'Heart Crosshair',
      team: 'Community Custom',
      category: 'fun',
      code: '0;P;c;7;o;0.1;m;1;0t;5;0l;3;0o;1;0a;1;0f;0;1t;3;1l;2;1o;1;1a;1',
      color: '#ff4655', // Pinkish Red
      style: {
        color: '#ff4655',
        thickness: '3px',
        length: '3px',
        offset: '1px',
        hasDot: true,
        dotSize: '2px',
        hasCircle: false
      }
    },
    {
      id: 'nerd-glasses',
      name: 'Nerd Glasses',
      team: 'Community Custom',
      category: 'fun',
      code: '0;P;c;8;t;2;o;1;d;1;z;1;a;1;m;1;0t;3;0l;2;0o;0;0a;1;1t;3;1l;3;1o;0;1a;1',
      color: '#ffffff',
      style: {
        color: '#ffffff',
        thickness: '3px',
        length: '2px',
        offset: '4px',
        hasDot: true,
        dotSize: '2px',
        hasCircle: false
      }
    }
  ];

  let activeCategory = 'all';
  let searchQuery = '';

  // Render function
  function renderCrosshairs(dataList) {
    crosshairGrid.innerHTML = '';

    if (dataList.length === 0) {
      crosshairGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
          <p>No crosshairs match your filters. Try a different search!</p>
        </div>
      `;
      return;
    }

    dataList.forEach(item => {
      // Build visual preview HTML
      let previewHTML = '';
      const styles = item.style;
      const cssVars = `
        --ch-color: ${styles.color};
        --ch-thickness: ${styles.thickness};
        --ch-length: ${styles.length};
        --ch-offset: ${styles.offset};
        ${styles.dotSize ? `--ch-dot-size: ${styles.dotSize};` : ''}
        ${styles.circleDiameter ? `--ch-diameter: ${styles.circleDiameter};` : ''}
      `;

      previewHTML += `<div class="crosshair-viewport" style="${cssVars}">`;
      
      if (styles.hasDot) {
        previewHTML += `<div class="crosshair-dot"></div>`;
      }
      
      if (styles.length !== '0px') {
        previewHTML += `
          <div class="crosshair-line crosshair-line-v crosshair-line-top"></div>
          <div class="crosshair-line crosshair-line-v crosshair-line-bottom"></div>
          <div class="crosshair-line crosshair-line-h crosshair-line-left"></div>
          <div class="crosshair-line crosshair-line-h crosshair-line-right"></div>
        `;
      }

      if (styles.hasCircle) {
        previewHTML += `<div class="crosshair-circle"></div>`;
      }

      previewHTML += '</div>';

      // Create card
      const card = document.createElement('div');
      card.className = 'glass-card crosshair-card';
      card.innerHTML = `
        <div>
          <h3>${item.name}</h3>
          <div class="crosshair-team">${item.team}</div>
          <div class="crosshair-preview-container">
            ${previewHTML}
          </div>
        </div>
        <div>
          <input type="text" class="crosshair-code-input" value="${item.code}" readonly aria-label="${item.name} crosshair code">
          <button type="button" class="btn btn-primary copy-code-btn" data-code="${item.code}">Copy Code</button>
        </div>
      `;

      crosshairGrid.appendChild(card);
    });

    bindCopyEvents();
  }

  // Copy Operations
  function bindCopyEvents() {
    const copyBtns = document.querySelectorAll('.copy-code-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        
        navigator.clipboard.writeText(code).then(() => {
          const originalText = btn.innerText;
          btn.innerText = 'Copied!';
          btn.style.backgroundColor = 'var(--success)';
          btn.style.boxShadow = '0 0 15px var(--success)';
          
          setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = '';
            btn.style.boxShadow = '';
          }, 1500);
        }).catch(err => {
          console.error('Failed to copy crosshair: ', err);
        });
      });
    });
  }

  // Filter Logic
  function applyFilters() {
    let filtered = crosshairsData;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchQuery) || 
        item.team.toLowerCase().includes(searchQuery)
      );
    }

    renderCrosshairs(filtered);
  }

  // Search Input listener
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  // Category buttons listener
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  // Initial Render
  renderCrosshairs(crosshairsData);
});

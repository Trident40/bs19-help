/* ==========================================================================
   bs19-help | Standalone Vanilla NUI Controller (Player-Only)
   Works inside FiveM CEF via https://bs19-help/close and in standard browsers
   ========================================================================== */

(function () {
  'use strict';

  const FALLBACK_CONFIG = {
  "menuTitle": "Survival Field Manual",
  "menuSubtitle": "BeyondSurvival (BS19) · The Apocalypse Project",
  "defaultKey": "F9",
  "commandName": "help",
  "footerRebindNote": "You can rebind keys anytime in ESC > Settings > Key Bindings > FiveM.",
  "gettingStarted": [
    {
      "number": "01",
      "title": "Check Your Pack & Survivor Hub",
      "summary": "Before moving off the highway, open your Inventory with [I] to verify bandages, water, and starting gear. Press [F5] (or alternate [U]) to open the Survivor Menu for stats, skills, crafting, building, factions, and clothing.",
      "keys": [
        "I",
        "F5",
        "U"
      ]
    },
    {
      "number": "02",
      "title": "Use the Target Reticle to Scavenge",
      "summary": "Hold or press [ALT] to reveal the contextual interaction target dot. Aim at ruined vehicles, supply crates, doors, and workstations to loot components or inspect containers.",
      "keys": [
        "ALT",
        "G"
      ]
    },
    {
      "number": "03",
      "title": "Control Noise & Stay Low",
      "summary": "Infected across Los Santos react to gunfire, engines, and voice proximity. Drop prone with [Z] to break line-of-sight around wreckage, or whistle with [H] to intentionally lure infected away from choke points.",
      "keys": [
        "Z",
        "H"
      ]
    },
    {
      "number": "04",
      "title": "Form a Squad & Reach a Safezone",
      "summary": "Press [F3] to invite allies into a squad and coordinate routes toward a Faction Safezone. If caught in a standoff, raise your hands with [X] or point out threats with [B].",
      "keys": [
        "F3",
        "X",
        "B"
      ]
    }
  ],
  "controls": [
    {
      "id": "ctrl-inventory",
      "key": "I",
      "title": "Open Inventory",
      "description": "Manage backpack capacity, quick-slot weapons, medical kits, food, water, and salvaged vehicle parts.",
      "group": "Menus & UI",
      "context": "Anytime on foot or seated"
    },
    {
      "id": "ctrl-survivor-f5",
      "key": "F5",
      "title": "Open Survivor Menu",
      "description": "Primary BS19 interface for Inventory, Stats, Skills, Build, Craft, Faction, Clothing, and Settings.",
      "group": "Menus & UI",
      "context": "Primary framework menu"
    },
    {
      "id": "ctrl-survivor-u",
      "key": "U",
      "title": "Alternate Survivor Menu",
      "description": "Secondary keybind for the Survivor Menu designed for compact keyboards or rapid mid-run access.",
      "group": "Menus & UI",
      "context": "Same hub as F5"
    },
    {
      "id": "ctrl-squad",
      "key": "F3",
      "title": "Open Squad Menu",
      "description": "Create a survivor squad, invite nearby players, manage squad leadership, and monitor teammate status.",
      "group": "Menus & UI",
      "context": "Group coordination"
    },
    {
      "id": "ctrl-vehicle",
      "key": "G",
      "title": "Open Vehicle Menu",
      "description": "Inspect chassis condition, fuel levels, battery charge, spark plugs, tires, and trunk access.",
      "group": "Menus & UI",
      "context": "When near or inside a vehicle"
    },
    {
      "id": "ctrl-target",
      "key": "ALT",
      "title": "Interaction Target Dot",
      "description": "Hold or press to activate the contextual target dot for scavenging containers, doors, lootable bodies, and benches.",
      "group": "Menus & UI",
      "context": "World interaction"
    },
    {
      "id": "ctrl-help",
      "key": "F9",
      "title": "Open Help & Controls",
      "description": "Toggle this BeyondSurvival field manual and keybind reference without conflicting with other BS19 menus.",
      "group": "Menus & UI",
      "context": "Also via /help"
    },
    {
      "id": "act-whistle",
      "key": "H",
      "title": "Whistle",
      "description": "Emits a loud whistle that lures nearby zombies toward your current position to bait or reposition hordes.",
      "group": "Actions & Emotes",
      "context": "Draws infected aggro"
    },
    {
      "id": "act-handsup",
      "key": "X",
      "title": "Hands Up",
      "description": "Raise both hands above your head to signal surrender during hostile survivor encounters or safezone checks.",
      "group": "Actions & Emotes",
      "context": "Non-hostile stance"
    },
    {
      "id": "act-point",
      "key": "B",
      "title": "Point Finger",
      "description": "Direct your arm toward your crosshair to call out loot caches, sniper angles, or infected patrols silently.",
      "group": "Actions & Emotes",
      "context": "Tactical callout"
    },
    {
      "id": "act-prone",
      "key": "Z",
      "title": "Go Prone / Crawl",
      "description": "Drop flat to crawl under debris, reduce silhouette visibility against infected, and stabilize ranged fire.",
      "group": "Actions & Emotes",
      "context": "Stealth & cover"
    }
  ],
  "survivalMechanics": [
    {
      "id": "mech-infection",
      "title": "Infection & Medical",
      "domain": "Health & Trauma",
      "summary": "Zombie bites, contaminated scratches, and untreated bleeding rapidly escalate into fatal viral infection. Monitor vitals in the Survivor Menu and carry dedicated trauma supplies.",
      "fieldNotes": [
        "Stop active bleeding immediately with bandages before treating pain or stamina loss.",
        "Use antibiotics or antiviral injectors early—advanced infection degrades vision and health regeneration.",
        "Check Stats inside [F5] to track hydration, hunger, immunity, and infection progression."
      ],
      "relatedKeys": [
        "I",
        "F5"
      ]
    },
    {
      "id": "mech-downed",
      "title": "Downed State & Lootable Corpses",
      "domain": "Death & Recovery",
      "summary": "Fatal damage puts survivors into a critical downed state before death. Squadmates can stabilize you during the bleedout window; if you expire, your corpse persists in the world.",
      "fieldNotes": [
        "Coordinate via [F3] Squad Menu so teammates can reach your downed position before bleedout completes.",
        "Unrecovered bodies remain physically lootable using [ALT] by both allies and hostile scavengers.",
        "Store irreplaceable blueprints and surplus ammunition inside a locked base or safezone locker."
      ],
      "relatedKeys": [
        "F3",
        "ALT"
      ]
    },
    {
      "id": "mech-vehicles",
      "title": "DayZ-Style Vehicle Parts",
      "domain": "Transport & Repair",
      "summary": "Abandoned vehicles across The Apocalypse Project rarely run off the street. Most hulls require scavenging and installing individual mechanical components before ignition.",
      "fieldNotes": [
        "Approach any vehicle and press [G] to inspect missing batteries, spark plugs, wheels, radiators, and fuel.",
        "Strip intact components from wrecks along the interstate to repair a reliable primary transport.",
        "Keep a repair kit and spare fuel jerrycan in the trunk before crossing outer county highways."
      ],
      "relatedKeys": [
        "G",
        "I"
      ]
    },
    {
      "id": "mech-building",
      "title": "Base Building & Power Generators",
      "domain": "Fortification",
      "summary": "Claim defensible ground by constructing walls, locked gates, crafting stations, and storage crates through the Survivor Menu. Power generators restore lighting and powered stations during blackouts.",
      "fieldNotes": [
        "Open [F5] > Build to place structural blueprints and fortify choke points against raiders and hordes.",
        "Fuel and maintain base generators to keep perimeter floodlights and electrical workbenches online at night.",
        "Verify lock codes and gate clearance after every expansion so vehicles can park safely inside."
      ],
      "relatedKeys": [
        "F5",
        "ALT"
      ]
    },
    {
      "id": "mech-safezones",
      "title": "Faction Safezones",
      "domain": "Territory & Trade",
      "summary": "Fortified faction enclaves provide neutral shelter, barter economies, medical relief, and secure recruitment hubs away from wandering hordes.",
      "fieldNotes": [
        "Manage faction membership, ranks, and shared territory permissions under [F5] > Faction.",
        "Holster weapons upon entering safezone perimeters and use [X] if challenged by settlement guards.",
        "Trade salvaged military electronics and vehicle components for scarce ammunition and medical kits."
      ],
      "relatedKeys": [
        "F5",
        "X"
      ]
    },
    {
      "id": "mech-darkzone",
      "title": "Dark Zone Extraction",
      "domain": "High-Risk PvPvE",
      "summary": "Contaminated Dark Zones hold high-grade military hardware, rare crafting schematics, and heavy armored threats—with no guarantee of walking out alive.",
      "fieldNotes": [
        "Enter with full medical supplies, suppressed weapons, and a coordinated [F3] squad whenever possible.",
        "Triggering an extraction draws both nearby infected waves and opportunistic survivor teams.",
        "Use [Z] prone cover and [B] silent callouts to hold extraction sightlines until evac completes."
      ],
      "relatedKeys": [
        "F3",
        "Z",
        "B"
      ]
    }
  ],
  "commands": [
    {
      "id": "cmd-help",
      "command": "/help",
      "title": "Open Help & Controls Menu",
      "description": "Opens the BeyondSurvival (BS19) Survival Field Manual and keybind reference. Bound by default to F9.",
      "usage": "/help"
    }
  ]
};

  const state = {
    isOpen: false,
    activeTab: 'getting-started',
    searchQuery: '',
    config: FALLBACK_CONFIG,
    isFiveM: typeof window.GetParentResourceName === 'function',
  };

  const els = {
    backdrop: document.getElementById('nui-backdrop'),
    menuTitle: document.getElementById('menu-title'),
    menuSubtitle: document.getElementById('menu-subtitle'),
    sidebarNav: document.getElementById('sidebar-nav'),
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    closeBtn: document.getElementById('close-btn'),
    sectionTitle: document.getElementById('section-title'),
    sectionMeta: document.getElementById('section-meta'),
    contentBody: document.getElementById('content-body'),
    footerNote: document.getElementById('footer-rebind-note'),
    footerToggleKey: document.getElementById('footer-toggle-key'),
    browserReopenBtn: document.getElementById('browser-reopen-btn'),
  };

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getTabs() {
    return [
      {
        id: 'getting-started',
        label: 'Getting Started',
        count: (state.config.gettingStarted || []).length,
      },
      {
        id: 'controls',
        label: 'Controls & Hotkeys',
        count: (state.config.controls || []).length,
      },
      {
        id: 'mechanics',
        label: 'Survival Mechanics',
        count: (state.config.survivalMechanics || []).length,
      },
      {
        id: 'commands',
        label: 'Commands',
        count: (state.config.commands || []).length,
      },
    ];
  }

  function renderSidebar() {
    const tabs = getTabs();
    if (!tabs.some((tab) => tab.id === state.activeTab)) {
      state.activeTab = 'getting-started';
    }

    els.sidebarNav.innerHTML = tabs
      .map((tab) => {
        const activeClass = !state.searchQuery && state.activeTab === tab.id ? ' active' : '';
        return (
          '<button type="button" class="nav-item' +
          activeClass +
          '" data-tab="' +
          escapeHtml(tab.id) +
          '">' +
          '<span>' +
          escapeHtml(tab.label) +
          '</span>' +
          '<span class="nav-count">' +
          escapeHtml(tab.count) +
          '</span>' +
          '</button>'
        );
      })
      .join('');
  }

  function renderGettingStarted(steps) {
    return (
      '<div class="card-grid">' +
      steps
        .map((step) => {
          const keysHtml = (step.keys || [])
            .map((key) => '<kbd class="keycap">[' + escapeHtml(key) + ']</kbd>')
            .join('');
          return (
            '<article class="field-card">' +
            '<div class="card-kicker">Step ' +
            escapeHtml(step.number) +
            '</div>' +
            '<h3 class="card-title">' +
            escapeHtml(step.title) +
            '</h3>' +
            '<p class="card-summary">' +
            escapeHtml(step.summary) +
            '</p>' +
            '<div class="card-keys">' +
            keysHtml +
            '</div>' +
            '</article>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  function renderControlRows(entries, isCommand) {
    return (
      '<div class="control-list">' +
      entries
        .map((entry) => {
          const badgeText = isCommand ? entry.command : entry.key;
          const badgeClass = isCommand ? 'keycap keycap-cmd' : 'keycap';
          const metaHtml = entry.context
            ? '<span class="control-context">' + escapeHtml(entry.context) + '</span>'
            : '';

          return (
            '<div class="control-row">' +
            '<div><kbd class="' +
            badgeClass +
            '">[' +
            escapeHtml(badgeText) +
            ']</kbd></div>' +
            '<div>' +
            '<div class="control-title-line">' +
            '<span class="control-title">' +
            escapeHtml(entry.title) +
            '</span>' +
            metaHtml +
            '</div>' +
            '<p class="control-desc">' +
            escapeHtml(entry.description) +
            '</p>' +
            '</div>' +
            '</div>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  function renderControlsSection(controls) {
    const groups = ['Menus & UI', 'Actions & Emotes'];
    return groups
      .map((groupName) => {
        const items = controls.filter((item) => item.group === groupName);
        if (!items.length) return '';
        return (
          '<div class="group-block">' +
          '<h3 class="group-heading">' +
          escapeHtml(groupName) +
          '</h3>' +
          renderControlRows(items, false) +
          '</div>'
        );
      })
      .join('');
  }

  function renderMechanicsSection(mechanics) {
    return (
      '<div class="card-grid">' +
      mechanics
        .map((mech) => {
          const notesHtml = (mech.fieldNotes || [])
            .map((note) => '<li>' + escapeHtml(note) + '</li>')
            .join('');
          const keysHtml = (mech.relatedKeys || [])
            .map((key) => '<kbd class="keycap keycap-sm">[' + escapeHtml(key) + ']</kbd>')
            .join('');
          return (
            '<article class="field-card">' +
            '<div class="card-kicker">' +
            escapeHtml(mech.domain) +
            '</div>' +
            '<h3 class="card-title">' +
            escapeHtml(mech.title) +
            '</h3>' +
            '<p class="card-summary">' +
            escapeHtml(mech.summary) +
            '</p>' +
            '<ul class="card-notes">' +
            notesHtml +
            '</ul>' +
            '<div class="card-keys">' +
            keysHtml +
            '</div>' +
            '</article>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  function renderSearchResults(query) {
    const q = query.toLowerCase();
    const matchedControls = (state.config.controls || []).filter((c) =>
      [c.key, c.title, c.description, c.group, c.context].join(' ').toLowerCase().includes(q)
    );
    const matchedMechanics = (state.config.survivalMechanics || []).filter((m) =>
      [m.title, m.domain, m.summary, ...(m.fieldNotes || [])].join(' ').toLowerCase().includes(q)
    );
    const matchedCommands = (state.config.commands || []).filter((cmd) =>
      [cmd.command, cmd.title, cmd.description].join(' ').toLowerCase().includes(q)
    );

    const total = matchedControls.length + matchedMechanics.length + matchedCommands.length;

    els.sectionTitle.textContent = 'Search Results';
    els.sectionMeta.textContent = total + ' matching ' + (total === 1 ? 'entry' : 'entries');

    if (total === 0) {
      els.contentBody.innerHTML =
        '<div class="empty-state">' +
        '<h3>No matching controls or survival guides</h3>' +
        '<p>Try searching for F5, ALT, vehicle, infection, prone, or /help.</p>' +
        '</div>';
      return;
    }

    const parts = [];
    if (matchedControls.length) {
      parts.push(
        '<div class="group-block"><h3 class="group-heading">Controls & Hotkeys</h3>' +
          renderControlRows(matchedControls, false) +
          '</div>'
      );
    }
    if (matchedCommands.length) {
      parts.push(
        '<div class="group-block"><h3 class="group-heading">Commands</h3>' +
          renderControlRows(matchedCommands, true) +
          '</div>'
      );
    }
    if (matchedMechanics.length) {
      parts.push(
        '<div class="group-block"><h3 class="group-heading">Survival Mechanics</h3>' +
          renderMechanicsSection(matchedMechanics) +
          '</div>'
      );
    }

    els.contentBody.innerHTML = parts.join('');
  }

  function renderContent() {
    els.menuTitle.textContent = state.config.menuTitle || 'Survival Field Manual';
    els.menuSubtitle.textContent = state.config.menuSubtitle || 'BeyondSurvival (BS19)';
    els.footerNote.textContent =
      state.config.footerRebindNote ||
      'You can rebind keys anytime in ESC > Settings > Key Bindings > FiveM.';
    els.footerToggleKey.textContent = '[' + (state.config.defaultKey || 'F9') + ']';

    renderSidebar();

    const trimmed = state.searchQuery.trim();
    els.clearSearchBtn.classList.toggle('hidden', trimmed.length === 0);

    if (trimmed.length > 0) {
      renderSearchResults(trimmed);
      return;
    }

    switch (state.activeTab) {
      case 'getting-started': {
        const steps = state.config.gettingStarted || [];
        els.sectionTitle.textContent = 'Getting Started';
        els.sectionMeta.textContent = steps.length + ' field priorities';
        els.contentBody.innerHTML = renderGettingStarted(steps);
        break;
      }
      case 'controls': {
        const controls = state.config.controls || [];
        els.sectionTitle.textContent = 'Controls & Hotkeys';
        els.sectionMeta.textContent = controls.length + ' bound actions';
        els.contentBody.innerHTML = renderControlsSection(controls);
        break;
      }
      case 'mechanics': {
        const mechanics = state.config.survivalMechanics || [];
        els.sectionTitle.textContent = 'Survival Mechanics';
        els.sectionMeta.textContent = mechanics.length + ' core systems';
        els.contentBody.innerHTML = renderMechanicsSection(mechanics);
        break;
      }
      case 'commands': {
        const cmds = state.config.commands || [];
        els.sectionTitle.textContent = 'Commands';
        els.sectionMeta.textContent =
          cmds.length + ' available chat ' + (cmds.length === 1 ? 'command' : 'commands');
        els.contentBody.innerHTML = renderControlRows(cmds, true);
        break;
      }
    }
  }

  function openMenu(payload) {
    if (payload && payload.config) {
      state.config = Object.assign({}, FALLBACK_CONFIG, payload.config);
    }

    state.isOpen = true;
    els.backdrop.classList.remove('hidden');
    if (els.browserReopenBtn) {
      els.browserReopenBtn.classList.add('hidden');
    }
    renderContent();
  }

  function closeMenu() {
    if (!state.isOpen) return;
    state.isOpen = false;
    state.searchQuery = '';
    els.searchInput.value = '';
    els.backdrop.classList.add('hidden');

    if (state.isFiveM) {
      fetch('https://bs19-help/close', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({}),
      }).catch(function () {});
    } else if (els.browserReopenBtn) {
      els.browserReopenBtn.classList.remove('hidden');
    }
  }

  // Event listeners
  els.sidebarNav.addEventListener('click', function (event) {
    const button = event.target.closest('button[data-tab]');
    if (!button) return;
    state.activeTab = button.getAttribute('data-tab');
    state.searchQuery = '';
    els.searchInput.value = '';
    renderContent();
  });

  els.searchInput.addEventListener('input', function (event) {
    state.searchQuery = event.target.value || '';
    renderContent();
  });

  els.clearSearchBtn.addEventListener('click', function () {
    state.searchQuery = '';
    els.searchInput.value = '';
    els.searchInput.focus();
    renderContent();
  });

  els.closeBtn.addEventListener('click', closeMenu);

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && state.isOpen) {
      event.preventDefault();
      closeMenu();
    } else if (!state.isFiveM && event.key === 'F9') {
      event.preventDefault();
      if (state.isOpen) {
        closeMenu();
      } else {
        openMenu({ config: state.config });
      }
    }
  });

  window.addEventListener('message', function (event) {
    const data = event.data;
    if (!data || !data.action) return;

    if (data.action === 'open') {
      openMenu(data);
    } else if (data.action === 'close') {
      state.isOpen = false;
      els.backdrop.classList.add('hidden');
    }
  });

  // Standalone browser preview fallback when opened outside FiveM CEF
  if (!state.isFiveM) {
    document.body.classList.add('browser-preview');
    if (els.browserReopenBtn) {
      els.browserReopenBtn.addEventListener('click', function () {
        openMenu({ config: state.config });
      });
    }

    openMenu({ config: FALLBACK_CONFIG });
  }
})();

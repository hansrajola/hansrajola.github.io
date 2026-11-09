/**
 * Main Application Logic
 * Handles themes, mobile drawer, project filtering, dynamic rendering, and form submission.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderSkills();
  renderExperience();
  renderProjectsFilter();
  renderProjects('All');
  initMobileMenu();
  initContactForm();
  initScrollEffects();
  initProjectModal();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* --------------------------------------------------
 * 1. Dark / Light Mode Handler
 * -------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-toggle-icon');
  
  // Check persisted or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    updateThemeIcon(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcon(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    });
  }
}

function updateThemeIcon(isDark) {
  const icon = document.getElementById('theme-toggle-icon');
  if (icon) {
    icon.className = isDark ? 'fas fa-sun text-yellow-400 text-lg' : 'fas fa-moon text-slate-700 text-lg';
  }
}

/* --------------------------------------------------
 * 2. Mobile Menu Drawer
 * -------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  const menuBackdrop = document.getElementById('mobile-menu-backdrop');
  const menuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    menuDrawer.classList.remove('translate-x-full');
    menuBackdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMenu() {
    menuDrawer.classList.add('translate-x-full');
    menuBackdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* --------------------------------------------------
 * 3. Render Profile & Stats
 * -------------------------------------------------- */
function renderProfile() {
  // Update texts if present
  const nameEls = document.querySelectorAll('.profile-name');
  nameEls.forEach(el => el.textContent = profileData.name);

  const titleEls = document.querySelectorAll('.profile-title');
  titleEls.forEach(el => el.textContent = profileData.title);

  const bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.textContent = profileData.bio;

  const locationEl = document.getElementById('profile-location');
  if (locationEl) locationEl.textContent = profileData.location;

  const statusEl = document.getElementById('profile-status');
  if (statusEl) statusEl.textContent = profileData.status;

  // Stats Grid
  const statsContainer = document.getElementById('profile-stats-container');
  if (statsContainer && profileData.stats) {
    statsContainer.innerHTML = profileData.stats.map(stat => `
      <div class="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm text-center">
        <div class="text-2xl lg:text-3xl font-extrabold text-blue-600 dark:text-blue-400">${stat.value}</div>
        <div class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mt-1">${stat.label}</div>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------
 * 4. Render Skills
 * -------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !skillCategories) return;

  const iconMap = {
    code: 'fa-code',
    server: 'fa-server',
    cloud: 'fa-cloud',
    sparkles: 'fa-wand-magic-sparkles'
  };

  container.innerHTML = skillCategories.map(cat => `
    <div class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
          <i class="fas ${iconMap[cat.icon] || 'fa-code'}"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">${cat.name}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        ${cat.skills.map(skill => `
          <span class="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition cursor-default">
            ${skill}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------
 * 5. Render Experience
 * -------------------------------------------------- */
function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container || !experienceData) return;

  container.innerHTML = experienceData.map((exp, index) => `
    <div class="relative pl-8 sm:pl-10 pb-10 border-l-2 border-blue-500/30 dark:border-blue-500/20 last:border-transparent last:pb-0">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900"></div>
      <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
        <h4 class="text-lg font-bold text-slate-900 dark:text-white">${exp.role}</h4>
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">${exp.period}</span>
      </div>
      <div class="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">${exp.company}</div>
      <p class="text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">${exp.description}</p>
      <div class="flex flex-wrap gap-1.5">
        ${exp.tags.map(tag => `
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            #${tag}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------
 * 6. Projects Filtering & Rendering
 * -------------------------------------------------- */
function renderProjectsFilter() {
  const filterContainer = document.getElementById('project-filters');
  if (!filterContainer || !projectCategories) return;

  filterContainer.innerHTML = projectCategories.map(cat => `
    <button 
      class="filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${cat === 'All' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}"
      data-category="${cat}">
      ${cat}
    </button>
  `).join('');

  filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterContainer.querySelectorAll('.filter-btn').forEach(b => {
        b.className = 'filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700';
      });
      btn.className = 'filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition bg-blue-600 text-white shadow-md shadow-blue-500/20';
      renderProjects(btn.dataset.category);
    });
  });
}

function renderProjects(selectedCategory = 'All') {
  const container = document.getElementById('projects-container');
  if (!container || !projectsData) return;

  const filtered = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500 dark:text-slate-400">
        No projects found in this category.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => `
    <article class="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
      <!-- Project Banner -->
      <div class="h-44 bg-gradient-to-r ${project.imageGradient || 'from-blue-600 to-indigo-600'} p-5 flex flex-col justify-between relative overflow-hidden">
        <div class="flex justify-between items-start z-10">
          <span class="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-black/30 text-white backdrop-blur-md">
            ${project.category}
          </span>
          ${project.featured ? `
            <span class="px-2 py-1 text-[10px] font-bold rounded-md bg-amber-400/90 text-amber-950 flex items-center gap-1">
              <i class="fas fa-star text-[9px]"></i> Featured
            </span>
          ` : ''}
        </div>
        <div class="text-white/20 text-6xl font-black absolute -right-2 -bottom-4 select-none group-hover:scale-110 group-hover:text-white/30 transition duration-300">
          #0${project.id}
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 onclick="openProjectModal(${project.id})" class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition cursor-pointer">
            ${project.title}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed">
            ${project.description}
          </p>
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${project.tags.map(tag => `
              <span class="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-700/60">
          <button onclick="openProjectModal(${project.id})"
             class="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition"
             title="Quick View Details">
            <i class="fas fa-eye text-xs"></i>
          </button>
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"
             class="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
            <span>Live Portal</span>
            <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition"
             title="View Code">
            <i class="fab fa-github text-sm"></i>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

/* --------------------------------------------------
 * 7. Contact Form & Toast
 * -------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name']?.value;
    const email = form.elements['email']?.value;
    const message = form.elements['message']?.value;

    if (!name || !email || !message) {
      showToast('Please fill out all fields.', 'error');
      return;
    }

    // Success response (Can be easily hooked to Formspree, Web3Forms, or EmailJS)
    showToast(`Thank you, ${name}! Your message has been prepared.`, 'success');
    form.reset();
  });
}

function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const isSuccess = type === 'success';
  toast.className = `toast-animate pointer-events-auto p-4 rounded-xl shadow-lg border text-sm font-medium flex items-center gap-3 text-white ${isSuccess ? 'bg-emerald-600 border-emerald-500' : 'bg-rose-600 border-rose-500'}`;
  toast.innerHTML = `
    <i class="fas ${isSuccess ? 'fa-circle-check' : 'fa-circle-exclamation'} text-lg"></i>
    <span class="flex-1">${message}</span>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* --------------------------------------------------
 * 8. Scroll Effects & Active Nav Highlighting
 * -------------------------------------------------- */
function initScrollEffects() {
  const header = document.getElementById('navbar-header');
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header styling on scroll
    if (scrollY > 20) {
      header?.classList.add('shadow-sm', 'bg-white/85', 'dark:bg-slate-900/85');
      header?.classList.remove('bg-transparent');
    } else {
      header?.classList.remove('shadow-sm', 'bg-white/85', 'dark:bg-slate-900/85');
      header?.classList.add('bg-transparent');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn?.classList.remove('hidden', 'opacity-0');
      backToTopBtn?.classList.add('opacity-100');
    } else {
      backToTopBtn?.classList.add('opacity-0');
      setTimeout(() => {
        if (scrollY <= 400) backToTopBtn?.classList.add('hidden');
      }, 200);
    }

    // Scroll spy for navigation
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active', 'text-blue-600', 'dark:text-blue-400');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active', 'text-blue-600', 'dark:text-blue-400');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* --------------------------------------------------
 * 9. Project Details Modal
 * -------------------------------------------------- */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('project-modal-close');

  function closeModal() {
    if (!modal) return;
    modal.classList.add('opacity-0');
    const card = document.getElementById('project-modal-card');
    if (card) card.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 200);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const card = document.getElementById('project-modal-card');
  const content = document.getElementById('project-modal-content');
  if (!modal || !content || !projectsData) return;

  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  content.innerHTML = `
    <div class="space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
        ${project.category}
      </div>

      <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white">
        ${project.title}
      </h3>

      <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        ${project.description}
      </p>

      <div class="pt-2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Technologies Used</h4>
        <div class="flex flex-wrap gap-2">
          ${project.tags.map(tag => `
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="flex items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"
           class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition shadow-md shadow-blue-500/20">
          <span>Visit Live Platform</span>
          <i class="fas fa-arrow-up-right-from-square text-xs"></i>
        </a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition">
          <i class="fab fa-github"></i>
          <span>Repository</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    if (card) card.classList.remove('scale-95');
  }, 10);
}


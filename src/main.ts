document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  // Active state tester helper
  function isLinkActive(href: string): boolean {
    const isHome = href === 'index.html';
    const pathEndsWithHref = currentPath.endsWith(href);
    const isPathRootOrHome = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/');
    return pathEndsWithHref || (isHome && isPathRootOrHome);
  }

  // ==========================================
  // 0. Programmatic Background Lighting Layer Setup
  // ==========================================
  let bgLayer = document.querySelector('.bg-lighting-layer') as HTMLElement | null;
  if (!bgLayer) {
    bgLayer = document.createElement('div');
    bgLayer.className = 'bg-lighting-layer';
    document.body.prepend(bgLayer);
  }

  // Set highly aesthetic page-specific ambient lighting coordinates to morph during transitions
  const pageName = currentPath.split('/').pop() || 'index.html';
  if (pageName.includes('index.html') || pageName === '' || pageName === '/') {
    document.documentElement.style.setProperty('--glow-x1', '15%');
    document.documentElement.style.setProperty('--glow-y1', '15%');
    document.documentElement.style.setProperty('--glow-x2', '85%');
    document.documentElement.style.setProperty('--glow-y2', '85%');
    document.documentElement.style.setProperty('--glow-x3', '50%');
    document.documentElement.style.setProperty('--glow-y3', '50%');
  } else if (pageName.includes('about.html')) {
    document.documentElement.style.setProperty('--glow-x1', '75%');
    document.documentElement.style.setProperty('--glow-y1', '20%');
    document.documentElement.style.setProperty('--glow-x2', '20%');
    document.documentElement.style.setProperty('--glow-y2', '80%');
    document.documentElement.style.setProperty('--glow-x3', '40%');
    document.documentElement.style.setProperty('--glow-y3', '65%');
  } else if (pageName.includes('skills.html')) {
    document.documentElement.style.setProperty('--glow-x1', '25%');
    document.documentElement.style.setProperty('--glow-y1', '75%');
    document.documentElement.style.setProperty('--glow-x2', '75%');
    document.documentElement.style.setProperty('--glow-y2', '25%');
    document.documentElement.style.setProperty('--glow-x3', '60%');
    document.documentElement.style.setProperty('--glow-y3', '35%');
  } else if (pageName.includes('projects.html')) {
    document.documentElement.style.setProperty('--glow-x1', '80%');
    document.documentElement.style.setProperty('--glow-y1', '30%');
    document.documentElement.style.setProperty('--glow-x2', '35%');
    document.documentElement.style.setProperty('--glow-y2', '70%');
    document.documentElement.style.setProperty('--glow-x3', '15%');
    document.documentElement.style.setProperty('--glow-y3', '15%');
  } else if (pageName.includes('resume.html')) {
    document.documentElement.style.setProperty('--glow-x1', '30%');
    document.documentElement.style.setProperty('--glow-y1', '15%');
    document.documentElement.style.setProperty('--glow-x2', '80%');
    document.documentElement.style.setProperty('--glow-y2', '55%');
    document.documentElement.style.setProperty('--glow-x3', '20%');
    document.documentElement.style.setProperty('--glow-y3', '80%');
  } else if (pageName.includes('contact.html')) {
    document.documentElement.style.setProperty('--glow-x1', '50%');
    document.documentElement.style.setProperty('--glow-y1', '40%');
    document.documentElement.style.setProperty('--glow-x2', '15%');
    document.documentElement.style.setProperty('--glow-y2', '85%');
    document.documentElement.style.setProperty('--glow-x3', '80%');
    document.documentElement.style.setProperty('--glow-y3', '20%');
  }

  // ==========================================
  // 1. Programmatic Mobile Sidebar Drawer Setup
  // ==========================================
  const sidebarBackdrop = document.createElement('div');
  sidebarBackdrop.className = 'mobile-sidebar-backdrop';
  sidebarBackdrop.id = 'mobile-sidebar-backdrop';
  
  const sidebar = document.createElement('div');
  sidebar.className = 'mobile-sidebar';
  sidebar.id = 'mobile-sidebar';
  
  sidebar.innerHTML = `
    <div class="mobile-sidebar-header">
      <a href="index.html" class="logo-badge">HW</a>
      <button class="mobile-sidebar-close" id="mobile-sidebar-close" aria-label="Close menu">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="mobile-sidebar-body">
      <nav class="mobile-sidebar-links">
        <a href="index.html" class="mobile-sidebar-link ${isLinkActive('index.html') ? 'active' : ''}">Home</a>
        <a href="about.html" class="mobile-sidebar-link ${isLinkActive('about.html') ? 'active' : ''}">About</a>
        <a href="skills.html" class="mobile-sidebar-link ${isLinkActive('skills.html') ? 'active' : ''}">Skills</a>
        <a href="projects.html" class="mobile-sidebar-link ${isLinkActive('projects.html') ? 'active' : ''}">Projects</a>
        <a href="resume.html" class="mobile-sidebar-link ${isLinkActive('resume.html') ? 'active' : ''}">Resume</a>
        <a href="contact.html" class="mobile-sidebar-link ${isLinkActive('contact.html') ? 'active' : ''}">Contact</a>
      </nav>
    </div>
    <div class="mobile-sidebar-footer">
      <div class="mobile-sidebar-socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
        <span class="sidebar-social-dot">•</span>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" aria-label="Telegram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.13 2.82a1.6 1.6 0 0 0-1.63-.12L2.43 11a1.6 1.6 0 0 0-.11 2.92l5.12 2a1.6 1.6 0 0 0 1.25-.13l10.9-7a.4.4 0 0 1 .45.66l-8.6 8.3a1.6 1.6 0 0 0-.4 1.77l2.22 5.1a1.6 1.6 0 0 0 2.94-.35L21.82 4.4a1.6 1.6 0 0 0-.69-1.58z"></path></svg>
        </a>
        <span class="sidebar-social-dot">•</span>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        </a>
        <span class="sidebar-social-dot">•</span>
        <a href="mailto:hundaolworku1949@gmail.com" class="text-slate-400 hover:text-white transition-colors" aria-label="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        </a>
      </div>
    </div>
  `;
  
  document.body.appendChild(sidebarBackdrop);
  document.body.appendChild(sidebar);

  const menuToggle = document.getElementById('menu-toggle');
  
  function openSidebar() {
    sidebar.classList.add('active');
    sidebarBackdrop.classList.add('active');
    menuToggle?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarBackdrop.classList.remove('active');
    menuToggle?.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = sidebar.classList.contains('active');
      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }
  
  sidebarBackdrop.addEventListener('click', closeSidebar);
  
  const sidebarCloseBtn = document.getElementById('mobile-sidebar-close');
  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', closeSidebar);
  }

  // ==========================================
  // 1.5 Touch Swipe Navigation Handler
  // ==========================================
  let touchStartX = 0;
  let touchStartY = 0;
  const minSwipeDistance = 50;
  const maxVerticalOffset = 100; // Screen swipe vertical lock
  
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });
  
  document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);
    
    // Horizontal swipe filtering (prevent vertical scroll noise interference)
    if (deltaY < maxVerticalOffset) {
      if (deltaX < -minSwipeDistance && !sidebar.classList.contains('active')) {
        // Swipe right-to-left (moving left) -> Open sidebar from right
        openSidebar();
      } else if (deltaX > minSwipeDistance && sidebar.classList.contains('active')) {
        // Swipe left-to-right (moving right) -> Close sidebar of right side
        closeSidebar();
      }
    }
  }, { passive: true });

  // ==========================================
  // 2. Active URL Nav Highlighter (Desktop View)
  // ==========================================
  const navElements = document.querySelectorAll('.nav-link');
  
  navElements.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      if (isLinkActive(href)) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    }
  });

  // 3. Dynamic skills category filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  
  if (filterButtons.length > 0 && skillCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active visual states on filters
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        if (!filterValue) return;
        
        skillCards.forEach(card => {
          const category = card.getAttribute('data-category');
          const element = card as HTMLElement;
          
          if (filterValue === 'all' || category === filterValue) {
            element.classList.remove('filtered-out');
            // Mini fade animation trigger
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            setTimeout(() => {
              element.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, 30);
          } else {
            element.classList.add('filtered-out');
          }
        });
      });
    });
  }

  // 4. Secure client-side Contact Form handling
  const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
  const formStatusBar = document.getElementById('form-status-bar');
  const submitBtn = document.getElementById('form-submit-btn') as HTMLButtonElement | null;
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      function showStatus(msg: string, type: 'success' | 'danger') {
        if (formStatusBar) {
          formStatusBar.textContent = msg;
          formStatusBar.className = `form-status-bar ${type}`;
          formStatusBar.style.display = 'block';
          
          // Clear after 6 seconds (between 5-8 as requested)
          setTimeout(() => {
            formStatusBar.style.display = 'none';
            formStatusBar.className = 'form-status-bar';
          }, 6000);
        }
      }
      
      try {
        const response = await fetch("https://formspree.io/f/xeebppyo", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showStatus("Your message has been sent successfully!", "success");
          contactForm.reset();
        } else {
          const data = await response.json();
          const errorMsg = data.errors ? data.errors.map((error: any) => error.message).join(", ") : "Problem submitting form.";
          showStatus(`Error: ${errorMsg}`, "danger");
        }
      } catch (err) {
        showStatus("Connectivity error. Please check your internet connection.", "danger");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }
    });
  }
  
  // 5. Scroll reveal animation utilities
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const revealCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
        revealObserver.unobserve(target);
      }
    });
  };
  
  const revealObserver = new IntersectionObserver(revealCallback, observerOptions);
  
  // Apply visual trigger points to sections or big elements
  const revealElements = document.querySelectorAll('.animate-on-scroll');
  revealElements.forEach(element => {
    const el = element as HTMLElement;
    
    // Check if the element is already in or overlapping the viewport on initial page load
    const rect = el.getBoundingClientRect();
    const isInViewport = rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0;
    
    if (isInViewport) {
      // If it's already in the viewport on page load, let the page's native View Transition
      // animate it. We do not hide it initially, which avoids double-animation flashes/visual timing conflicts.
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    } else {
      // For elements below the fold, hide them and observe to trigger a smooth scroll-reveal on scroll
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      revealObserver.observe(el);
    }
  });

  // ==========================================
  // 6. Premium Translucent Modal Popup Engine
  // ==========================================

  // Project Specifications Dataset
  const projectsData: Record<string, {
    title: string;
    category: string;
    description: string;
    built: string;
    technologies: string[];
    role: string;
    repo: string;
  }> = {
    'project-5': {
      title: 'Inventory Management System (IMSO)',
      category: 'Fullstack / Mobile',
      description: 'A full-stack inventory and stock management system built for small businesses, designed to track products, sales, and stock operations efficiently across web and mobile platforms.',
      built: 'IMSO is a business-focused inventory management system developed to support Ethiopian small and medium businesses. It provides tools for managing stock levels, product entries, and basic operational workflows across both web and mobile interfaces. The system is designed to be practical, scalable, and adaptable for real business environments, focusing on usability and reliability in day-to-day operations. Built as a full-stack application with a multi-platform approach, combining a web interface and a mobile application. The system uses a structured backend API, local database storage, and cross-platform client interfaces for consistent data handling across devices.',
      technologies: ['React', 'React Native', 'Node.js', 'Express', 'TypeScript', 'JavaScript', 'HTML / CSS', 'SQLite / SQLCipher', 'Cloud APIs'],
      role: 'Software Engineer, UI/UX Designer & Developer — responsible for frontend development, UI/UX design, and parts of full-stack implementation while working with a startup team at HAGERE TECH SOLUTIONS.',
      repo: 'https://github.com/Hun49'
    },
    'project-6': {
      title: 'HAGERE TECH SOLUTIONS Website',
      category: 'Corporate Web',
      description: 'A modern company portfolio website designed to showcase services, connect users with the company, and present HAGERE TECH SOLUTIONS professionally online.',
      built: 'This is a corporate showcase website built to represent HAGERE TECH SOLUTIONS and its vision. The platform serves as a digital presence for the startup, allowing users to understand the company, explore its offerings, and establish contact easily. Built as a responsive frontend web application focused on clean UI structure, smooth navigation, and professional presentation. The system emphasizes branding, layout consistency, and user-friendly design for company visibility.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      role: 'Web Developer & UI/UX Designer — contributed as part of the startup team, focusing on frontend development and interface design to create a clean and modern company presence.',
      repo: 'https://github.com/Hun49'
    },
    'project-1': {
      title: 'My Analytic',
      category: 'Android App',
      description: 'A personal device analytics app that tracks and visualizes daily smartphone usage patterns, helping users understand how they interact with their phone over time.',
      built: 'My Analytic is an Android-based application designed to provide deep insights into device behavior — including screen time, app usage distribution, call history, messaging patterns, and battery consumption trends. It transforms raw device activity into clear, meaningful analytics so users can identify habits and optimize their digital usage. Built as a mobile-first Android application focused on system-level usage tracking and data aggregation. The app collects device interaction signals and processes them into structured analytics views, including time-based breakdowns and usage ranking systems.',
      technologies: ['Android', 'React Native', 'Mobile App Development', 'Usage Analytics Systems'],
      role: 'Solo Developer — designed the concept, implemented core tracking logic, and built the full application from idea to functional prototype. Focused on turning low-level device data into an understandable user dashboard.',
      repo: 'https://github.com/Hun49/My-Analytic'
    },
    'project-4': {
      title: 'Finance Tracker',
      category: 'Finance App',
      description: 'A personal finance tracking web application designed to help users monitor income, expenses, and debts with clear time-based summaries.',
      built: 'Finance Tracker allows users to log daily income and expenses, track financial activity over time (daily, weekly, monthly, and yearly), and view total balance in real time. It also includes a debt tracking system to record money owed or owed to others, including partial payments and remaining balances. Built as a frontend web application focused on data entry, calculation logic, and time-based financial summaries. The system organizes user input into structured financial records and dynamically calculates balances, trends, and debt status.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      role: 'Solo Developer — designed and implemented the full application to manage personal finances during daily work income tracking. Built as a practical tool and learning project focused on data handling and logic systems.',
      repo: 'https://github.com/Hun49'
    },
    'project-2': {
      title: 'Focus Session',
      category: 'Desktop App',
      description: 'A university productivity desktop app designed to help students study efficiently through focus timers, quizzes, flashcards, and access to academic materials like past exams and worksheets.',
      built: 'Focus Session centralizes study tools and learning resources into one system, allowing students to run focus sessions, test their knowledge, and access shared academic content uploaded by peers. It was built as an object-oriented Java desktop application with modular components for authentication (student ID login), study sessions, quizzes, flashcards, and a shared resource library.',
      technologies: ['Java', 'OOP', 'Desktop Application Development'],
      role: 'Core Developer & Idea Contributor — worked in a team of 5, leading system design decisions and implementing key application features as part of an OOP course project.',
      repo: 'https://github.com/Hun49'
    },
    'project-3': {
      title: 'Location Tracker',
      category: 'Mapping Web App',
      description: 'An interactive web application that allows users to sign up, view other users on a live map, and optionally share or hide their real-time location.',
      built: 'Location Tracker is a social-style mapping web app inspired by Snap Map. It enables users to register, appear on a shared map, and view the approximate locations of other active users. Users also have the option to switch between visible mode and "ghost mode" to hide their presence. Built as a frontend web application using Google Maps API for real-time map rendering and location visualization. The system handles user sessions, live location updates, and dynamic marker placement on the map.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Google Maps API'],
      role: 'Solo Developer — designed and implemented the entire concept, including UI logic, map integration, and location visibility system. Built as a learning project exploring real-time geolocation and interactive map systems.',
      repo: 'https://github.com/Hun49'
    },
    'project-8': {
      title: 'FoodLens',
      category: 'Discovery Platform',
      description: 'A mobile-first restaurant discovery platform that helps users find the right place to eat based on their preferences, budget, location, and dining needs.',
      built: 'FoodLens is designed to simplify restaurant discovery by allowing users to search naturally for places that match what they\'re looking for. Whether it\'s a specific cuisine, budget, nearby location, or dining experience, the app provides personalized recommendations through an intuitive and user-friendly interface. A companion web platform is planned for restaurant management and broader accessibility. Designed as a mobile-first application with intelligent search, interactive maps, and personalized recommendations. The platform will integrate restaurant listings, location services, filtering, ratings, menus, and AI-powered search to help users discover restaurants more efficiently.',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Google Maps API', 'REST APIs'],
      role: 'Product Designer & Developer — conceived the idea to improve restaurant discovery through a modern, mobile-first experience. Responsible for the product vision, user experience, application architecture, and planned implementation.',
      repo: 'https://github.com/Hun49'
    },
    'project-7': {
      title: 'Buy Car',
      category: 'Smart Car Search',
      description: 'A smart car search platform that helps buyers discover vehicles matching their budget, preferences, and requirements from verified listings across multiple marketplaces.',
      built: 'Buy Car is a concept for a web application that simplifies the car-buying process. Instead of manually searching through multiple websites, users describe the type of vehicle they\'re looking for, set a budget, and receive personalized matches from trusted marketplaces, with an initial focus on the Ethiopian market. The platform is designed to aggregate listings from multiple sources, filter results based on user preferences, and present relevant recommendations through a simple, intuitive search experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'Search & Filtering Logic'],
      role: 'Product Designer & Developer — conceived the idea based on my own experience of searching for a car within a budget and planning the complete user experience and application workflow.',
      repo: 'https://github.com/Hun49'
    }
  };

  // Academic Credentials Dataset
  const credentialsData: Record<string, {
    title: string;
    period: string;
    verificationCode: string;
    image?: string;
    fallbacks?: string[];
  }> = {
    'grade-11-12-c1': {
      title: 'Grade 11-12 completion Certificate',
      period: 'Completed: 2020',
      verificationCode: 'GORO-PREP-2020-G1112',
      image: '/credentials/grade_11n12.jpg',
      fallbacks: ['/credentials/grade_11n12.png', '/credentials/grade_11_n_12.jpg']
    },
    'grade-11-12-c2': {
      title: 'University Entrance Exam certificate',
      period: 'Completed: 2020',
      verificationCode: 'ETH-ENTRANCE-2020-EE',
      image: '/credentials/entrance_exam.jpg',
      fallbacks: ['/credentials/entrance_exam.png', '/credentials/entrance-exam.jpg']
    },
    'grade-9-10-c1': {
      title: 'Grade 9-10 completion Certificate',
      period: 'Completed: 2018',
      verificationCode: 'SEC-GRAD-2018-02A',
      image: '/credentials/grade_9n10.jpg',
      fallbacks: ['/credentials/grade_9n10.png', '/credentials/grade-9-10.jpg']
    },
    'grade-9-10-c2': {
      title: 'Matric Exam',
      period: 'Completed: 2018',
      verificationCode: 'SEC-COMP-2018-05D',
      image: '/credentials/matric_exam.jpg',
      fallbacks: ['/credentials/matric_exam.png', '/credentials/matric.jpg']
    },
    'grade-8-c1': {
      title: 'Grade 8 Ministry Exam',
      period: 'Completed: Grade 8 (Ministry Examination)',
      verificationCode: 'PRIM-GRAD-2016-01F',
      image: '/credentials/grade8.jpg',
      fallbacks: ['/credentials/grade8.png', '/credentials/grade_8.jpg']
    },
    'tme-arduino-cert': {
      title: 'Electronics & Arduino Training Program Certificate',
      period: 'Training Program Completion',
      verificationCode: 'TME-ARDUINO-CERT-2025',
      image: '/credentials/tme_certificate.jpg',
      fallbacks: ['/credentials/tme_certificate.png', '/credentials/tme.jpg']
    }
  };

  // Resume Document Simulated HTML template
  const resumePreviewHTML = `
    <div class="modal-resume-container" style="color: #f1f5f9; padding: 12px 4px; max-width: 760px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif;">
      <header class="resume-header" style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px; margin-bottom: 24px;">
        <h2 class="resume-name" style="font-size: 1.85rem; font-weight: 700; color: #fff; letter-spacing: -0.025em; margin-bottom: 4px;">Hundaol Worku</h2>
        <div class="resume-subtitle-text" style="font-family: var(--font-mono); font-size: 0.8rem; color: #10b981; letter-spacing: 0.1em; font-weight: 500;">SOFTWARE DEVELOPER & ASTU STUDENT</div>
        <div class="resume-contacts-row" style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 8px; font-size: 0.75rem; color: #94a3b8;">
          <span>hundaolworku1949@gmail.com</span>
          <span>•</span>
          <span>Adama, Ethiopia</span>
          <span>•</span>
          <span>github.com/Hun49</span>
        </div>
      </header>
      
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <!-- About Me / Summary -->
        <div class="resume-grid-block">
          <h3 class="resume-section-title" style="font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; margin-bottom: 8px;">Professional Summary</h3>
          <p class="resume-bullet" style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.6; margin: 0; text-align: justify;">
            A dedicated and results-driven final-year Software Engineering student at Adama Science and Technology University (ASTU) with graduation expected in 2027. Proficient in building full-stack applications, interactive maps, and embedded hardware interfaces. Skilled in digital records management, data workflow processes, and optimizing frontend and backend user experiences. Fluent in English, Amharic, and Afan Oromo.
          </p>
        </div>

        <!-- Education Background -->
        <div class="resume-grid-block">
          <h3 class="resume-section-title" style="font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; margin-bottom: 8px;">Education Background</h3>
          
          <div class="resume-item-wrap" style="margin-bottom: 12px;">
            <div class="resume-item-head" style="display: flex; justify-content: space-between; font-weight: 500; font-size: 0.85rem; color: #f1f5f9;">
              <span>Adama Science and Technology University (ASTU)</span>
              <span>2021 — Present</span>
            </div>
            <div class="resume-item-sub" style="font-size: 0.75rem; color: #10b981; margin-bottom: 4px;">B.Sc. in Software Engineering (Final Year, Graduating 2027)</div>
            <p class="resume-bullet" style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.5; margin: 0;">Selected Coursework: Operating Systems, Database Management Systems, Advanced Algorithms, Human-Computer Interaction. Serves as Lead Student Developer at ASTU Software Engineering Club.</p>
          </div>

          <div class="resume-item-wrap" style="margin-bottom: 12px;">
            <div class="resume-item-head" style="display: flex; justify-content: space-between; font-weight: 500; font-size: 0.85rem; color: #f1f5f9;">
              <span>Goro Preparatory School</span>
              <span>Completed: 2020</span>
            </div>
            <div class="resume-item-sub" style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">Grade 11-12 College Preparatory Program</div>
          </div>

          <div class="resume-item-wrap" style="margin-bottom: 12px;">
            <div class="resume-item-head" style="display: flex; justify-content: space-between; font-weight: 500; font-size: 0.85rem; color: #f1f5f9;">
              <span>Secondary Education Completion</span>
              <span>Completed: 2018</span>
            </div>
            <div class="resume-item-sub" style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">Grade 9-10 Secondary Program</div>
          </div>

          <div class="resume-item-wrap">
            <div class="resume-item-head" style="display: flex; justify-content: space-between; font-weight: 500; font-size: 0.85rem; color: #f1f5f9;">
              <span>Adama No. 5 Elementary School</span>
              <span>Completed: 2016</span>
            </div>
            <div class="resume-item-sub" style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">Grade 8 National Ministry Examination Completion</div>
          </div>
        </div>

        <!-- Professional Experience & Training -->
        <div class="resume-grid-block">
          <h3 class="resume-section-title" style="font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; margin-bottom: 8px;">Professional Experience & Training</h3>
          
          <div class="resume-item-wrap" style="margin-bottom: 12px;">
            <div class="resume-item-head" style="display: flex; justify-content: space-between; font-weight: 500; font-size: 0.85rem; color: #f1f5f9;">
              <span>Data Encoder</span>
              <span>2025 — 2026</span>
            </div>
            <div class="resume-item-sub" style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">Private Company (Ethiopia)</div>
            <p class="resume-bullet" style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.5; margin: 0;">Maintained structured business databases and organized core information assets under high-throughput requirements with extreme accuracy and data privacy workflows.</p>
          </div>

          <div class="resume-item-wrap">
            <div class="resume-item-head" style="display: flex; justify-content: space-between; font-weight: 500; font-size: 0.85rem; color: #f1f5f9;">
              <span>Electronics & Arduino Training Program</span>
              <span>Certificate Program</span>
            </div>
            <div class="resume-item-sub" style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">TME.eu – Introduction to Electronics & Arduino</div>
            <p class="resume-bullet" style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.5; margin: 0;">Acquired robust foundation in embedded hardware, covering microcontrollers, Arduino programming (C/C++), basic physical electronic circuits, sensors, and signal feedback loops.</p>
          </div>
        </div>

        <!-- Software Projects Experience -->
        <div class="resume-grid-block">
          <h3 class="resume-section-title" style="font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; margin-bottom: 8px;">Software Projects Experience</h3>

          <div style="margin-bottom: 10px;">
            <div style="font-size: 0.8rem; font-weight: 600; color: #f1f5f9;">Inventory Management System (IMSO) <span style="font-size: 0.7rem; font-weight: normal; color: #94a3b8;">| React, React Native, Node.js Express, SQLite</span></div>
            <p style="font-size: 0.75rem; color: #cbd5e1; margin: 2px 0 0 0; line-height: 1.4;">A full-stack tracking system tailored for small businesses to manage stock levels and sales workflows across mobile and desktop platforms.</p>
          </div>

          <div style="margin-bottom: 10px;">
            <div style="font-size: 0.8rem; font-weight: 600; color: #f1f5f9;">HAGERE TECH SOLUTIONS Website <span style="font-size: 0.7rem; font-weight: normal; color: #94a3b8;">| HTML, CSS, TypeScript / JavaScript</span></div>
            <p style="font-size: 0.75rem; color: #cbd5e1; margin: 2px 0 0 0; line-height: 1.4;">Early-stage corporate web portal mapping out product services, interactive user connections, and brand portfolio assets.</p>
          </div>

          <div style="margin-bottom: 10px;">
            <div style="font-size: 0.8rem; font-weight: 600; color: #f1f5f9;">Focus Session <span style="font-size: 0.7rem; font-weight: normal; color: #94a3b8;">| Java Desktop (OOP), Modular Design Patterns</span></div>
            <p style="font-size: 0.75rem; color: #cbd5e1; margin: 2px 0 0 0; line-height: 1.4;">Academic utility software featuring focus interval timers, digital quiz modules, student login systems, and document resource portals.</p>
          </div>

          <div style="margin-bottom: 10px;">
            <div style="font-size: 0.8rem; font-weight: 600; color: #f1f5f9;">My Analytic <span style="font-size: 0.7rem; font-weight: normal; color: #94a3b8;">| React Native, Android Mobile Analytics</span></div>
            <p style="font-size: 0.75rem; color: #cbd5e1; margin: 2px 0 0 0; line-height: 1.4;">Device diagnostics application capturing, evaluating, and plotting daily smartphone usage habits to guide healthy usage patterns.</p>
          </div>

          <div>
            <div style="font-size: 0.8rem; font-weight: 600; color: #f1f5f9;">Location Tracker <span style="font-size: 0.7rem; font-weight: normal; color: #94a3b8;">| JavaScript, Google Maps API, HTML5 / CSS3</span></div>
            <p style="font-size: 0.75rem; color: #cbd5e1; margin: 2px 0 0 0; line-height: 1.4;">Live mapping app facilitating safe user registration and optional real-time coordinate streaming over maps.</p>
          </div>
        </div>

        <!-- Technical Skillsets & Languages -->
        <div class="resume-grid-block">
          <h3 class="resume-section-title" style="font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; margin-bottom: 8px;">Technical Skills & Languages</h3>
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.75rem; color: #cbd5e1; line-height: 1.5;">
            <div><strong style="color: #f1f5f9;">Core Techs:</strong> TypeScript, JavaScript, React, React Native, Node.js, Express, Java (OOP), HTML5, CSS3, Google Maps API</div>
            <div><strong style="color: #f1f5f9;">Databases & DevOps:</strong> SQL, PostgreSQL, SQLite, Git, Docker, Figma UI/UX</div>
            <div><strong style="color: #f1f5f9;">Language Capabilities:</strong> English (Professional), Amharic (Native), Afan Oromo (Native)</div>
          </div>
        </div>

        <!-- Verified Academic Credentials -->
        <div class="resume-grid-block">
          <h3 class="resume-section-title" style="font-size: 0.8rem; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; margin-bottom: 8px;">Scholastic Certifications & Verifications</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; font-size: 0.7rem; color: #cbd5e1;">
            <div>• <strong>Grade 11-12 completion Certificate</strong>: <span style="font-family: var(--font-mono); color: #10b981;">GORO-PREP-2020-G1112</span></div>
            <div>• <strong>University Entrance Exam certificate</strong>: <span style="font-family: var(--font-mono); color: #10b981;">ETH-ENTRANCE-2020-EE</span></div>
            <div>• <strong>Grade 9-10 completion Certificate</strong>: <span style="font-family: var(--font-mono); color: #10b981;">SEC-GRAD-2018-02A</span></div>
            <div>• <strong>Matric Exam Completion</strong>: <span style="font-family: var(--font-mono); color: #10b981;">SEC-COMP-2018-05D</span></div>
            <div style="grid-column: span 2;">• <strong>Grade 8 Ministry Exam</strong>: <span style="font-family: var(--font-mono); color: #10b981;">PRIM-GRAD-2016-01F</span></div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Standard Reusable Modal Popup Controller
  function createAndShowModal(htmlContent: string) {
    // Backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'modal-backdrop';
    
    // Modal card box container
    const modalBox = document.createElement('div');
    modalBox.className = 'modal-box';
    backdrop.appendChild(modalBox);
    
    // Closer Button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close-btn';
    closeBtn.ariaLabel = 'Close modal dialog';
    closeBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      destroyModal(backdrop);
    });
    modalBox.appendChild(closeBtn);
    
    // Custom body scroll content wrapper
    const contentScroll = document.createElement('div');
    contentScroll.className = 'modal-content-scroll';
    contentScroll.innerHTML = htmlContent;
    modalBox.appendChild(contentScroll);
    
    // Push into body tree
    document.body.appendChild(backdrop);
    
    // Lock original layout body scrolling
    document.body.style.overflow = 'hidden';
    
    // Trigger CSS state fadein
    setTimeout(() => {
      backdrop.classList.add('visible');
    }, 15);
    
    // Closer by clicking direct backdrop focus
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        destroyModal(backdrop);
      }
    });

    // Close on escape key
    const escListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        destroyModal(backdrop);
        document.removeEventListener('keydown', escListener);
      }
    };
    document.addEventListener('keydown', escListener);
  }

  function destroyModal(backdrop: HTMLElement) {
    backdrop.classList.remove('visible');
    backdrop.classList.add('fade-out');
    setTimeout(() => {
      backdrop.remove();
      document.body.style.overflow = '';
    }, 300);
  }

  // ==========================================
  // 7. Event Delegation & Project Modals Bind
  // ==========================================

  // Project cards trigger delegation
  const displayGrid = document.getElementById('projects-display-grid');
  if (displayGrid) {
    displayGrid.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      // Check if button clicked or if card clicked
      const detailsBtn = target.closest('.btn-project-details');
      const projectCard = target.closest('.project-card');
      
      if (detailsBtn || (projectCard && !target.closest('a'))) {
        const activeItem = detailsBtn || projectCard;
        if (!activeItem) return;
        
        const projId = activeItem.getAttribute('data-project') || activeItem.getAttribute('data-project-id');
        if (!projId || !projectsData[projId]) return;
        
        const data = projectsData[projId];
        
        // Assemble beautiful project specifications HTML content
        const projectHtml = `
          <div class="project-modal-wrapper" style="color: #cbd5e1;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 12px; padding-right: 48px;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #10b981; font-weight: 600;">${data.category} Specification</span>
              <span style="font-size: 0.75rem; color: #64748b; font-family: var(--font-mono);">${projId}</span>
            </div>
            
            <h2 style="font-size: 1.6rem; color: #fff; font-weight: 700; letter-spacing: -0.025em; margin-bottom: 12px; padding-right: 48px;">${data.title}</h2>
            
            <p style="color: #f1f5f9; font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">${data.description}</p>
            
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <h4 style="color: #fff; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">How it was Built</h4>
              <p style="font-size: 0.85rem; line-height: 1.5; color: #94a3b8;">${data.built}</p>
            </div>
            
            <div style="margin-bottom: 16px;">
              <h4 style="color: #fff; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">My Role & Purpose</h4>
              <p style="font-size: 0.85rem; line-height: 1.5; color: #94a3b8; font-style: italic;">${data.role}</p>
            </div>

            <div style="margin-bottom: 24px;">
              <h4 style="color: #fff; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Technologies Stack</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${data.technologies.map(lang => `<span style="font-size: 0.72rem; font-family: var(--font-mono); background: rgba(255,255,255,0.04); color: #cbd5e1; border: 1px solid rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;">${lang}</span>`).join('')}
              </div>
            </div>
            
            <div style="display: flex; gap: 12px; margin-top: 12px;">
              <a href="${data.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; justify-content: center; font-size: 0.85rem;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                View Repository
              </a>
            </div>
          </div>
        `;
        
        createAndShowModal(projectHtml);
      }
    });
  }

  // Credentials View Triggering (Listening globally on document)
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const credBtn = target.closest('.btn-view-credential');
    if (credBtn) {
      const credId = credBtn.getAttribute('data-cred');
      console.log('Credential Clicked:', credId);
      if (!credId || !credentialsData[credId]) {
        console.warn('Credential ID not found in dataset:', credId);
        return;
      }
      
      const data = credentialsData[credId];
      console.log('Credential Data found:', data);
      let credHtml = '';
      if (data && data.image) {
        // Resolve absolute URL based on the current origin to ensure reliable pathing
        const origin = window.location.origin;
        const mainUrl = data.image.startsWith('http') ? data.image : (origin + (data.image.startsWith('/') ? '' : '/') + data.image);
        
        // Prepare fallbacks as absolute URLs
        const fallbacks = (data.fallbacks || []).map(f => {
          return f.startsWith('http') ? f : (origin + (f.startsWith('/') ? '' : '/') + f);
        });
        const fallbacksStr = JSON.stringify(fallbacks);

        credHtml = `
          <div class="certificate-image-modal-content" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; gap: 16px;">
            <div class="glass-certificate-container" style="position: relative; width: 100%; padding: 16px; border-radius: 14px; background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 20px 50px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); overflow: hidden; display: flex; flex-direction: column; align-items: center;">
              
              <div style="width: 100%; display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-right: 32px;">
                <div style="text-align: left;">
                  <span style="font-family: var(--font-mono); font-size: 0.65rem; color: #14b8a6; font-weight: 700; letter-spacing: 0.12em; display: block; text-transform: uppercase;">Original Credential Document</span>
                  <span style="font-size: 0.95rem; color: #fff; font-weight: 700; letter-spacing: -0.01em;">${data.title}</span>
                </div>
                <span style="font-family: var(--font-mono); font-size: 0.65rem; color: #14b8a6; background: rgba(20,184,166,0.1); border: 1px solid rgba(20,184,166,0.15); padding: 3px 8px; border-radius: 4px; font-weight: 600;">${data.verificationCode}</span>
              </div>

              <div style="position: relative; width: 100%; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.05); background: #0c0f16; display: flex; justify-content: center; align-items: center;">
                <img src="${mainUrl}" 
                     alt="${data.title}" 
                     crossorigin="anonymous"
                     referrerpolicy="no-referrer"
                     onerror="
                       (function(img) {
                         if (!img.dataset.attempt) img.dataset.attempt = '0';
                         var att = parseInt(img.dataset.attempt, 10);
                         var urls = ${fallbacksStr.replace(/"/g, "'")};
                         console.warn('Image Load Failed, trying fallback:', att, urls[att]);
                         if (att < urls.length) {
                           img.dataset.attempt = (att + 1).toString();
                           img.src = urls[att];
                         } else {
                           img.onerror = null;
                           img.style.display = 'none';
                           img.parentElement.innerHTML = '<div style=\'padding: 40px; text-align: center; color: #94a3b8;\'><p>Document preview unavailable</p><p style=\'font-size: 10px; opacity: 0.5; margin-top: 8px; word-break: break-all;\'>' + img.src + '</p></div>';
                         }
                       })(this);
                     "
                     style="width: 100%; height: auto; display: block; object-fit: contain; max-height: 75vh; border-radius: 6px;" />
              </div>

              <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-top: 14px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06);">
                <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 500;">Conferred: ${data.period || ''}</span>
              </div>

            </div>
          </div>
        `;
      } else {
        credHtml = `
          <div class="certified-image-placeholder-modal" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 200px;">
            <div class="digital-certificate-card" style="width: 100%; border: 1.5px dashed rgba(255, 255, 255, 0.15); border-radius: 12px; padding: 48px 24px; background: rgba(15, 23, 42, 0.6); text-align: center; position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: #f1f5f9; margin: 0;">${data.title}</h3>
              <p style="font-family: var(--font-mono); font-size: 0.95rem; color: #f43f5e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 8px 0 0 0;">no image here</p>
            </div>
          </div>
        `;
      }
      
      createAndShowModal(credHtml);
    }
  });

  // Resume PDF Preview Modal Triggering
  const previewResumeBtn = document.getElementById('btn-preview-resume');
  if (previewResumeBtn) {
    previewResumeBtn.addEventListener('click', () => {
      createAndShowModal(resumePreviewHTML);
    });
  }

  // Resume PDF Download Button Triggering
  const downloadResumeBtn = document.getElementById('pdf-download-action-btn');
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const element = document.createElement('div');
      element.style.fontFamily = "system-ui, -apple-system, sans-serif";
      element.style.color = "#1e293b";
      element.style.padding = "40px 50px";
      element.style.backgroundColor = "#ffffff";
      element.style.width = "720px";
      element.style.margin = "0 auto";
      
      element.innerHTML = `
        <div style="line-height: 1.5; color: #1e293b;">
          <!-- Header -->
          <header style="text-align: center; border-bottom: 2px solid #0f766e; padding-bottom: 12px; margin-bottom: 18px;">
            <h1 style="font-size: 28px; font-weight: 800; color: #0f172a; margin: 0 0 4px 0; letter-spacing: -0.03em;">Hundaol Worku</h1>
            <div style="font-size: 11px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px;">Software Developer & Engineering Student</div>
            <div style="display: flex; justify-content: center; gap: 12px; font-size: 11px; color: #475569; flex-wrap: wrap; font-weight: 500;">
              <span>hundaolworku1949@gmail.com</span>
              <span>•</span>
              <span>Adama, Ethiopia</span>
              <span>•</span>
              <span>github.com/Hun49</span>
            </div>
          </header>

          <!-- Summary -->
          <section style="margin-bottom: 18px;">
            <h2 style="font-size: 11px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e2e8f0; padding-bottom: 3px; margin: 0 0 6px 0;">Professional Summary</h2>
            <p style="font-size: 10.5px; color: #334155; margin: 0; text-align: justify; line-height: 1.5;">
              A dedicated and analytical final-year Software Engineering student at Adama Science and Technology University (ASTU) with graduation expected in 2027. Skilled in full-stack web and mobile development, embedded hardware architectures, and digital systems integration. Adept at managing structured business databases, maintaining operational throughput, and creating intuitive user interfaces. Fluent in English, Amharic, and Afan Oromo.
            </p>
          </section>

          <!-- Education -->
          <section style="margin-bottom: 18px;">
            <h2 style="font-size: 11px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e2e8f0; padding-bottom: 3px; margin: 0 0 6px 0;">Education Background</h2>
            
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 2px;">
                <span>Adama Science and Technology University (ASTU)</span>
                <span>2021 — Present</span>
              </div>
              <div style="font-size: 9.5px; font-weight: 600; color: #0f766e; margin-bottom: 3px;">B.Sc. in Software Engineering (Final Year, Expected Graduation: 2027)</div>
              <p style="font-size: 10.5px; color: #334155; margin: 0; line-height: 1.4;">Selected coursework includes Operating Systems, Advanced Database Design, Algorithms, and HCI. Served as active Lead Student Developer at ASTU Software Engineering Club.</p>
            </div>

            <div style="margin-bottom: 8px;">
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 2px;">
                <span>Goro Preparatory School</span>
                <span>Completed: 2020</span>
              </div>
              <div style="font-size: 9.5px; font-weight: 500; color: #64748b;">Grade 11-12 College Preparatory Program</div>
            </div>

            <div style="margin-bottom: 8px;">
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 2px;">
                <span>Grade 9-10 Secondary Completion</span>
                <span>Completed: 2018</span>
              </div>
              <div style="font-size: 9.5px; font-weight: 500; color: #64748b;">Ethiopian National General Secondary Curriculum</div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 2px;">
                <span>Adama No. 5 Elementary School</span>
                <span>Completed: 2016</span>
              </div>
              <div style="font-size: 9.5px; font-weight: 500; color: #64748b;">Grade 8 National Ministry Examination</div>
            </div>
          </section>

          <!-- Professional Experience -->
          <section style="margin-bottom: 18px;">
            <h2 style="font-size: 11px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e2e8f0; padding-bottom: 3px; margin: 0 0 6px 0;">Professional Experience & Training</h2>
            
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 2px;">
                <span>Data Encoder</span>
                <span>2025 — 2026</span>
              </div>
              <div style="font-size: 9.5px; font-weight: 600; color: #475569; margin-bottom: 3px;">Private Company (Ethiopia)</div>
              <p style="font-size: 10.5px; color: #334155; margin: 0; line-height: 1.4;">Accurately encoded, organized, and digitized core business records. Followed strict data management workflows and protocols within a structured corporate environment.</p>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 2px;">
                <span>Electronics & Arduino Training Program</span>
                <span>Certificate Program</span>
              </div>
              <div style="font-size: 9.5px; font-weight: 600; color: #475569; margin-bottom: 3px;">TME.eu – Introduction to Electronics & Arduino</div>
              <p style="font-size: 10.5px; color: #334155; margin: 0; line-height: 1.4;">Successfully completed an introduction to microcontrollers, circuit layout schematics, physical sensors, and embedded systems programming in C/C++.</p>
            </div>
          </section>

          <!-- Projects -->
          <section style="margin-bottom: 18px;">
            <h2 style="font-size: 11px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e2e8f0; padding-bottom: 3px; margin: 0 0 6px 0;">Software Projects Experience</h2>

            <div style="margin-bottom: 6px;">
              <div style="font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">Inventory Management System (IMSO) <span style="font-size: 9px; font-weight: 500; color: #64748b;">| React, React Native, Node.js, SQLite</span></div>
              <p style="font-size: 10.5px; color: #334155; margin: 0; line-height: 1.4;">A cross-platform stock logging system built to handle inventory balances and daily sale transactions cleanly.</p>
            </div>

            <div style="margin-bottom: 6px;">
              <div style="font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">HAGERE TECH SOLUTIONS Website <span style="font-size: 9px; font-weight: 500; color: #64748b;">| HTML, CSS, TypeScript</span></div>
              <p style="font-size: 10.5px; color: #334155; margin: 0; line-height: 1.4;">Designed and deployed an early-stage startup corporate landing space with structured pages demonstrating services and goals.</p>
            </div>

            <div style="margin-bottom: 6px;">
              <div style="font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">Focus Session <span style="font-size: 9px; font-weight: 500; color: #64748b;">| Java Desktop (OOP)</span></div>
              <p style="font-size: 10.5px; color: #334155; margin: 0; line-height: 1.4;">An academic desktop study aid including customizable focus timers, interactive flashcards, quizzes, and local student data records.</p>
            </div>

            <div style="margin-bottom: 6px;">
              <div style="font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">My Analytic <span style="font-size: 9px; font-weight: 500; color: #64748b;">| React Native, Android SDK</span></div>
              <p style="font-size: 10.5px; color: #334155; margin: 0; line-height: 1.4;">Analyzed and graphed standard daily Android device interactions and app open intervals to support user health metrics.</p>
            </div>

            <div>
              <div style="font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">Location Tracker <span style="font-size: 9px; font-weight: 500; color: #64748b;">| JavaScript, Google Maps API</span></div>
              <p style="font-size: 10.5px; color: #334155; margin: 0; line-height: 1.4;">Live map system mapping user clusters using coordinates and custom privacy toggle parameters.</p>
            </div>
          </section>

          <!-- Technical Skills & Languages -->
          <section style="margin-bottom: 18px;">
            <h2 style="font-size: 11px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e2e8f0; padding-bottom: 3px; margin: 0 0 6px 0;">Technical Skills & Languages</h2>
            <div style="display: flex; justify-content: space-between; font-size: 10px; color: #334155;">
              <div style="flex: 1.2;">
                <strong>Programming & Frontend:</strong> TypeScript, JavaScript, React, React Native, Java (OOP), HTML5, CSS3, Maps API
              </div>
              <div style="flex: 1; padding-left: 15px;">
                <strong>Backend & Database:</strong> Node.js, Express, SQL, PostgreSQL, SQLite, Git, Docker, Figma
              </div>
              <div style="width: 140px; padding-left: 15px;">
                <strong>Languages:</strong> English, Amharic, Afan Oromo
              </div>
            </div>
          </section>

          <!-- Credentials verification -->
          <section style="page-break-inside: avoid;">
            <h2 style="font-size: 11px; font-weight: 700; color: #0f766e; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e2e8f0; padding-bottom: 3px; margin: 0 0 6px 0;">Academic Credentials & Verifications</h2>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; font-size: 9px; color: #475569;">
              <div>• <strong>Grade 11-12 Certificate</strong>: GORO-PREP-2020-G1112</div>
              <div>• <strong>University Entrance Exam</strong>: ETH-ENTRANCE-2020-EE</div>
              <div>• <strong>Grade 9-10 Certificate</strong>: SEC-GRAD-2018-02A</div>
              <div>• <strong>Matric Exam</strong>: SEC-COMP-2018-05D</div>
              <div style="grid-column: span 2;">• <strong>Grade 8 Ministry Exam</strong>: PRIM-GRAD-2016-01F</div>
            </div>
          </section>
        </div>
      `;

      const opt = {
        margin:       [0.4, 0.4, 0.4, 0.4],
        filename:     'Hundaol_Worku_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      // Append element to document body so html2canvas can measure layout coordinates accurately
      element.style.position = 'absolute';
      element.style.left = '-9999px';
      element.style.top = '0';
      document.body.appendChild(element);

      const runHtml2Pdf = () => {
        // @ts-ignore
        if (typeof html2pdf !== 'undefined') {
          // @ts-ignore
          html2pdf().set(opt).from(element).save().then(() => {
            element.remove();
          }).catch((err: any) => {
            console.error("PDF download failure:", err);
            element.remove();
          });
        } else {
          // If the script tag failed to load, inject the local script dynamically
          const script = document.createElement('script');
          script.src = "/assets/html2pdf.bundle.min.js";
          script.onload = () => {
            // @ts-ignore
            if (typeof html2pdf !== 'undefined') {
              // @ts-ignore
              html2pdf().set(opt).from(element).save().then(() => {
                element.remove();
              }).catch((err: any) => {
                console.error("PDF download failure:", err);
                element.remove();
              });
            } else {
              element.remove();
              window.print();
            }
          };
          script.onerror = () => {
            element.remove();
            window.print();
          };
          document.head.appendChild(script);
        }
      };

      runHtml2Pdf();
    });
  }

  // ==========================================
  // 8. Custom Error Toasts & Click Handler
  // ==========================================
  function showToast(message: string) {
    // Remove existing toast if present
    const existingToast = document.getElementById('custom-error-toast');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'repo-error-toast';
    toast.id = 'custom-error-toast';
    toast.innerHTML = `
      <div class="repo-error-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <div>${message}</div>
    `;

    document.body.appendChild(toast);

    // Trigger transition
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    // Fade out and remove after 3.5s
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hide');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3500);
  }

  function showRepoNotAvailableToast() {
    showToast('Repository is not available');
  }

  function showLinkedInNotAvailableToast() {
    showToast('LinkedIn account is not available yet');
  }

  // Handle click on any view repository or LinkedIn buttons across the application (on page or popup modal)
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor) {
      const textContent = anchor.textContent?.trim() || '';
      const href = anchor.getAttribute('href') || '';
      
      // Target buttons on the main page: has class "project-link-btn-secondary" and text "Open Repo"
      const isOpenRepoBtn = anchor.classList.contains('project-link-btn-secondary') && textContent.toLowerCase().includes('open repo');
      
      // Target button on the modal popup card: has text "View Repository"
      const isModalRepoBtn = textContent.toLowerCase().includes('view repository');
      
      // Target LinkedIn links (any href pointing to linkedin.com or element containing linkedin)
      const isLinkedInLink = href.includes('linkedin.com') || textContent.toLowerCase().includes('linkedin');
      
      if (isOpenRepoBtn || isModalRepoBtn) {
        e.preventDefault();
        showRepoNotAvailableToast();
      } else if (isLinkedInLink) {
        e.preventDefault();
        showLinkedInNotAvailableToast();
      }
    }
  });
});

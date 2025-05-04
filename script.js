document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const navLinkItems = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('section[id]'); // Get sections with IDs
    const backToTopButton = document.getElementById('back-to-top');

    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight;

    // --- Title Animation Variables ---
    let dynamicTitles = [];
    let currentTitleIndex = 0;
    let titleInterval;
    const titleElement = document.getElementById('hero-title'); // Get the span
    const titleChangeInterval = 3000; // Change title every 3 seconds (3000ms)
    const titleAnimationDuration = 500; // Duration of the slide CSS animation (in ms)

    // --- Data Loading ---
    async function loadPortfolioData() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Populate Personal Info
            const personal = data.personalInfo;
            document.title = `${personal.name} - Software Engineer`; // Update page title
            document.getElementById('hero-name').textContent = personal.name;
            document.getElementById('footer-name').textContent = personal.name;
            //document.getElementById('hero-title').textContent = personal.title;
            document.getElementById('hero-short-bio').textContent = personal.bio.substring(0, 150) + "..."; // Snippet for hero
            document.getElementById('about-bio').textContent = personal.bio; // Full bio
            document.getElementById('about-img').src = personal.profilePicture;
            document.getElementById('about-img').alt = personal.name;

            // --- Initialize and Start Title Animation ---
            if (personal.dynamicTitles && personal.dynamicTitles.length > 0) {
                dynamicTitles = personal.dynamicTitles;
                if (titleElement) {
                     titleElement.textContent = dynamicTitles[0]; // Set initial title
                     // Clear any previous interval if data reloads
                     if (titleInterval) clearInterval(titleInterval);
                     // Start the animation cycle slightly after the initial page load/fade-in
                     setTimeout(() => {
                         titleInterval = setInterval(changeHeroTitle, titleChangeInterval);
                     }, 1500); // Start after 1.5 seconds (adjust as needed)
                }
            } else if (titleElement && personal.title) {
                 // Fallback to the single static title if dynamicTitles array is missing/empty
                 titleElement.textContent = personal.title;
            }
            // --- END Title Animation Init ---

            // Social/Contact Links
            setupLink('hero-linkedin', personal.linkedin);
            setupLink('hero-github', personal.github);
            setupLink('hero-email', `mailto:${personal.email}`);
            setupLink('contact-linkedin', personal.linkedin);
            setupLink('contact-github', personal.github);
            setupLink('contact-email', `mailto:${personal.email}`);

            // Populate Skills
            const skillsContainer = document.getElementById('skills-container');
            skillsContainer.innerHTML = ''; // Clear loading text
            data.skills.forEach((skill, index) => {
                const skillElement = document.createElement('div');
                skillElement.classList.add('skill-item', 'fade-in-item'); // Add animation class
                skillElement.style.animationDelay = `${index * 0.1}s`; // Stagger animation
                skillElement.innerHTML = `
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                `;
                skillsContainer.appendChild(skillElement);
            });

            // Populate Projects
            const projectsContainer = document.getElementById('projects-container');
            projectsContainer.innerHTML = ''; // Clear loading text
            data.projects.forEach((project, index) => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project-card', 'fade-in-item'); // Add animation class
                 projectElement.style.animationDelay = `${index * 0.15}s`; // Stagger animation

                let techHtml = project.tech.map(tech => `<span>${tech}</span>`).join('');
                let linksHtml = `
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                    ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Code</a>` : ''}
                `;

                projectElement.innerHTML = `
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tech">
                            ${techHtml}
                        </div>
                        <div class="project-links">
                            ${linksHtml}
                        </div>
                    </div>
                `;
                projectsContainer.appendChild(projectElement);
            });

            // Update footer year
            document.getElementById('footer-year').textContent = new Date().getFullYear();

            // Re-initialize scroll animations after content is loaded
            initializeScrollAnimations();

        } catch (error) {
            console.error("Failed to load portfolio data:", error);
            // Display error message to user?
            document.getElementById('hero-short-bio').textContent = "Could not load portfolio data.";
            document.getElementById('about-bio').textContent = "Could not load portfolio data.";
            document.getElementById('skills-container').textContent = "Could not load skills.";
            document.getElementById('projects-container').textContent = "Could not load projects.";
        }
    }

    // --- Function to Change Hero Title ---
    function changeHeroTitle() {
        if (!titleElement || dynamicTitles.length === 0) return; // Safety check

        // Listener function (defined outside to remove it later)
        function handleAnimationEnd() {
            titleElement.classList.remove('entering'); // Clean up class
            titleElement.removeEventListener('animationend', handleAnimationEnd); // Remove listener
        }

        // 1. Add 'exiting' class to trigger slide-out animation
        titleElement.classList.add('exiting');

        // 2. Wait for the exit animation to finish
        setTimeout(() => {
            // 3. Calculate next index (looping)
            currentTitleIndex = (currentTitleIndex + 1) % dynamicTitles.length;

            // 4. Update the text content
            titleElement.textContent = dynamicTitles[currentTitleIndex];

            // 5. Remove 'exiting' class
            titleElement.classList.remove('exiting');

            // 6. Add 'entering' class to trigger the slide-in animation
            titleElement.classList.add('entering');

            // 7. Add listener to remove 'entering' when the NEW animation finishes
            //    Use { once: true } for automatic listener removal if supported,
            //    or remove manually as shown above.
            titleElement.addEventListener('animationend', handleAnimationEnd, { once: true });
        }, titleAnimationDuration); // Wait exactly the CSS animation duration
    }

    function setupLink(elementId, url) {
        const element = document.getElementById(elementId);
        if (element) {
            if (url) {
                element.href = url;
                if (url.startsWith('http')) { // Add target blank for external links
                    element.target = '_blank';
                    element.rel = 'noopener noreferrer';
                }
            } else {
                // Optionally hide the element if the URL is missing
                element.style.display = 'none';
            }
        }
    }


    // --- Navigation ---
    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');
        document.body.style.overflow = navLinks.classList.contains('nav-active') ? 'hidden' : ''; // Prevent scrolling when nav open

        // Animate Links
        navLinkItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''; // Reset animation
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && navLinks.classList.contains('nav-active')) {
             burger.click(); // Simulate a click on the burger to close
        }
    });

    // Close nav if clicking outside of it on mobile
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('nav-active')) {
             burger.click();
        }
    });


    // --- Active Nav Link Highlighting on Scroll ---
    function highlightNavLink() {
        let currentSection = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100; // Adjust offset
            const sectionHeight = section.offsetHeight;
             if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                 currentSection = section.getAttribute('id');
             }
        });
         // If near the bottom, highlight contact
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            currentSection = 'contact';
        }
        // If near the top before the first section, highlight home (hero)
        if (scrollY < document.getElementById('about').offsetTop - headerHeight - 150) {
             currentSection = 'hero';
        }


        navLinkItems.forEach(li => {
            const link = li.querySelector('a');
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

     // --- Header Hide/Show on Scroll ---
    function handleHeaderScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll <= headerHeight) { // If near top, always show header
             header.style.top = '0';
             header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'; // Keep shadow at top
             return;
        }

        if (currentScroll > lastScrollTop) { // Scrolling Down
             // Hide header only if not at the very top and nav is closed
             if (!navLinks.classList.contains('nav-active')) {
                  header.style.top = `-${headerHeight}px`;
             }
        } else { // Scrolling Up
             header.style.top = '0';
             header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }


    // --- Back to Top Button ---
    function handleBackToTop() {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // --- Scroll-Based Animations (Intersection Observer) ---
    function initializeScrollAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in, .skill-item, .project-card, .section-title, .contact-text, .contact-links, .about-image, .about-text');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Instead of adding complex classes, we rely on the initial animation definitions
                    // and their delays. We just need to trigger them once.
                    // For grid items, we use the pre-applied staggered delays.
                    entry.target.style.opacity = '1'; // Ensure it's visible
                    entry.target.style.transform = 'translateY(0)'; // Ensure it's in place if slid

                    // Optionally unobserve after animating once
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // viewport
            threshold: 0.1, // Trigger when 10% of the element is visible
            // rootMargin: '-50px' // Adjust if needed
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // --- Event Listeners ---
    window.addEventListener('scroll', () => {
        highlightNavLink();
        handleHeaderScroll();
        handleBackToTop();
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the link from jumping
            window.scrollTo({
                top: 0, // Scroll to the top of the page
                behavior: 'smooth' // Animate the scroll
            });
        });
    }

    // --- Initial Load ---
    loadPortfolioData(); // Load content from JSON
    highlightNavLink(); // Initial highlight
    handleBackToTop(); // Initial check
    // Note: initializeScrollAnimations is called *within* loadPortfolioData after content is added


}); // End DOMContentLoaded
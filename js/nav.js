// ================================
// STICKY NAV — JS
// ================================

const nav = document.getElementById('stickyNav');
const navToggle = document.getElementById('stickyNavToggle');
const navLinks = document.querySelector('.sticky-nav-links');
const dropdown = document.querySelector('.sticky-nav-dropdown');
const dropdownToggle = document.querySelector('.sticky-nav-dropdown-toggle');
const body = document.body;

// --------------------------------
// 1. Mobile hamburger toggle
// --------------------------------
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        nav.classList.toggle('open');
        body.classList.toggle('nav-open');
    });
}

// --------------------------------
// 2. Mobile Explore dropdown toggle
// --------------------------------
if (dropdown && dropdownToggle && navLinks && nav) {
    dropdownToggle.addEventListener('click', (event) => {
        dropdown.classList.toggle('open');
    });
}

// --------------------------------
// 3. Close mobile menu after clicking
//    an actual navigation link
// --------------------------------
if (navLinks) {
    navLinks.querySelectorAll('a.sticky-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            dropdown.classList.remove('open');
            body.classList.remove('nav-open');
            nav.classList.remove('open');
        });
    });
}

// --------------------------------
// 4. Shrink / shadow bar once scrolled
// --------------------------------
const SCROLL_THRESHOLD = 20;

function handleScrollState() {
    if (window.scrollY > SCROLL_THRESHOLD) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScrollState);
handleScrollState();

function scrollToHashTargetWhenStable() {
    if (!location.hash) return;

    let lastHeight = 0;
    let stableCount = 0;
    const maxChecks = 60;
    /* customize: ~3 seconds at 50ms intervals — raise if content loads slowly */
    let checks = 0;

    const interval = setInterval(() => {
        const currentHeight = document.body.scrollHeight;

        if (currentHeight === lastHeight) {
            stableCount++;
        } else {
            stableCount = 0;
            lastHeight = currentHeight;
        }

        const target = document.querySelector(location.hash);
        if (target) {
            target.scrollIntoView({ block: 'start' });
        }

        checks++;

        // stop once height hasn't changed for a few checks in a row, or we hit the cap
        if (stableCount >= 3 || checks >= maxChecks) {
            clearInterval(interval);
        }
    }, 50);
}

window.addEventListener('DOMContentLoaded', scrollToHashTargetWhenStable);

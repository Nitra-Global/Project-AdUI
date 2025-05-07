// script.js - Project AdUI Basic JavaScript (Enhanced 2025 Edition)

document.addEventListener('DOMContentLoaded', () => {

    // --- Interstitial Ad Logic ---
    const interstitialOverlay = document.getElementById('interstitialAd');
    const interstitialDialog = interstitialOverlay ? interstitialOverlay.querySelector('.adui-interstitial-dialog') : null;
    const interstitialCloseButton = interstitialOverlay ? interstitialOverlay.querySelector('.adui-interstitial-close') : null;
    let elementBeforeModal = null; // To store the element that was focused before the modal opened

    // Function to show the interstitial
    window.showInterstitial = function() {
        if (interstitialOverlay) {
            // Store the currently focused element
            elementBeforeModal = document.activeElement;

            interstitialOverlay.classList.add('is-visible');

            // Accessibility: Move focus into the modal dialog
            if (interstitialDialog) {
                // Use a slight delay to ensure the modal is visible and focusable
                setTimeout(() => {
                    interstitialDialog.focus();
                }, 50);
            }

            // Prevent scrolling on the body when modal is open
            document.body.style.overflow = 'hidden';
            // Prevent background content from being accessible to screen readers
            // Find all elements that are NOT the modal overlay and hide them from screen readers
            document.querySelectorAll('body > *:not(#interstitialAd)').forEach(el => {
                if (el.style.display !== 'none' && el.style.visibility !== 'hidden') {
                     el.setAttribute('aria-hidden', 'true');
                }
            });
        }
    };

    // Function to hide the interstitial
    window.hideInterstitial = function() {
        if (interstitialOverlay) {
            interstitialOverlay.classList.remove('is-visible');

            // Restore scrolling on the body
            document.body.style.overflow = '';

            // Restore accessibility to background content
             document.querySelectorAll('body > *:not(#interstitialAd)').forEach(el => {
                el.removeAttribute('aria-hidden');
            });

            // Accessibility: Return focus to the element that was focused before the modal opened
            if (elementBeforeModal && elementBeforeModal.focus) {
                 // Use a slight delay to ensure the modal is fully hidden before returning focus
                 setTimeout(() => {
                     elementBeforeModal.focus();
                     elementBeforeModal = null; // Clear the stored element
                 }, 50);
            }
        }
    };

    // Add event listener to the close button
    if (interstitialCloseButton) {
        interstitialCloseButton.addEventListener('click', hideInterstitial);
    }

    // Add event listener to close when clicking outside the dialog
    if (interstitialOverlay && interstitialDialog) {
        interstitialOverlay.addEventListener('click', function(event) {
            // Check if the click target is the overlay itself, not inside the dialog
            if (event.target === interstitialOverlay) {
                hideInterstitial();
            }
        });
    }

    // Add event listener to close with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && interstitialOverlay && interstitialOverlay.classList.contains('is-visible')) {
            hideInterstitial();
        }
    });

    // --- Sticky Banner Logic (Close Button) ---
    // Assuming sticky banners might have a close button with class '.adui-sticky-close'
    const stickyCloseButtons = document.querySelectorAll('.adui-sticky-close');

    stickyCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const stickyBanner = button.closest('.adui-sticky-banner-bottom, .adui-sticky-banner-top');
            if (stickyBanner) {
                stickyBanner.classList.add('is-hidden');
                // Optional: Remove the banner from the DOM after animation
                // This helps with screen readers not announcing hidden content
                // Get the transition duration from CSS if possible, or use a reasonable default
                const transitionDuration = parseFloat(getComputedStyle(stickyBanner).transitionDuration) * 1000 || 300;
                 setTimeout(() => {
                     stickyBanner.style.display = 'none'; // Or stickyBanner.remove();
                 }, transitionDuration);
            }
        });
    });

    // --- Basic Lazy Loading Example (Optional) ---
    // This is a very basic example. For production, consider using Intersection Observer.
    // const lazyLoadAds = document.querySelectorAll('.adui-ad-container[data-lazy-load]');
    // const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             const adContainer = entry.target;
    //             const adContent = adContainer.querySelector('.adui-content');
    //             // Replace placeholder content with actual ad creative
    //             // This part depends heavily on how you load your ads (e.g., fetching HTML, loading an iframe)
    //             // Example: Load an image based on a data attribute
    //             // const imageUrl = adContainer.getAttribute('data-image-src');
    //             // if (imageUrl) {
    //             //     const img = document.createElement('img');
    //             //     img.src = imageUrl;
    //             //     img.alt = adContainer.getAttribute('data-image-alt') || '';
    //             //     img.classList.add('block', 'max-w-full', 'h-auto', 'mx-auto'); // Add basic responsive classes
    //             //     adContent.innerHTML = ''; // Clear placeholder
    //             //     adContent.appendChild(img);
    //             // }
    //             console.log('Ad component is now visible, trigger ad load:', adContainer); // Placeholder action

    //             observer.unobserve(adContainer); // Stop observing once loaded
    //         }
    //     });
    // });

    // lazyLoadAds.forEach(ad => {
    //     lazyLoadObserver.observe(ad);
    // });


    // --- Basic Dismissible Non-Sticky Banner Example (Optional) ---
    // Add a close button HTML to your non-sticky banners and give it the class '.adui-dismiss-button'
    // const dismissButtons = document.querySelectorAll('.adui-ad-container .adui-dismiss-button');

    // dismissButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         const adContainer = button.closest('.adui-ad-container');
    //         if (adContainer) {
    //             adContainer.style.display = 'none'; // Or adContainer.remove();
    //             // Optional: Store dismissal preference in localStorage
    //             // const adId = adContainer.id || 'dismissed-ad-' + Date.now(); // Use a unique ID
    //             // localStorage.setItem('dismissedAd_' + adId, 'true');
    //         }
    //     });
    // });


    // --- Add more component-specific JavaScript here as needed ---

});

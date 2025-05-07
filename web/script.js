// script.js - Project AdUI Basic JavaScript (2025 Edition)

document.addEventListener('DOMContentLoaded', () => {

    // --- Interstitial Ad Logic ---
    const interstitialOverlay = document.getElementById('interstitialAd');
    const interstitialDialog = interstitialOverlay ? interstitialOverlay.querySelector('.adui-interstitial-dialog') : null;
    const interstitialCloseButton = interstitialOverlay ? interstitialOverlay.querySelector('.adui-interstitial-close') : null;

    // Function to show the interstitial
    window.showInterstitial = function() {
        if (interstitialOverlay) {
            interstitialOverlay.classList.add('is-visible');
            // Accessibility: Move focus into the modal
            if (interstitialDialog) {
                interstitialDialog.focus();
            }
            // Prevent scrolling on the body when modal is open
            document.body.style.overflow = 'hidden';
        }
    };

    // Function to hide the interstitial
    window.hideInterstitial = function() {
        if (interstitialOverlay) {
            interstitialOverlay.classList.remove('is-visible');
            // Accessibility: Return focus to the element that triggered the modal (requires tracking the trigger)
            // For simplicity here, we just remove overflow style
            document.body.style.overflow = '';
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

    // --- Sticky Banner Logic (Optional Close Button) ---
    // Assuming sticky banners might have a close button with class '.adui-sticky-close'
    const stickyCloseButtons = document.querySelectorAll('.adui-sticky-close');

    stickyCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const stickyBanner = button.closest('.adui-sticky-banner-bottom, .adui-sticky-banner-top');
            if (stickyBanner) {
                stickyBanner.classList.add('is-hidden');
                // Optional: Remove the banner from the DOM after animation
                // setTimeout(() => { stickyBanner.remove(); }, 300); // Match CSS transition duration
            }
        });
    });

    // --- Add more component-specific JavaScript here as needed ---

});

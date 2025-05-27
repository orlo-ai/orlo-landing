// Footer loader utility
async function loadFooter() {
    try {
        const response = await fetch('footer.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const footerHTML = await response.text();
        
        // Find the footer placeholder and replace it
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = footerHTML;
        }
    } catch (error) {
        console.error('Error loading footer:', error);
        // Fallback: Create a minimal footer if loading fails
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = `
                <footer class="py-8 px-4 bg-gray-900 text-white text-center">
                    <div class="max-w-5xl mx-auto">
                        <div class="text-gray-400 text-sm">
                            &copy; 2025 Orlo. All rights reserved.
                        </div>
                    </div>
                </footer>
            `;
        }
    }
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const body = document.body;

    // Check if the sidebar is active
    if (sidebar.classList.contains('active')) {
        // If active, remove the class and adjust content margin
        sidebar.classList.remove('active');
        body.classList.remove('sidebar-active');
        content.style.marginLeft = '0'; // Reset content margin
    } else {
        // If not active, add the class and adjust content margin
        sidebar.classList.add('active');
        body.classList.add('sidebar-active');
        content.style.marginLeft = '250px'; // Space for the sidebar
    }
}

// Event listener for the sidebar toggle button
document.querySelector('.sidebar-toggle').addEventListener('click', toggleSidebar);

// Optional: Close the sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');

    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-active');
        document.querySelector('.content').style.marginLeft = '0'; // Reset content margin
    }
});

// Optional: Add functionality for smooth scroll to sections (if applicable)
const links = document.querySelectorAll('.sidebar ul li a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

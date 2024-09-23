// Toggle Hamburger Menu for Responsive Navigation
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Function to dynamically load sidebar content
function loadSidebarContent() {
    const sidebarContent = `
        <h3>Quick Links</h3>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <h3>Recent Posts</h3>
        <ul>
            <li><a href="#">Telemedicine and Future of Healthcare</a></li>
            <li><a href="#">How to Improve UX for Health Apps</a></li>
            <li><a href="#">AI in Telemedicine: Opportunities and Challenges</a></li>
        </ul>
    `;
    document.getElementById('sidebar-content').innerHTML = sidebarContent;
}

// Call the function to load sidebar content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadSidebarContent);

// Form Submission Handling with Formspree API Integration
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const endpoint = contactForm.action;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Thank you for your feedback!');
                contactForm.reset(); // Reset the form after successful submission
            } else {
                alert('There was an issue submitting your feedback. Please try again.');
            }
        } catch (error) {
            alert('There was an error submitting the form. Please check your connection.');
        }
    });
}

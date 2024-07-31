document.addEventListener('DOMContentLoaded', () => {
    // Sample event data
    const events = [
        { title: 'Workshop on AI', date: 'September 15, 2024' },
        { title: 'Tech Talk with Industry Experts', date: 'October 5, 2024' },
        { title: 'Annual Cypher Event', date: 'November 10, 2024' }
    ];

    // Function to display events
    function displayEvents() {
        const eventsList = document.getElementById('events-list');
        eventsList.innerHTML = ''; // Clear existing content

        events.forEach(event => {
            const listItem = document.createElement('div');
            listItem.className = 'event-item';
            listItem.innerHTML = `<h4>${event.title}</h4><p>${event.date}</p>`;
            eventsList.appendChild(listItem);
        });
    }

    // Call the function to display events on page load
    displayEvents();

    // Form submission handling for Join Us
    const joinForm = document.getElementById('join-form');

    joinForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        

        const name = joinForm.elements['name'].value;
        const email = joinForm.elements['email'].value;
        const interest = joinForm.elements['interest'].value;

        if (name && email && interest) {
            alert('Thank you for joining us! We will get back to you soon.');
            joinForm.reset(); // Reset form fields after submission
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Form submission handling for Contact
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        const contactName = contactForm.elements['contact-name'].value;
        const contactEmail = contactForm.elements['contact-email'].value;
        const contactMessage = contactForm.elements['contact-message'].value;

        if (contactName && contactEmail && contactMessage) {
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.style.color = 'green';
            contactForm.reset(); // Reset form fields after submission
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        }
    });
});

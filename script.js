// Mobile menu toggle functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navList = document.getElementById('navList');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu on button click
mobileMenuBtn.addEventListener('click', function() {
    navList.classList.toggle('show');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (navList.classList.contains('show')) {
            navList.classList.remove('show');
        }
    });
});

        // Calendar date click handler
        const calendarDays = document.querySelectorAll('.calendar-day.has-events');
        const eventList = document.getElementById('eventList');

        calendarDays.forEach(day => {
            day.addEventListener('click', function() {
                // In a real implementation, this would show events for the specific day
                eventList.classList.add('active');
                
                // Scroll to event list
                eventList.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Gallery filter
        const galleryNavItems = document.querySelectorAll('.gallery-nav-item');
        
        galleryNavItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                galleryNavItems.forEach(navItem => {
                    navItem.classList.remove('active');
                });
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // In a real implementation, this would filter gallery items
            });
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });

        // Calendar navigation
        const prevMonthBtn = document.querySelector('.prev-month');
        const nextMonthBtn = document.querySelector('.next-month');
        const currentMonthEl = document.querySelector('.current-month');
        
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        let currentDate = new Date(2025, 4); // May 2025
        
        prevMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendarTitle();
            // In a real implementation, this would update the calendar grid
        });
        
        nextMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendarTitle();
            // In a real implementation, this would update the calendar grid
        });
        
        function updateCalendarTitle() {
            currentMonthEl.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        }

        // Calendar view toggle
        const viewOptions = document.querySelectorAll('.view-option');
        
        viewOptions.forEach(option => {
            option.addEventListener('click', function() {
                viewOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // In a real implementation, this would toggle between month and list view
            });
        });

        // Initialize any dynamic content
        document.addEventListener('DOMContentLoaded', function() {
            // Current page highlighting in navigation
            const currentLocation = window.location.href;
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                if(link.href === currentLocation) {
                    link.classList.add('active');
                }
            });
        });

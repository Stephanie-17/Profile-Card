
# Multi-page App Stage 1

## Author
**Name:** Emenike Stephanie  
**GitHub:** [Stephanie-17](https://github.com/Stephanie-17) 

---

## Project Overview
This project is a frontend web application built in **HTML, CSS, and vanilla JavaScript**. It consists of:

1. **Profile Card Page** (Stage 0)  
   - Displays user avatar, bio, hobbies, dislikes, social links, and current time in milliseconds.  
   - Fully responsive and accessible.

2. **About Page** (Stage 1)  
   - Reflective page with bio, goals, areas of low confidence, note to future self, and extra thoughts.  
   - Uses semantic HTML sections and proper headings.

3. **Contact Page** (Stage 1)  
   - Contact form with validation for name, email, subject, and message.  
   - Shows inline error messages and success message after valid submission.  
   - Fully accessible (labels, aria-describedby, keyboard navigable) and responsive.

---

## Technologies Used
- HTML5 (semantic markup)  
- CSS3 (Flexbox, media queries, responsive design)  
- JavaScript (form validation, dynamic current time display)  

---

## Features
### Profile Card
- Semantic `<article>`, `<figure>`, `<header>`, `<nav>`, `<section>` usage  
- Responsive layout for mobile, tablet, and desktop  
- Current time in milliseconds dynamically updated using JS  
- Accessible keyboard navigation  

### About Page
- Reflective sections using `<section>` with proper headings  
- Responsive two-column layout for Goals & Low Confidence  
- Accessible and readable design  

### Contact Page
- Form validation for required fields, email format, and minimum message length  
- Inline error messages linked via `aria-describedby`  
- Success message shown only after valid submission  
- Fully keyboard navigable and responsive  

---


## Installation / Running Locally

1. Clone the repository:
   
  git clone https://github.com/Stephanie-17/Profile-Card.git

2. Navigate to the project folder:
   cd Profile-Card

3. Open files in your browser:

- index.html → Profile Card

- about.html → About Page

- contact.html → Contact Form

## Accessibility & Responsiveness

- All interactive elements are keyboard-focusable

- Error messages linked with aria-describedby

- Form labels correctly associated with inputs

- Media queries ensure the site works on mobile, tablet, and desktop

--


## Notes

1. The element with data-testid="test-user-time" contains the raw milliseconds value required for automated tests.
2. All interactive elements are keyboard accessible.
3. Uses Google Fonts: "Open Sans" for clean, readable typography.
4. No additional frameworks or libraries are required; pure HTML/CSS/JS.






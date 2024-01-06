# Room Website

Welcome to the Room Website project! This repository contains the code for a stylish and interactive website designed to showcase furniture collections. The website utilizes HTML, CSS with Tailwind CSS, and JavaScript to provide a seamless and engaging user experience.

## Website Link

[Room Website](https://roooom.netlify.app/)

## Table of Contents

- [Overview](#overview)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [Challenges](#challenges)
- [Built with](#built-with)
- [Author](#author)
- [Getting Started](#getting-started)
- [Acknowledgments](#acknowledgments)

## Overview

### HTML

The HTML code (`index.html`) serves as the foundation for the Room Website, defining the structure and content. Key sections include:

- First Main Box: It has two box which are explained below;

  - First Box: Features a responsive navigation bar, logo, and a compelling message for an immersive user experience.
  - Second Box: Introduces users to the furniture collection with captivating visuals and a call-to-action button.

- Second Main Box: Highlights information about the furniture, including its multifunctional nature and the availability of product specialists.

### CSS

The CSS code (`styles.css`) enhances the visual appeal of the website, providing styling and responsiveness. Highlights include:

- Second Main Box Styling: It has two styling boxes as explained below;
  - First Box Styling: Applies background images, text styles, and responsive layouts to the first box.
  - Second Box Styling: Defines flex layouts, image styles, and responsive padding for the second box components.
- Second Main Box Styling: Styles the about-furniture section with appropriate fonts and spacing.

### JavaScript

The JavaScript code (`code.js`) adds interactivity to the website, focusing on mobile navigation and slide transitions. Key features include:

- Mobile Navigation: Implements functions (`openButton` and `closeButton`) for smooth toggling of the mobile navigation.
- Slide Transitions: Dynamically changes the background image and content of the first box based on user interaction.

## Challenges

Developing the Room Website presented several challenges:

- First Box:

1. Overcoming hover issues.
2. Ensuring height responsiveness.
3. Image and text slideshow issue where I had delays in JS looping and conditional statement.
4. Overlay button for slideshow issue.
5. Resolving issue of hover effects with provided svg arrow because it is image and color can't be changed, but made use of `filter : invert()`.

- Second Box: Addressing miscalculations in flexbox usage and resolving minor padding and margin issues.

- Additional Main Challenge
- Additional main issue I faced was with the tablet viewport where I had to set the max-height because this project is non-scrollable or less scrollable in Tablet and Desktop mode.
  So, to reolved the issue of height when using the website on Desktop mode with phone, I called in max-height to manage the height.

## Built with

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript

## Author

- Website: [Hammed Bello](http://hammedbello.netlify.app/)
- Twitter: [@JavaNotScript](https://twitter.com/JavaNotScript)

## Getting Started

1. Clone this repository to your local machine.
2. Open 'index.html' in your preferred web browser to explore the Room Website.

## Acknowledgments

- The [Tailwind CSS](https://tailwindcss.com/) framework greatly contributed to the responsive and stylish design.

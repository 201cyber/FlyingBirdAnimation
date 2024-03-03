# Flying Bird Animation

This is a simple webpage demonstrating a flying bird animation using HTML, CSS, and JavaScript.

## Overview

The webpage consists of an image of a bird that flies across the screen from left to right and then returns to its original position.

## Usage

To view the flying bird animation, simply open the HTML file in a web browser.

## Code Explanation

### HTML

- The HTML file contains a single `img` element with the id `bird`.
- The `src` attribute of the `img` element points to the image of the bird.

### CSS

- The CSS code positions the bird image off-screen initially and applies a transition to it for smooth movement.
- It ensures that the body of the webpage has no margin and hides any overflow.

### JavaScript

- The JavaScript code controls the flying animation of the bird.
- It defines a function `flyBird()` that moves the bird across the screen from left to right and then back to its original position.
- The `setInterval()` function is used to repeatedly call the `flyBird()` function at regular intervals, creating the flying animation effect.

## Customization

You can customize the animation by modifying the following:

- Replace the bird image URL (`src` attribute) in the HTML with your desired bird image.
- Adjust the timing and transition properties in the CSS to change the speed and smoothness of the animation.
- Modify the interval duration in the JavaScript code to change the frequency of the flying animation.

## License

This project is licensed under the [MIT License](LICENSE).

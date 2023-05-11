# Wine Time - Testing
[Main README.md file](https://github.com/irebernardidev/Wine-Time-MP1/blob/main/README.md)

[View live project](https://irebernardidev.github.io/Wine-Time-MP1/)

[View GitHub repository](https://github.com/irebernardidev/Wine-Time-MP1)

## Table of contents
1. [Testing User Stories](#testing-user-stories)
2. [Manual Testing](#manual-testing)
3. [Automated Testing](#automated-testing)
   * [Code Validation](#code-validation)
   * [Browser Validation](#browser-validation)
4. [User Testing](#user-testing)
5. [Lighthouse Testing](#lighthouse-testing)
## Testing User Stories
### Current User Goals:
1. **As a current user, I want to see regular updates to information, such as prices and wine selection available.**
- The Wine Bar Section highlights the philosophy and offerings of Wine Time, including a brief description, a wine menu, and appetizers. It provides an overview of what visitors can expect when they visit the wine bar.

- Wine Menu and Appetizers Buttons are direct links to the PDF files of the respective menus. These buttons provide quick and easy access to the detailed information about the offerings at Wine Time.

- The Menu page has three flip cards showcasing Red Wines, White Wines, and Sparkling Wines with an image and a description on the front, and a list of featured wines with their prices on the back.

2. **As a current user, I want to easily navigate through the site and access the information I require with ease.**
- The navigation bar is clearly defined and easily navigable for users to find and use.
- The hamburger menu is also clearly defined and easily navigable for users to find and use.
- The footer menu is easy to use with appropriate icons for easy identification.

3. **As a current user, I want to easily navigate to content I have previously viewed within a small number of steps.**
- On all site pages there is a navigation bar, or hamburger menu, with links to each required page.
- Each information page has links that bring the user to each section of the page.

### New User Goals:
1. **As a new user, I want to easily navigate the entire site intuitively.**
- The navigation bar is clearly defined and easily navigable for users to find and use.
- The hamburger menu is also clearly defined and easily navigable for users to find and use.
- The footer menu is easy to use with appropriate icons for easy identification.

2. **As a new user, I want the information I seek to be easily accessible and relevant.**
- The navigation bar is clearly defined and easily navigable for users to find and use.
- The hamburger menu is also clearly defined and easily navigable for users to find and use.
- The footer menu is easy to use with appropriate icons for easy identification.

3. **As a new user, I want attractive and relevant visuals and colour schemes that work with the content.**
- An attractive colour palette was created using [Adobe Color Wheel](https://color.adobe.com/create/color-wheel)
- Relevant images were found using Unsplash and Pixabay.

[Back to top](#)

## Manual Testing
### Common Elements Testing
Manual testing was conducted on the following elements that appear on every page:

- Hovering over the Hamburger Menu will trigger hover effect, highlighting the icon for the user.

![Navbar hover effect](assets/testing-files/Navbar-hover-effect.gif)

- Clicking on the Social Media links will open a new tab

![Social media links](assets/testing-files/Socialmedia-links.gif)

- The responsiveness of the Home page

![Responsiveness](assets/testing-files/Home-responsiveness.gif)

- Clicking on the Book a Table button will take the User to the Contact Page

![Book a Table](assets/testing-files/Book-a-table-button.gif)

# Home Page

Manual testing was conducted on the following elements of the [Home Page](index.html):

- Carousel slideshow

![Carousel](assets/testing-files/Carousel.gif)

- Clicking on the Menu and/or Appetizers buttons will open a new tab

![Menu Appetizers buttons](assets/testing-files/Menu-Appetizers.gif)

# Logo

- Clicking on the Logo image will take the User to the Home Page

![Logo image button](assets/testing-files/Logo-image.gif)

# Our Wines

Manual testing was conducted on the following elements of the [Menu Page](menu.html):

- Background video responsiveness

![Background video](assets/testing-files/background-videoclip.gif)

- Flipping Wine Cards

![Flipping Wine Cards](assets/testing-files/flipping-cards.gif)

# Gallery Page

Manual testing was conducted on the following elements of the [Gallery Page](gallery.html):

- Gallery page responsiveness

![Gallery responsiveness](assets/testing-files/Gallery-responsiveness.gif)

- Producer Spotlights Circle Images Animation and Video Modal:

![Circle Images](assets/testing-files/Circle-images.gif)

![Video Modals](assets/testing-files/Video-modals.gif)

- Photo Gallery grid (Bootstrap) responsiveness and overlay

![Photo Gallery](assets/testing-files/Photo-gallery.gif)

- Write a Review button

![Review button](assets/testing-files/Review-button.gif)

# Contact Page

Manual testing was conducted on the following elements of the [Contact Page](contact.html):

- Contact page responsiveness

![Contact Page responsiveness](assets/testing-files/Contact-responsiveness.gif)

- Contact Form and Send Message button, when filling out the contact form, the user must complete all fields before submitting. Hovering over the submit button will trigger hover effect, highlighting the button for the user.

![Contact Form](assets/testing-files/Contact-form.gif)

![Send Message button](assets/testing-files/Send-button.gif)

- Customers Reviews

![Customers Reviews](assets/testing-files/Customers-reviews.gif)

# Write a Review Page

Manual testing was conducted on the following elements of the [Write a Review Page](write-review.html):

- Write a Review page responsiveness

![Write a Review Page responsiveness](assets/testing-files/Write-review-responsiveness.gif)

- Write a Review and Submit button, when filling out the contact form, the user must complete all fields before submitting. Hovering over the submit button will trigger hover effect, highlighting the button for the user.

![Review Form](assets/testing-files/Review-form.gif)

![Submit button](assets/testing-files/Submit-button.gif)

- Clicking on the Return to Home button will take the User to the Home Page

![Return to Home button](assets/testing-files/Return-button.gif)

## Automated Testing
### Code Validation

The [W3C Markup Validator](https://validator.w3.org/) service was used to validate the HTML and CSS code used.

#### Results:

- Home Page: no errors or warnings to show.

![Home Page HTML Validator](assets/testing-files/home-validator.gif)

- Our Wines Page: no errors or warnings to show.

![Our Wines Page HTML Validator](assets/testing-files/Menu-validator.gif)

- Gallery Page: no errors or warnings to show.

![Gallery Page HTML Validator](assets/testing-files/gallery-validator.gif)

- Contact Page: no errors or warnings to show.

![Contact Page HTML Validator](assets/testing-files/contact-validator.gif)

- Write a Review Page: no errors or warnings to show.

![Write a Review Page HTML Validator](assets/testing-files/review-validator.gif)

- Success Message Page: no errors or warnings to show.

![Success Message Page HTML Validator](assets/testing-files/success-validator.gif)

- Thank You Page: no errors or warnings to show.

![Thank You Page HTML Validator](assets/testing-files/thankyou-validator.gif)

- CSS stylesheet: no errors found.

![CSS Validator](assets/testing-files/css-validator.gif)

#### Browser Validation

- Chrome - [test image](assets/testing-files/validate-chrome.png)
- Edge - [test image](assets/testing-files/validate-edge.png)
- Opera - [test image](assets/testing-files/validate-opera.png)
- Firefox - [test image](assets/testing-files/validate-firefox.png)

## User Testing

My friends and family were asked to review the site and documentation to point out any bugs and/or user experience issues. Their helpful advice throughout the process led to a few small UX changes in order to create a better experience.

## Lighthouse Testing

I used lighthouse testing via [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) and [PageSpeed Insights](https://pagespeed.web.dev/).

- The site was tested against the following criteria:

  - Performance
  - Accessibility
  - Best Practices
  - Search Engine Optimization

#### [Home Page](index.html)
* Index desktop lighthouse score [here](assets/testing-files/index-score.png)
* Index mobile lighthouse score [here](assets/testing-files/index-mob-score.png)

#### [Our Wines Page](menu.html)
* Menu desktop lighthouse score [here](assets/testing-files/menu-score.png)
* Menu mobile lighthouse score [here](assets/testing-files/menu-mob-score.png)

#### [Gallery Page](gallery.html)
* Gallery desktop lighthouse score [here](assets/testing-files/gallery-score.png)
* Gallery mobile lighthouse score [here](assets/testing-files/gallery-mob-score.png)

#### [Contact Page](contact.html)
* Contact desktop lighthouse score [here](assets/testing-files/contact-score.png)
* Contact mobile lighthouse score [here](assets/testing-files/contact-mob-score.png)

#### [Write a Review Page](write-review.html)
* Write-Review desktop lighthouse score [here](assets/testing-files/review-score.png)
* Write-Review mobile lighthouse score [here](assets/testing-files/review-mob-score.png)

#### [Success Message Page](success.html)
* Success desktop lighthouse score [here](assets/testing-files/success-score.png)
* Success mobile lighthouse score [here](assets/testing-files/success-mob-score.png)

#### [Thank You Page](thankyou.html)
* Thank You desktop lighthouse score [here](assets/testing-files/thankyou-score.png)
* Thank You mobile lighthouse score [here](assets/testing-files/thankyou-mob-score.png)


[Back to top](#top)
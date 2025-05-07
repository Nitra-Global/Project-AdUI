# Contributing to Project AdUI

Thank you for wanting to contribute to Project AdUI! We're building this project together to make online advertising better for everyone. Your help is very welcome, no matter your level of experience.

By contributing, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How Can You Help?

There are many ways to contribute:

1.  **Report Bugs:** If you find something that doesn't work correctly, let us know.
2.  **Suggest Ideas:** Have thoughts on new features, components, or improvements? Share them!
3.  **Improve Documentation:** Clear documentation is key. Help us make it better.
4.  **Write Code:** Fix bugs, add new components, improve accessibility or performance.
5.  **Enhance Design:** Provide feedback or suggestions on the look and feel.
6.  **Test:** Help test components on different devices and browsers.

## Reporting a Bug

* Before reporting, search existing issues on GitHub to see if someone else has already found it.
* If not, open a new issue. Give it a clear title.
* Describe the problem in detail.
* Explain the steps to make the bug happen.
* Tell us which browser, operating system, and device you are using.
* Add screenshots or a short video if you can.
* Describe what you expected to happen versus what actually happened.

## Suggesting an Idea

* Check existing issues and discussions first to see if your idea has already been shared.
* Open a new issue and describe your suggestion clearly.
* Explain why you think this idea is useful for the project.
* Add examples if possible.

## Contributing Code

Want to contribute code? Great! Here's how:

1.  **Fork the repository:** Click the "Fork" button on the [Project AdUI GitHub page](https://github.com/Nitra-Global/Project-AdUI/).
2.  **Clone your fork:** Get a copy of the code onto your computer.
    ```bash
    git clone [https://github.com/YOUR_USERNAME/Project-AdUI.git](https://github.com/YOUR_USERNAME/Project-AdUI.git)
    cd Project-AdUI
    ```
    *(Remember to replace `YOUR_USERNAME` with your GitHub username)*
3.  **Create a new branch:** Give your changes their own branch. This helps keep things organized. Use a name that describes what you're doing (e.g., `add-video-ad`, `fix-mobile-css`).
    ```bash
    git checkout -b your-branch-name
    ```
4.  **Make your changes:**
    * Write your code following our [Coding Standards](#coding-standards).
    * Add comments to explain your code.
    * Test your changes to make sure they work and don't break anything else.
    * If you add a new component or change how one works, update the documentation files (`index.html`, `guidelines.html`, and potentially files in `/components`).
    * Make sure your changes meet our [Accessibility Standards](#accessibility-standards).
5.  **Commit your changes:** Save your changes with messages that explain what you did.
    ```bash
    git add .
    git commit -m "feat: Add basic structure for video ad component"
    ```
    *(See [Commit Message Guidelines](#commit-message-guidelines) below)*
6.  **Push your branch:** Send your branch to your fork on GitHub.
    ```bash
    git push origin your-branch-name
    ```
7.  **Open a Pull Request (PR):** Go to the original [Project AdUI repository](https://github.com/Nitra-Global/Project-AdUI/) on GitHub. You should see a button to open a Pull Request from your branch.
    * Give your PR a clear title and description.
    * If your PR fixes an issue, link to it (e.g., `Closes #123`).
    * Explain your changes and why you made them.
    * Include screenshots or a link to a live demo if relevant.

## Coding Standards

* **HTML:** Write clean, semantic HTML5. Use clear class names (we try to follow a pattern like `component__element--modifier`).
* **CSS:**
    * Use standard CSS.
    * Keep your formatting consistent.
    * Use CSS variables for colors, spacing, etc., to make styling easy.
    * Write modular and easy-to-read CSS. Avoid styles that are hard to override.
    * Add comments to explain complex parts.
* **JavaScript:**
    * Use standard JavaScript (ES6+).
    * Write clean, readable code with comments.
    * Keep JavaScript minimal and focused on UI behavior.
    * Ensure JS doesn't slow down the page.

## Accessibility Standards

Making ads accessible is a core goal. Please follow these:

* Aim for WCAG 2.2 AA standards or better.
* Use ARIA roles and attributes correctly.
* Make sure everything interactive can be used with a keyboard.
* Use colors with enough contrast.
* Add meaningful `alt` text to all images.
* Make sure keyboard focus is visible.
* Handle focus correctly for pop-ups or overlays.
* Consider users who prefer less animation.

## Commit Message Guidelines

Please use clear commit messages. We suggest a format like this:

`type(scope): short description`

`optional longer description`

`optional footers (like links to issues)`

* **type:** What kind of change is it? Use words like `feat` (new feature), `fix` (bug fix), `docs` (documentation), `style` (formatting), `refactor` (code cleanup), `perf` (performance improvement), `test` (tests), `build` (build process), `ci` (CI setup), `chore` (other changes), `revert` (undoing a change).
* **scope (optional):** Which part of the project? (e.g., `interstitial`, `docs`, `style`).
* **short description:** A brief summary in the present tense (e.g., `add`, `fix`, `improve`).
* **longer description (optional):** More details if needed.
* **footers (optional):** Reference issues (e.g., `Closes #123`).

Example: `feat(sticky): Add close button to sticky banner`

## Pull Request Review

Project maintainers and other contributors will review your PR. We might ask questions or suggest changes. Please be ready to discuss and update your PR so we can merge it.

Thank you for helping make Project AdUI better!

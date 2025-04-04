# Test task || REMWaste

- **This project focuses on clean code, React best practices, responsiveness, and improving UI/UX**.
- **Responsive Design**: The application adapts to both mobile and desktop views.
- **Code Splitting**: Optimized for performance using React lazy loading and memoization techniques.
- **Reusable Scalable Components**: For instance, the ProgressBar component is designed to be flexible and reusable across different parts of the application.

## UI/UX Improvements

While there was no large-scale redesign, several important tweaks were made:

### Fixes:
- The checkmark icon in selected cards was previously overlapped by the card itself.
- Active cards’ button background color changed on hover, which could confuse users.
- Disabled cards’ buttons also changed background color on hover, which could be misleading.
- User-select was enabled on all cards, allowing users to select text unintentionally.
- The step transition selector did not display the selected card’s cost, and the "Size" text now includes "Yards" for clarity.
- On mobile, the progress bar was displayed incorrectly and required scrolling for proper visibility.
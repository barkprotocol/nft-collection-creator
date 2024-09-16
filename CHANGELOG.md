# Changelog

## [Unreleased]

### Added
- Added new `LandingPage` component with features for displaying core functionalities and connecting wallets.
- Introduced `FeatureCard` component for showcasing core features with icons, titles, and descriptions.
- Added routing functionality using `useRouter` to handle navigation in the `LandingPage` component.

### Changed
- Updated `useRouter` import to use the correct module based on Next.js version.
- Modified `Button` component to include navigation functionality.

### Fixed
- Fixed import conflicts with `useRouter` in `page.tsx`.

## [0.1.0] - 2024-09-15

### Added
- Initial release of the CNFT Creator app.
- Basic layout including navigation header, main content area, and feature sections.
- Integrated Solana wallet providers and modal for wallet connection.

### Changed
- Updated styles and layout to match the latest design specifications.
- Refined button styles for better usability and visual consistency.

### Fixed
- Addressed minor styling issues in the landing page and feature cards.

---

### How to Use This Changelog

- **Unreleased:** This section is for changes that have been made but not yet released. Include any features, improvements, or fixes that are being worked on or are pending.
  
- **[Version Number] - YYYY-MM-DD:** This section details changes for a specific version release. Each release should be documented with what was added, changed, or fixed.

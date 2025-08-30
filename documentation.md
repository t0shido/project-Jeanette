# Project Jeanette - CSS Documentation

## Navigation Bar Styling

### Navigation Item Spacing
- Modified `.nav-regular` class to set `gap: 0rem` (line 1646)
- Fixed syntax error in `.nav-container` class by changing `gap: 1 rem` to `gap: 1rem` (line 214)

### Dropdown Arrow Styling
- Increased spacing between dropdown text and arrow by changing `margin-left` from `var(--space-1)` to `10px` (line 1675)
- Arrow styling is controlled by `.nav-item-with-dropdown .dropdown-arrow` class (lines 1668-1679)
- Properties that can be adjusted:
  - Size: `width` and `height` (currently 8px)
  - Position: `margin-left` (horizontal) and `margin-bottom` (vertical)
  - Appearance: `border-right` and `border-bottom` (thickness and color)
  - Rotation: `transform: rotate(45deg)` (creates downward arrow)

## Section Headers

- Updated all section headers to be left-aligned
- Added `.section-title.text-left` class with:
  - `margin-left: 0`
  - `margin-right: auto`
  - `text-align: left`
- Removed `text-center` class from container divs
- Removed `mx-auto` from section dividers to align them to the left

## Navigation Structure

The navigation bar is implemented in `/components/layout/Header.jsx` with:
1. Main header with logo
2. Regular navigation menu (desktop)
3. Mobile navigation menu
4. Language switcher

Navigation links are defined in the `navLinks` array around line 108.

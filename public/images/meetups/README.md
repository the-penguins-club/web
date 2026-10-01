# Monthly Meetup Images Directory

Welcome to the meetup photos directory for **The Penguins Club**.

## How to add your real meetup photos:
1. Copy your meetup photos (JPG, PNG, or WebP) into this folder (`public/images/meetups/`).
2. Name them logically (for example):
   - `meetup-34.jpg`
   - `meetup-33.jpg`
   - `meetup-32.jpg`
   - etc.
3. Open `src/components/MeetupGallery.astro` and verify or update the image path:
   ```javascript
   image: "/images/meetups/meetup-34.jpg"
   ```
4. If an image file isn't uploaded yet, the website automatically falls back to our styled vector graphics (`/images/meetups/meetup-linux-intro.svg`, etc.).

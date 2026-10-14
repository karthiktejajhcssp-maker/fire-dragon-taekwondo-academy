# Fire Dragon Taekwondo Academy website

## Included
- Responsive promotional website
- Academy logo slot (`assets/logo.png`)
- Coach photo slot (`assets/coach.jpg`)
- Evening batch timings only
- Public notice board starter
- Admin panel UI placeholder
- PWA manifest and service worker starter
- Instagram links

## Important: live announcements and push notifications
This starter website does **not** yet publish shared announcements or send push notifications. Those features require backend configuration; do not put private server credentials in frontend files.

Recommended Firebase setup:
1. Create a Firebase project and register a web app.
2. Enable Firebase Authentication (email/password) and create an admin account for the master.
3. Create Firestore and apply security rules so public users can read published notices, while only authenticated authorised admins can create/update/delete them.
4. Create a Cloud Function or other trusted server endpoint that validates the admin, saves an announcement, and sends Firebase Cloud Messaging to subscribed devices.
5. Add Firebase web configuration and messaging setup, VAPID key, notification permission flow, device-token storage and push handler. Keep service-account credentials only on the server.
6. Deploy to HTTPS hosting. Push notifications vary by browser/device; parents must opt in.

The visible admin panel intentionally reports that Firebase setup is required rather than pretending to authenticate or publish. Do not present it as production-ready until the backend, access rules, push subscriptions, and tests are complete.

## Personalise before publishing
- Replace `assets/logo.png` with the supplied academy logo.
- Replace `assets/coach.jpg` with the supplied coach image.
- Confirm all coach credentials, class timings, contact details, admission information and Instagram links with the academy.
- Add a contact phone/WhatsApp number and location once supplied.

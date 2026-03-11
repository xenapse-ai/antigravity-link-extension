# Development Environment Setup

To test this extension in a clean environment using Distrobox, follow these steps.

## Distrobox Setup

1. **Create the container:**
   Run the following command to create a new Ubuntu-based container with a dedicated home folder and your workspace mounted.

   ```bash
   distrobox create -n gravity-dev \
     -i ubuntu:latest \
     --home ~/gravity-plugin \
     --volume $(pwd):/app
   ```

2. **Enter the container:**
   ```bash
   distrobox enter gravity-dev
   ```

3. **Install Dependencies:**
   Inside the container, install Node.js and Playwright dependencies:

   ```bash
   sudo apt update
   sudo apt install -y curl git
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs

   cd /app
   npm install
   npx playwright install-deps
   npx playwright install chromium
   ```

## Running Tests

To run the mobile UI tests and generate screenshots:

```bash
npx playwright test
```

Screenshots will be saved in the `test-results/` directory.

## Testing on Physical Devices

To test the mobile UI on your physical device (like a Pixel 10 Pro):

1. Ensure your phone and computer are on the same Wi-Fi network.
2. Start the server from VS Code: `Antigravity Link: Start Server`.
3. Scan the QR code: `Antigravity Link: Show QR Code`.
4. If you encounter layout issues, check the `public/index.html` file which contains the mobile-first CSS.

FROM node:22.8.0-alpine3.20

# Install Chrome and other dependencies
RUN apk update && apk add --no-cache \
    wget \
    gnupg \
    udev \
    chromium \
    harfbuzz \
    nss \
    freetype \
    ttf-freefont \
    font-noto \
    mesa-gl

# Set the CHROME_BIN environment variable
ENV CHROME_BIN=/usr/bin/chromium-browser

# Install npm (bundled with Node.js) and Angular CLI globally
RUN npm install -g @angular/cli

# Set up working directory
WORKDIR /workspace/source

# Default command
CMD ["chromium-browser", "--headless", "--disable-gpu", "--no-sandbox", "--remote-debugging-port=9222", "--disable-dev-shm-usage"]

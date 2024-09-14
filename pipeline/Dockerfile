FROM alpine:3.20

# Install dependencies
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

# Set up the default command to run Chrome headless
CMD ["chromium-browser", "--headless", "--disable-gpu", "--no-sandbox", "--remote-debugging-port=9222", "--disable-dev-shm-usage"]

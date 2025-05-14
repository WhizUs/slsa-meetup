# Step 1: Build the Node.js application using a distroless image with a non-root user
FROM node:20-alpine AS builder

# Create a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

WORKDIR /app

COPY package.json yarn.lock ./

# Install dependencies separately to leverage Docker's caching mechanism
RUN yarn install --immutable

COPY --chown=appuser:appgroup . .

RUN yarn build

# Step 2: 
FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

# Copy built application and package files from the builder stage
COPY --from=builder /app /app

# Add OpenContainer specifications
LABEL org.opencontainers.image.title="WhizUs Rocket"
LABEL org.opencontainers.image.description="This is a simple showcase application"
LABEL org.opencontainers.image.url="https://whizus.com"
LABEL org.opencontainers.image.source="https://gitlab.com/whizus/meetups/slsa.git"
LABEL org.opencontainers.image.version="0.1.0"
LABEL org.opencontainers.image.vendor="WhizUs GmbH"
LABEL org.opencontainers.image.licenses="MIT"

EXPOSE 3456/tcp

CMD ["dist/index.js"]
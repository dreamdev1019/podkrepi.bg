#!/bin/bash
act \
  -s GHCR_TOKEN="${A_GHCR_TOKEN}" \
  -s GHCR_USERNAME="${A_GHCR_USERNAME}" \
  -s REMOTE_DOCKER_HOST="${A_REMOTE_DOCKER_HOST}" \
  -s SSH_PUBLIC_KEY="${A_SSH_PUBLIC_KEY}" \
  -s SSH_PRIVATE_KEY="${A_SSH_PRIVATE_KEY}" \
  -s APP_JWT_SECRET="${APP_JWT_SECRET}" \
  -s DISCORD_CLIENT_ID="${DISCORD_CLIENT_ID}" \
  -s APP_DISCORD_CLIENT_SECRET="${APP_DISCORD_CLIENT_SECRET}" $@

# Primera etapa: Base para Playwright y Mocha
FROM node:18-bullseye AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Segunda etapa: Playwright (contiene navegadores)
FROM mcr.microsoft.com/playwright:v1.42.1-jammy AS playwright
WORKDIR /app
COPY --from=base /app .
# Asegúrate que Playwright tiene sus navegadores
RUN npx playwright install --with-deps

# Tercera etapa: K6 para pruebas de performance
FROM grafana/k6:latest AS k6
WORKDIR /app
COPY --from=base /app/tests/performance /app/tests/performance

# Etapa final que combina todo
FROM base AS final
# Copiamos Playwright desde su etapa
COPY --from=playwright /app /app
# Instalamos Mocha globalmente para las pruebas API
RUN npm install -g mocha
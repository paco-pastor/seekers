FROM node:22.8.0
WORKDIR /app

COPY ../package.json ../package-lock.json ./
RUN npm install
COPY ../ ./
EXPOSE 5173
RUN npx drizzle-kit generate
RUN npx drizzle-kit migrate
CMD ["npm", "run", "dev", "--", "--host"]

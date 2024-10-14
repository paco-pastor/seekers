FROM node:22.8.0
WORKDIR /app

COPY ../package.json ../package-lock.json ./
RUN npm install
COPY ../ ./
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
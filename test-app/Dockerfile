# Etap 1: Budowanie aplikacji
FROM node:18 AS build

# Ustawienie katalogu roboczego
WORKDIR /app

# Kopiowanie plików projektu
COPY package.json package-lock.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie całego kodu projektu
COPY . .

# Budowanie aplikacji
RUN npm run build

# Etap 2: Uruchomienie serwera dla statycznych plików
FROM nginx:1.23

# Kopiowanie zbudowanej aplikacji do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Eksponowanie portu
EXPOSE 80

# Start serwera Nginx
CMD ["nginx", "-g", "daemon off;"]

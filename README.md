# Referral Code API

## Overview

This project is a basic HTTP API server for storing referral codes. The server is built using Node.js with MongoDB as the database. The API is containerized using Docker and Docker Compose.

## Features

- Allows users to store referral codes.
- Ensures referral codes are unique.
- Limits users to a maximum of 10 referral codes.
- Uses MongoDB as the database.
- Fully containerized with Docker and Docker Compose.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Running the Application

### 1. Clone the Repository

```sh
git clone https://github.com/Moses-main/referral-api.git

cd https://github.com/Moses-main/referral-api.git
```

### 2. Create an `.env` File

Duplicate `env.example` and rename it to `.env`. Modify the API endpoint configuration if needed.

### 3. Build and Run the Application with Docker

```sh
docker-compose up --build
```

This command will build the Docker image and start the API and database containers.

### 4. Verify the Application is Running

To check running containers:

```sh
docker ps
```

To verify logs:

```sh
docker-compose logs api
```

### 5. Stop the Application

To stop the running containers:

```sh
docker-compose down
```

## Packaging the Project as a ZIP File

To zip the project, run:

```sh
zip -r referral-api.zip . -x "node_modules/*"
```

For Windows PowerShell:

```powershell
Compress-Archive -Path * -DestinationPath referral-api.zip -Force
```

## API Endpoints

- **POST** `api/referrals` - Store a referral code

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Docker & Docker Compose

## License

This project is licensed under the MIT License.

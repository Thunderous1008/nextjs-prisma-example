# Next.js Prisma User Management App with MongoDB

This project demonstrates a user management system built with **Next.js 14**, **Prisma**, and **MongoDB**. The app provides a form to add new users and displays a list of existing users, leveraging Prisma's ORM capabilities for database interaction.

## Features

- **Next.js 14**: Server-side rendering (SSR) and API routes.
- **Prisma ORM**: Integrated with MongoDB to manage user data.
- **MongoDB**: For data storage.
- **Tailwind CSS**: For minimal and responsive design.
- **Docker**: For containerizing the app and its services.

## API Endpoints

- **GET** `/api/getListUsers`: Fetch all users.
- **POST** `/api/createUser`: Create a new user with `name` and `email` in the request body.

## Prisma Schema

The `User` model is defined in the Prisma schema:

```prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  name  String
  email String @unique
}
```

## Running the Application with Docker

**1. Start the Containers**

To start the MongoDB and Next.js containers, run the following command:

```
docker-compose up --build
 ```
This will:

* Build and start the MongoDB container on port 27017.
* Build and start the Next.js app on port 3000.

**2. Initialize MongoDB Replica Set**

Once the containers are running, you must initialize the MongoDB replica set. In a new terminal, run these commands:


2.1 Access the MongoDB shell inside the running container:
    
```
docker exec -it mongodb mongosh
```

2.2 Initiate the replica set by running the following command inside the MongoDB shell:

```
rs.initiate()
```

2.3 Verify the replica set status (optional but recommended):

```
rs.status()
```

Once the replica set is initialized, Prisma can connect to the database.

**3. Access the application**

After initializing the MongoDB replica set, you can access the Next.js app in your browser at: `http://localhost:3000`. Then, add new users via the form and view the user list below it.

## Useful commands



* List the running Docker containers

```
docker ps
```

* Stop and remove containers and volumes:

```
docker-compose down -v
```

* Prisma Migrate

If you make changes to your Prisma schema, you’ll need to reflect those changes in your database:

```
npx prisma db push
```

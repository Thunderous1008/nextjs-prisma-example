# Next.js Prisma MongoDB User Management

This project demonstrates a user management system built with **Next.js 14**, **Prisma**, and **MongoDB**. The app provides a form to add new users and displays a list of existing users, leveraging Prisma's ORM capabilities for database interaction.

## Features

- **Next.js 14**: Server-side rendering (SSR) and API routes.
- **Prisma ORM**: Integrated with MongoDB to manage user data.
- **MongoDB**: For data storage.
- **Tailwind CSS**: For minimal and responsive design.

## Installation

1. Clone the repository:
    ```bash
    git clone <repo-url>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your `.env` file:
    Create a `.env` file at the root of the project with the following content:
    ```bash
    DATABASE_URL=database_url
    ```

4. Run the Prisma migration:
    ```bash
    npx prisma db push
    ```

5. Run the development server:
    ```bash
    npm run dev
    ```

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

## Running the App
```npm run dev ```

Visit `http://localhost:3000` to view the app. Then, add new users via the form and view the user list below it.

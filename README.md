
# Next.js Boilerplate with ShadCN UI

This is a Next.js boilerplate project featuring user authentication and a basic dashboard setup. It includes ShadCN UI for the frontend and uses MongoDB and NextAuth for authentication. This boilerplate is ideal for kickstarting projects with user login, registration, and simple profile management.

## Features

- **Next.js**: Framework for building server-rendered React applications.
- **ShadCN UI**: A minimal UI library for fast UI development.
- **MongoDB**: Database for storing user data.
- **NextAuth**: Easy authentication setup with email/password login.
- **Basic Profile Management**: Update user details and view profile info.
- **Sample Dashboard**: A template dashboard with placeholder data for quick integration.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/whosstyler/NextJS-BoilerPlate.git
   cd NextJS-BoilerPlate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file and add the following variables:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

### Folder Structure

- `app/`
  - `api/`
    - `auth/[...nextauth].ts`: Authentication logic using NextAuth.
  - `dashboard/`: Sample dashboard with fake data.
  - `register/`: Registration page for new users.
  - `user/`: User-specific routes.
  - `login/`: Login page.
  - `profile/`: Basic profile management.
  - `forgot-password/`: Password recovery page.
  - `layout.tsx`: Layout component for consistent structure.
  - `page.tsx`: Main entry pages for the app.
- `components/`: Reusable UI components built with ShadCN.
- `hooks/`: Custom hooks, such as `use-toast.ts` for notifications.
- `lib/`
  - `mongodb.ts`: MongoDB connection logic.
  - `utils.ts`: Utility functions.
- `public/`: Public assets like `favicon.ico`.
- `styles/`: Global styles like `globals.css`.
- `next.config.mjs`: Next.js configuration file.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `.env.local`: Environment variables for local development.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


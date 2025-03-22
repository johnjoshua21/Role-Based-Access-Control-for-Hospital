# Role-Based-Access-Control-for-Hospital

A role-based authentication system built with **Next.js, NextAuth.js, and TypeScript**, allowing **Admin, Doctor, and Patient** users to log in and access different dashboards.

## 💁️ Project Structure

```
MainFolder
│── login/
│── .next/
│── node_modules/
│── public/
│── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── admin/
│   │   │   │   ├── page.tsx
│   │   │   ├── doctor/
│   │   │   │   ├── page.tsx
│   │   │   ├── patient/
│   │   │   │   ├── page.tsx
│   │   ├── error/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── [...nextauth].ts
│   │   ├── users.ts
│   ├── types/
│   │   ├── next-auth.d.ts
│── .env.local
│── .gitignore
│── eslint.config.mjs
```

## 🚀 Features

- **Authentication** using NextAuth.js with **JWT strategy**.
- **Role-based access control** (Admin, Doctor, Patient).
- **User Session Management** with NextAuth Callbacks.
- **Styled using Global CSS** (`globals.css`).
- **Dynamic Dashboards** for each user role.

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo-url.git
cd hospital-management-auth
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file and add:
```env
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### 4️⃣ Run the Development Server
```sh
npm run dev
```
Then, visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🏥 User Roles and Access

| Role   | Access |
|--------|--------------------------------------------------|
| Admin  | Full control: Manage doctors, patients, and data. |
| Doctor | View patient details, appointments, and reports. |
| Patient| View personal details, assigned doctors, and appointments. |

## 📌 Authentication Flow

1️⃣ **User Logs In**  
- Email and password are checked against `users.ts`.  
- If valid, a JWT token is generated.  

2️⃣ **Session Management**  
- JWT token stores email and role.  
- Session callback ensures the frontend has user role data.  

3️⃣ **Access Control**  
- `session.user.role` is used to display role-specific dashboards.

## 🔧 Future Improvements

- 💡 **Secure Password Storage** using bcrypt.
- 💡 **Database Integration** (MongoDB or PostgreSQL).
- 💡 **Error Handling & Redirects** for better UX.

---

💡 **Made with ❤️ using Next.js, NextAuth.js & TypeScript**  
💡 **Contributors:** John Joshua A 


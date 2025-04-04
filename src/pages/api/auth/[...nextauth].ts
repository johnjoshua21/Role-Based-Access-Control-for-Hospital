import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "./user"; 

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        // Find user by email
        const user = users.find((u) => u.email === credentials.email);

        // Validate user existence and password
        if (!user || user.password !== credentials.password) {
          throw new Error("Invalid email or password");
        }

        // Return all user details
        const { password, ...userWithoutPassword } = user; // Exclude password
        return userWithoutPassword;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // Store all user details in the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any; // Ensure all user details are available
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);


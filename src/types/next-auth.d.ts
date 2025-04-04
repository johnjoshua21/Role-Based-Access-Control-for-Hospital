import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      fullName: string;
      email: string;
      phoneNumber: string;
      role: string;
      address: string;
      [key: string]: any; // Allow dynamic fields
    };
  }

  interface User {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    role: string;
    address: string;
    [key: string]: any; // Allow dynamic fields
  }
}

import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      const email = user.email ?? "";
      return email.endsWith("@atimotors.com");
    },
  },
})

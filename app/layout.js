import "./globals.css";
import { AuthProvider } from "./providers/providers";


export const metadata = {
  title: "POS system",
  description: "POS system for smooth operation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

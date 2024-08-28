import localFont from 'next/font/local'
import { AuthProvider } from './providers';
//layout มีผลเฉพาะกับ page ที่อยู่โฟลเดอร์เดียวกันนะ~
const myFont1 = localFont({
  src: [
    {
      path: '../assets/fonts/Prompt-Medium.ttf',
    },
    {
      path: '../assets/fonts/DFPOPCorn-W7.ttf',
    }
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont1.className}>
        <AuthProvider>
          {children} 
        </AuthProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Medicine-",
  description: "เว็บแอปที่พัฒนามจาก Next.js",
};

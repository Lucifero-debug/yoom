import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Toaster } from "../components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      layout:{
        logoImageUrl:'/logo.png',
        socialButtonsVariant:'iconButton'
      },
      variables:{
        colorText:'#fff',
        colorPrimary:'#0E78F9',
        colorBackground:'#1c1f2e',
        colorInputBackground:'#252a41',
        colorInputText:'#fff'
      }
    }}>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >  
        {children}
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}

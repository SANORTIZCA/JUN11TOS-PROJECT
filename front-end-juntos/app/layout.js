import './globals.css'
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
export const metadata = {
  title: 'JU11TOS',
  description: 'Juntos somos INQUEBRA11TABLES',
  icons:{
    icon: [
    "/favicon.ico?v=1",
    ],
  }
} 

export default function RootLayout ({ children }) {
  return(
    <html lang="en">
      <body> 
        <Navigation/>
          {children}
      </body>
    </html>
  );
}

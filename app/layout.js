import '@/app/_styles/globals.css';

import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s / CarDealer',
    default: 'CarDealer',
  },
  description:
    'Explore your dream car with CarDealer, your trusted platform for discovering and purchasing vehicles. Browse a wide range of cars, compare features, and find exclusive deals tailored to your needs. Whether you’re looking for a family SUV or a luxury sedan, CarDealer ensures a seamless and personalized car buying experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className} antialiased min-h-screen flex flex-col `}
      >
        {children}
      </body>
    </html>
  );
}

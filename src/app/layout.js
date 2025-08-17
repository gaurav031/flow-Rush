import '../styles/globals.css';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';

export const metadata = {
  title: 'Flowrush Technologies - Web, Software & App Development Experts',
  description:
    'Scalable, secure, future-ready digital solutions for startups, enterprises, and global brands across the UK, US, and beyond.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 overflow-x-hidden antialiased">
        {/* Accessibility: skip to main content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-gray-900 focus:px-3 focus:py-2 rounded-md z-[9999]"
        >
          Skip to content
        </a>

        {/* Global decorative cursor (keeps native cursor visible) */}
        <CustomCursor />

        {/* Persistent header across all routes — remove page-level Header to avoid duplication */}
        <Header />

        {/* Page content */}
        <main id="main" className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

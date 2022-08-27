import type { ReactNode } from 'react';
// components
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='app-container'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

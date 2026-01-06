"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Trophy, Mail } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
    { name: 'Home', link: '#section-home', icon: <Home size={18} /> },
    { name: 'About', link: '#section-about', icon: <User size={18} /> },
    { name: 'Skills', link: '#section-skills', icon: <Code size={18} /> },
    { name: 'Projects', link: '#section-projects', icon: <Briefcase size={18} /> },
    { name: 'Achievements', link: '#section-achievements', icon: <Trophy size={18} /> },
    { name: 'Connect', link: '#section-connect', icon: <Mail size={18} /> },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('section-home');
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Scroll spy logic
            const sections = navItems.map(item => document.querySelector(item.link));

            let current = '';
            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 150) {
                        current = section.getAttribute('id');
                    }
                }
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, link) => {
        e.preventDefault();
        const target = document.querySelector(link);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
            setActiveSection(link.substring(1));
            setIsOpen(false);
        }
    };

    // return (
    return (
        <nav className={cn(
            "fixed top-4 z-50 transition-all duration-300",
            // Mobile: Positioned top-right, auto width, transparent
            "right-4 w-auto bg-transparent",
            // Desktop: Centered, fixed width, pill shape, background controlled by scroll
            "md:left-0 md:right-0 md:mx-auto md:w-[70%] lg:w-[40%] md:rounded-2xl",
            isScrolled ? "md:bg-[#1a1b26]/70 md:backdrop-blur-md md:shadow-lg" : "md:bg-transparent"
        )}>
            <div className={cn(
                "flex items-center px-4 py-2",
                // Mobile: justify-end to keep icon right
                "justify-end",
                // Desktop: justify-between or center (user had center, but center with logo implies centered items)
                "md:justify-center md:px-6 md:py-3"
            )}>
                {/* Logo or Brand - Uncomment if needed */}
                {/* <a href="#section-home" onClick={(e) => handleClick(e, '#section-home')} className="hidden md:block text-[#c0caf5] font-bold text-xl absolute left-6">
                    BMHS
                </a> */}

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            onClick={(e) => handleClick(e, item.link)}
                            className={cn(
                                "text-lg font-medium transition-colors hover:text-[#7aa2f7] flex items-center gap-1",
                                activeSection === item.link.substring(1) ? "text-[#7aa2f7]" : "text-[#a9b1d6]"
                            )}
                        >
                            {/* Desktop: No icons, just text or as preferred. User had text-lg in recent edit but small icons. */}
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button - No BG */}
                <button
                    className="md:hidden text-[#a9b1d6] hover:text-[#c0caf5] p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown - Fixed positioning relative to screen to ensure full width */}
            {isOpen && (
                <div className="md:hidden fixed top-16 right-4 w-60 bg-[#1a1b26]/95 backdrop-blur-md border border-[#24283b] rounded-2xl p-4 shadow-xl">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={(e) => handleClick(e, item.link)}
                                className={cn(
                                    "text-lg font-medium transition-colors hover:text-[#7aa2f7] flex items-center gap-3",
                                    activeSection === item.link.substring(1) ? "text-[#7aa2f7]" : "text-[#a9b1d6]"
                                )}
                            >
                                {item.icon}
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

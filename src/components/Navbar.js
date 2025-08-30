import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Moon, Sun, Home, Info } from 'lucide-react';

const Navbar = (props) => {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link className="flex items-center space-x-2 text-xl font-bold text-foreground" to="/">
                        <span className="text-primary">TextUtils</span>
                    </Link>
                    
                    <div className="flex items-center space-x-6">
                        <div className="hidden md:flex items-center space-x-4">
                            <Link 
                                className="flex items-center space-x-1 text-sm font-medium transition-colors text-foreground hover:text-primary" 
                                to="/"
                            >
                                <Home className="h-4 w-4" />
                                <span>Home</span>
                            </Link>
                            <Link 
                                className="flex items-center space-x-1 text-sm font-medium transition-colors text-foreground hover:text-primary" 
                                to="/about"
                            >
                                <Info className="h-4 w-4" />
                                <span>{props.aboutText}</span>
                            </Link>
                        </div>
                        
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={props.toggleMode}
                            className="h-9 w-9"
                            title={`Switch to ${props.mode === 'light' ? 'dark' : 'light'} mode`}
                        >
                            {props.mode === 'light' ? (
                                <Moon className="h-4 w-4" />
                            ) : (
                                <Sun className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
}

export default Navbar;

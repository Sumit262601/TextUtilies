import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import {
    Info,
    Star,
    Lightbulb,
    BarChart3,
    Settings,
    Mail,
    Github,
    CheckCircle,
    Circle,
    PenTool,
    GraduationCap,
    Briefcase
} from 'lucide-react';

const About = (props) => {
    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center space-x-3 text-foreground">
                    <Info className="h-8 w-8 text-primary" />
                    <span>About TextUtils</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Your comprehensive text analysis and transformation toolkit
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-8">
                {/* What is TextUtils */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-foreground">
                            <Info className="h-5 w-5" />
                            <span>What is TextUtils?</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            TextUtils is a powerful web-based text analysis and transformation tool designed to help writers,
                            students, content creators, and anyone who works with text. Our platform provides a comprehensive
                            suite of text utilities that make text processing quick, efficient, and professional.
                        </p>
                    </CardContent>
                </Card>

                {/* Features */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-foreground">
                            <Star className="h-5 w-5" />
                            <span>Key Features</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <div className="text-foreground">
                                        <strong>Text Transformations:</strong> Uppercase, lowercase, title case, and more
                                    </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <div className="text-foreground">
                                        <strong>Text Cleaning:</strong> Remove extra spaces, numbers, and special characters
                                    </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <div className="text-foreground">
                                        <strong>Advanced Analysis:</strong> Word count, character count, reading time
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <div className="text-foreground">
                                        <strong>Real-time Preview:</strong> See changes instantly as you type
                                    </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <div className="text-foreground">
                                        <strong>Clipboard Integration:</strong> Easy copy and paste functionality
                                    </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <div className="text-foreground">
                                        <strong>Dark/Light Mode:</strong> Comfortable viewing in any environment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Use Cases */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-foreground">
                            <Lightbulb className="h-5 w-5" />
                            <span>Perfect For</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center space-y-3">
                                <PenTool className="h-12 w-12 text-primary mx-auto" />
                                <h5 className="font-semibold text-foreground">Writers & Authors</h5>
                                <p className="text-sm text-muted-foreground">Format and analyze your manuscripts with ease</p>
                            </div>
                            <div className="text-center space-y-3">
                                <GraduationCap className="h-12 w-12 text-green-500 mx-auto" />
                                <h5 className="font-semibold text-foreground">Students</h5>
                                <p className="text-sm text-muted-foreground">Check word counts and format academic papers</p>
                            </div>
                            <div className="text-center space-y-3">
                                <Briefcase className="h-12 w-12 text-orange-500 mx-auto" />
                                <h5 className="font-semibold text-foreground">Professionals</h5>
                                <p className="text-sm text-muted-foreground">Clean and format business documents quickly</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Statistics */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-foreground">
                            <BarChart3 className="h-5 w-5" />
                            <span>Text Analysis Features</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center space-y-2">
                                <div className="text-2xl font-bold text-primary">Word Count</div>
                                <div className="text-sm text-muted-foreground">Accurate counting with smart filtering</div>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="text-2xl font-bold text-primary">Character Analysis</div>
                                <div className="text-sm text-muted-foreground">With and without spaces</div>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="text-2xl font-bold text-primary">Reading Time</div>
                                <div className="text-sm text-muted-foreground">Based on average reading speed</div>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="text-2xl font-bold text-primary">Structure Analysis</div>
                                <div className="text-sm text-muted-foreground">Sentences and paragraphs</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Technology */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-foreground">
                            <Settings className="h-5 w-5" />
                            <span>Built With Modern Technology</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h6 className="font-semibold mb-3 text-foreground">Frontend</h6>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Circle className="h-2 w-2 text-primary" />
                                        <span className="text-foreground">React.js</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Circle className="h-2 w-2 text-primary" />
                                        <span className="text-foreground">Tailwind CSS</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Circle className="h-2 w-2 text-primary" />
                                        <span className="text-foreground">shadcn/ui Components</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6 className="font-semibold mb-3 text-foreground">Features</h6>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Circle className="h-2 w-2 text-green-500" />
                                        <span className="text-foreground">Responsive Design</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Circle className="h-2 w-2 text-green-500" />
                                        <span className="text-foreground">Dark/Light Theme</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Circle className="h-2 w-2 text-green-500" />
                                        <span className="text-foreground">Real-time Processing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-foreground">
                            <Mail className="h-5 w-5" />
                            <span>Get in Touch</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p className="text-muted-foreground">
                            Have suggestions for new features or found a bug? We'd love to hear from you!
                        </p>
                        <div className="flex justify-center space-x-3">
                            <Button variant="default">
                                <Github className="h-4 w-4 mr-2" />
                                View on GitHub
                            </Button>
                            <Button variant="outline">
                                <Mail className="h-4 w-4 mr-2" />
                                Contact Us
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default About;

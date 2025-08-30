import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import {
    Type,
    Copy,
    Trash2,
    Scissors,
    RotateCcw,
    ArrowLeftRight,
    FileText,
    Clock,
    Hash,
    MessageSquare,
    AlignLeft,
    Eye
} from 'lucide-react';

const TextForm = (props) => {
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Calculate text statistics
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    const charCount = text.length;
    const charCountNoSpaces = text.replace(/\s/g, '').length;
    const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const paragraphCount = text.split(/\n\s*\n/).filter(paragraph => paragraph.trim().length > 0).length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const showToast = (message, type = "success") => {
        if (type === "success") {
            toast.success(message);
        } else if (type === "warning") {
            toast.warning(message);
        } else if (type === "error") {
            toast.error(message);
        }
    };

    const handleUpperCase = () => {
        if (text.length === 0) {
            showToast("Please enter some text to convert to uppercase", "warning");
            return;
        }
        setText(text.toUpperCase());
        showToast("Text converted to uppercase successfully!");
    }

    const handleLowerCase = () => {
        if (text.length === 0) {
            showToast("Please enter some text to convert to lowercase", "warning");
            return;
        }
        setText(text.toLowerCase());
        showToast("Text converted to lowercase successfully!");
    }

    const handleTitleCase = () => {
        if (text.length === 0) {
            showToast("Please enter some text to convert to title case", "warning");
            return;
        }
        const titleCaseText = text.replace(/\w\S*/g, (txt) =>
            txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
        setText(titleCaseText);
        showToast("Text converted to title case successfully!");
    }

    const handleClearText = () => {
        setText("");
        showToast("Text cleared successfully!");
    }

    const handleCopyToClipboard = async () => {
        if (text.trim() === "") {
            showToast("Please enter some text to copy", "warning");
            return;
        }

        setIsLoading(true);
        try {
            await navigator.clipboard.writeText(text);
            showToast("Text copied to clipboard successfully!");
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showToast("Text copied to clipboard successfully!");
        }
        setIsLoading(false);
    }

    const handleRemoveExtraSpaces = () => {
        if (text.length === 0) {
            showToast("Please enter some text to remove extra spaces", "warning");
            return;
        }
        const cleanedText = text.split(/[ ]+/).join(" ");
        setText(cleanedText);
        showToast("Extra spaces removed successfully!");
    }

    const handleRemoveAllSpaces = () => {
        if (text.length === 0) {
            showToast("Please enter some text to remove all spaces", "warning");
            return;
        }
        const noSpacesText = text.replace(/\s/g, '');
        setText(noSpacesText);
        showToast("All spaces removed successfully!");
    }

    const handleReverseText = () => {
        if (text.length === 0) {
            showToast("Please enter some text to reverse", "warning");
            return;
        }
        const reversedText = text.split('').reverse().join('');
        setText(reversedText);
        showToast("Text reversed successfully!");
    }

    const handleCapitalizeFirstLetter = () => {
        if (text.length === 0) {
            showToast("Please enter some text to capitalize", "warning");
            return;
        }
        const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(capitalizedText);
        showToast("First letter capitalized successfully!");
    }

    const handleAlternatingCase = () => {
        if (text.length === 0) {
            showToast("Please enter some text to apply alternating case", "warning");
            return;
        }
        const alternatingText = text.split('').map((char, index) =>
            index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
        ).join('');
        setText(alternatingText);
        showToast("Alternating case applied successfully!");
    }

    const handleRemoveNumbers = () => {
        if (text.length === 0) {
            showToast("Please enter some text to remove numbers", "warning");
            return;
        }
        const textWithoutNumbers = text.replace(/[0-9]/g, '');
        setText(textWithoutNumbers);
        showToast("Numbers removed successfully!");
    }

    const handleRemoveSpecialChars = () => {
        if (text.length === 0) {
            showToast("Please enter some text to remove special characters", "warning");
            return;
        }
        const textWithoutSpecialChars = text.replace(/[^a-zA-Z0-9\s]/g, '');
        setText(textWithoutSpecialChars);
        showToast("Special characters removed successfully!");
    }

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">{props.heading}</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Transform, analyze, and enhance your text with our powerful text utilities
                </p>
            </div>

            {/* Main Text Area */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-foreground">
                        <Type className="h-5 w-5" />
                        <span>Enter your text here</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea
                        value={text}
                        onChange={handleOnChange}
                        placeholder="Start typing or paste your text here to analyze and transform it..."
                        className="min-h-[200px] resize-none "
                    />
                </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-foreground">
                        <Scissors className="h-5 w-5" />
                        <span>Text Transformations</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        <Button onClick={handleUpperCase} variant="default" size="sm">
                            <Type className="h-4 w-4 mr-2" />
                            UPPERCASE
                        </Button>
                        <Button onClick={handleLowerCase} variant="default" size="sm">
                            <Type className="h-4 w-4 mr-2" />
                            lowercase
                        </Button>
                        <Button onClick={handleTitleCase} variant="default" size="sm">
                            <Type className="h-4 w-4 mr-2" />
                            Title Case
                        </Button>
                        <Button onClick={handleCapitalizeFirstLetter} variant="default" size="sm">
                            <Type className="h-4 w-4 mr-2" />
                            Capitalize
                        </Button>
                        <Button onClick={handleAlternatingCase} variant="default" size="sm">
                            <RotateCcw className="h-4 w-4 mr-2" />
                            aLtErNaTiNg
                        </Button>
                        <Button onClick={handleReverseText} variant="default" size="sm">
                            <ArrowLeftRight className="h-4 w-4 mr-2" />
                            Reverse
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Button onClick={handleRemoveExtraSpaces} variant="secondary" size="sm">
                            <Scissors className="h-4 w-4 mr-2" />
                            Remove Extra Spaces
                        </Button>
                        <Button onClick={handleRemoveAllSpaces} variant="secondary" size="sm">
                            <Scissors className="h-4 w-4 mr-2" />
                            Remove All Spaces
                        </Button>
                        <Button onClick={handleRemoveNumbers} variant="secondary" size="sm">
                            <Hash className="h-4 w-4 mr-2" />
                            Remove Numbers
                        </Button>
                        <Button onClick={handleRemoveSpecialChars} variant="secondary" size="sm">
                            <Scissors className="h-4 w-4 mr-2" />
                            Remove Special Chars
                        </Button>
                    </div>

                    <div className="flex space-x-3">
                        <Button
                            onClick={handleCopyToClipboard}
                            disabled={isLoading}
                            variant="outline"
                            size="sm"
                        >
                            <Copy className="h-4 w-4 mr-2" />
                            {isLoading ? "Copying..." : "Copy to Clipboard"}
                        </Button>
                        <Button onClick={handleClearText} variant="destructive" size="sm">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Clear Text
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{wordCount}</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>Words</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{charCount}</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                            <Type className="h-4 w-4" />
                            <span>Characters</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{charCountNoSpaces}</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                            <Type className="h-4 w-4" />
                            <span>No Spaces</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{sentenceCount}</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>Sentences</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{paragraphCount}</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                            <AlignLeft className="h-4 w-4" />
                            <span>Paragraphs</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{readingTime}</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Minutes</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Preview Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-foreground">
                        <Eye className="h-5 w-5" />
                        <span>Preview</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {text.length > 0 ? (
                        <p className="text-xl leading-relaxed text-foreground">{text}</p>
                    ) : (
                        <p className="text-xl text-muted-foreground flex items-center space-x-2">
                            <Eye className="h-4 w-4" />
                            <span>Enter some text in the textarea above to see a preview here.</span>
                        </p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

export default TextForm;
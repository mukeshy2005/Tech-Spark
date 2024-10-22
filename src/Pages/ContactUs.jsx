import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { Textarea } from '../components/ui/textarea.jsx';
import { Input } from '../components/ui/input.jsx';
import {  FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: 'techsparkdseu@gmail.com', // Pre-fill email
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a mailto link dynamically
        const mailtoLink = `mailto:techsparkdseu@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
        
        // Open the user's email client
        window.location.href = mailtoLink;
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <Card className="rounded-lg shadow-lg">
                <CardHeader>
                    <h1 className="text-3xl font-bold text-center">Contact Tech Spark</h1>
                </CardHeader>
                <CardContent>
                    <p className="text-center mb-4">
                        Have questions or want to collaborate? We'd love to hear from you!
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div>
                            <Input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                value={formData.email} 
                                disabled 
                            />
                        </div>
                        <div>
                            <Textarea 
                                name="message" 
                                placeholder="Your Message" 
                                rows="4" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <Button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                        >
                            Send Message
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <h2 className="text-xl font-bold">Follow Us</h2>
                    <div className="flex space-x-4 mt-2">
                        
                        <a href="https://www.linkedin.com/company/tech-spark-dseu-okhla-ii/posts/?feedView=all" target="_blank" rel="noopener noreferrer"  className="text-blue-600 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
                        <a href="https://www.instagram.com/techsparkdseu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </CardFooter>
            </Card>
            <footer className="mt-6 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Tech Spark, DSEU Okhla II. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactUs;

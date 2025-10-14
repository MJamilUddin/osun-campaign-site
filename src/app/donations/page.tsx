"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Building, Phone, MapPin } from "lucide-react";

export default function Donations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    // You would typically send this to your backend to store contact information
    alert("Thank you for your interest! Our team will contact you soon to discuss donation opportunities.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Support Our Campaign</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch About Donations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in supporting our campaign? Fill out the form below and our team will contact you
            to discuss donation opportunities and how you can help build a better future for Osun State.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Get in Touch
              </CardTitle>
              <CardDescription>
                Fill out the form below and our team will contact you to discuss donation opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="+234 123 456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2">
                      Location (City/LGA) *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="e.g., Osogbo, Ilesa, Ile-Ife"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    Donation Interest Level *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select your interest level</option>
                    <option value="individual">Individual Contribution</option>
                    <option value="business">Business/Organization Support</option>
                    <option value="fundraiser">Host a Fundraising Event</option>
                    <option value="volunteer">Volunteer & Donate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background resize-none"
                    placeholder="Tell us more about your interest in supporting our campaign..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Contact Information
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Donation Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Why Your Donation Matters</CardTitle>
                <CardDescription>
                  See how your contribution helps our campaign
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Campaign Materials</h4>
                    <p className="text-sm text-muted-foreground">
                      Flyers, posters, and digital content to reach voters across Osun State
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Community Events</h4>
                    <p className="text-sm text-muted-foreground">
                      Town halls, rallies, and community meetings in every LGA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Digital Campaign</h4>
                    <p className="text-sm text-muted-foreground">
                      Online advertising and social media campaigns to engage younger voters
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Volunteer Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Training and resources for our grassroots volunteers throughout Osun State
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Our Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Phone Consultation</h4>
                    <p className="text-sm text-muted-foreground">
                      Speak directly with our donations coordinator
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">In-Person Meeting</h4>
                    <p className="text-sm text-muted-foreground">
                      Schedule a meeting at our campaign office
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Local Representatives</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect with our team in your local government area
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}

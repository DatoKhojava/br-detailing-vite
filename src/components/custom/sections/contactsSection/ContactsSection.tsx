import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactsSection() {
  return (
    <section className="py-16 bg-white" id="contacts">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">კონტაქტი</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input type="text" placeholder="Your Phone Number" />
                </div>
                <div>
                  <Textarea rows={4} placeholder="Your Message" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>123 Car Street, Auto City, AC 12345</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>info@carmaintenance.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <iframe
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=Space+Needle,Seattle+WA"
                  allowFullScreen
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

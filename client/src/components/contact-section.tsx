import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormValues } from "@shared/schema";
import { submitContactForm } from "@/lib/contact-form";

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Address",
    content: "Alba Iulia Square no. 10, Bucharest"
  },
  {
    icon: "fas fa-phone-alt",
    title: "Phone",
    content: "0213.117.847"
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    content: "office@tinyhex.ro"
  }
];

const socialLinks = [
  { icon: "fab fa-facebook-f", url: "#" },
  { icon: "fab fa-twitter", url: "#" },
  { icon: "fab fa-linkedin-in", url: "#" },
  { icon: "fab fa-github", url: "#" }
];

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default"
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  function onSubmit(data: ContactFormValues) {
    mutation.mutate(data);
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-neutral-light via-white to-neutral-light relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
          }}
        />
      </div>
    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Get In Touch
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Ready to Transform Your Real Estate Business?</h2>
          <p className="text-neutral-dark text-lg">
            Fill out the form below to schedule a consultation or discuss your project needs. Our team is ready to help you create innovative digital solutions.
          </p>
        </motion.div>
      
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 border border-neutral-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark">
                                <i className="fas fa-user"></i>
                              </span>
                              <Input 
                                placeholder="Your name" 
                                {...field} 
                                className="pl-10 w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark">
                                <i className="fas fa-envelope"></i>
                              </span>
                              <Input 
                                placeholder="your.email@example.com" 
                                {...field} 
                                className="pl-10 w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">Company</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark">
                                <i className="fas fa-building"></i>
                              </span>
                              <Input 
                                placeholder="Your company name" 
                                {...field} 
                                className="pl-10 w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">Service You're Interested In</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <div className="relative">
                                <SelectTrigger className="pl-10 w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors">
                                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark">
                                    <i className="fas fa-cog"></i>
                                  </span>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </div>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="custom-development">Custom Web Development</SelectItem>
                              <SelectItem value="real-estate-platform">Real Estate Platform</SelectItem>
                              <SelectItem value="mobile-app">Mobile Application</SelectItem>
                              <SelectItem value="business-intelligence">Business Intelligence</SelectItem>
                              <SelectItem value="crm">CRM Solutions</SelectItem>
                              <SelectItem value="integration">Integration Services</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-gray-700">Message</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-6 text-neutral-dark">
                              <i className="fas fa-comment-dots"></i>
                            </span>
                            <Textarea 
                              placeholder="Tell us about your project or requirements" 
                              rows={5} 
                              {...field} 
                              className="pl-10 w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-accent hover:bg-accent-secondary text-primary font-semibold h-auto py-4 px-8"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <span className="flex items-center justify-center">
                          <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <span>Send Message</span>
                          <i className="fas fa-paper-plane ml-2"></i>
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-primary text-white rounded-2xl p-8 shadow-xl mb-8">
                <h3 className="font-display font-semibold text-xl mb-6 text-accent">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent">
                          <i className={item.icon}></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-white/80">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
                <h3 className="font-display font-semibold text-xl mb-6 text-primary">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a 
                        key={index}
                        href={link.url} 
                        className="w-10 h-10 rounded-full bg-primary hover:bg-accent transition-colors flex items-center justify-center text-white"
                        whileHover={{ scale: 1.1 }}
                      >
                        <i className={link.icon}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

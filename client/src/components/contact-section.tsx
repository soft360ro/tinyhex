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
import { useTranslation } from "react-i18next";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: t("contact.info.address"),
      content: "Alba Iulia Square no. 10, Bucharest"
    },
    {
      icon: "fas fa-phone-alt",
      title: t("contact.info.phone"),
      content: "0213.117.847"
    },
    {
      icon: "fas fa-envelope",
      title: t("contact.info.email"),
      content: "office@tinyhex.ro"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "#" },
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-linkedin-in", url: "#" },
    { icon: "fab fa-github", url: "#" }
  ];
  
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
        title: t("contact.success"),
        description: t("contact.successMessage"),
        variant: "default"
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t("contact.error"),
        description: error instanceof Error ? error.message : t("contact.errorMessage"),
        variant: "destructive"
      });
    }
  });

  function onSubmit(data: ContactFormValues) {
    mutation.mutate(data);
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3 mb-12 lg:mb-0 lg:pr-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl text-primary mb-8">{t("contact.title")}</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-medium">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-neutral-dark">{t("contact.form.fullName")}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t("contact.form.fullName")} 
                              {...field} 
                              className="w-full px-4 py-3 bg-neutral-light border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-neutral-dark">{t("contact.form.email")}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              {...field} 
                              className="w-full px-4 py-3 bg-neutral-light border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-neutral-dark">{t("contact.form.company")}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t("contact.form.company")} 
                            {...field} 
                            className="w-full px-4 py-3 bg-neutral-light border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-neutral-dark">{t("contact.form.service")}</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 bg-neutral-light border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors">
                              <SelectValue placeholder={t("contact.form.selectService")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem value="custom-development">Custom Web Development</SelectItem>
                            <SelectItem value="real-estate-platform">Real Estate Platform</SelectItem>
                            <SelectItem value="mobile-app">Mobile Application</SelectItem>
                            <SelectItem value="business-intelligence">Business Intelligence</SelectItem>
                            <SelectItem value="crm">CRM Solutions</SelectItem>
                            <SelectItem value="integration">Integration Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-neutral-dark">{t("contact.form.message")}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t("contact.form.messagePlaceholder")} 
                            rows={4} 
                            {...field} 
                            className="w-full px-4 py-3 bg-neutral-light border-neutral-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-accent hover:bg-accent-hover text-white font-semibold h-auto py-4 px-8 shadow-md"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <span className="flex items-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i> {t("contact.form.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <span>{t("contact.form.send")}</span>
                        <i className="fas fa-paper-plane ml-2"></i>
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="lg:w-1/3 bg-white shadow-lg rounded-xl p-8 border border-neutral-medium"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-semibold text-xl mb-6 text-primary">{t("contact.info.title")}</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-neutral-light flex items-center justify-center text-accent text-lg shadow-sm">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-neutral-dark">{item.title}</h4>
                    <p className="text-neutral-dark">{item.content}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                className="pt-6 mt-6 border-t border-neutral-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h4 className="font-semibold mb-4 text-primary">{t("contact.info.followUs")}</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a 
                      key={index}
                      href={link.url} 
                      className="w-10 h-10 rounded-full bg-primary hover:bg-accent transition-colors flex items-center justify-center text-white shadow-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      <i className={link.icon}></i>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Create a contact submission with current timestamp
      const newSubmission = {
        ...validatedData,
        createdAt: new Date().toISOString()
      };
      
      // Store the submission
      const submission = await storage.createContactSubmission(newSubmission);
      
      // Return successful response
      res.status(201).json({
        message: "Contact form submitted successfully",
        submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      console.error("Error submitting contact form:", error);
      res.status(500).json({ 
        message: "An error occurred while submitting the form" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

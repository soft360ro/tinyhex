import { apiRequest } from "./queryClient";
import { ContactFormValues } from "@shared/schema";

export async function submitContactForm(data: ContactFormValues): Promise<any> {
  try {
    const response = await apiRequest("POST", "/api/contact", data);
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to submit form: ${error.message}`);
    }
    throw new Error("An unknown error occurred while submitting the form");
  }
}

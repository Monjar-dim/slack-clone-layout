import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox"; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, CheckCircle, Loader2, Shield, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const proposalFormSchema = z.object({
  // Company Information
  company_name: z.string().min(2, "Company name must be at least 2 characters"),
  industry: z.string().min(1, "Please select your industry"),
  employee_count: z.string().min(1, "Please select employee count"),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  
  // Contact Details
  contact_name: z.string().min(2, "Name must be at least 2 characters"),
  contact_email: z.string().email("Please enter a valid email address"),
  contact_phone: z.string().optional(),
  job_title: z.string().min(2, "Job title must be at least 2 characters"),
  
  // Requirements & Preferences
  current_tools: z.array(z.string()).optional(),
  main_challenges: z.array(z.string()).optional(),
  integrations_needed: z.array(z.string()).optional(),
  security_requirements: z.array(z.string()).optional(),
  budget_range: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select implementation timeline"),
  additional_comments: z.string().optional(),
});

type ProposalFormData = z.infer<typeof proposalFormSchema>;

const ProposalForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ProposalFormData>({
    resolver: zodResolver(proposalFormSchema),
    defaultValues: {
      company_name: "",
      industry: "",
      employee_count: "",
      website: "",
      contact_name: "",
      contact_email: "",
      contact_phone: "",
      job_title: "",
      current_tools: [],
      main_challenges: [],
      integrations_needed: [],
      security_requirements: [],
      budget_range: "",
      timeline: "",
      additional_comments: "",
    }
  });

  const onSubmit = async (data: ProposalFormData) => {
    setIsSubmitting(true);
    
    try {
      // Prepare structured data for webhook
      const formData = {
        timestamp: new Date().toISOString(),
        company: {
          name: data.company_name,
          industry: data.industry,
          employee_count: data.employee_count,
          website: data.website
        },
        contact: {
          name: data.contact_name,
          email: data.contact_email,
          phone: data.contact_phone,
          job_title: data.job_title
        },
        requirements: {
          current_tools: data.current_tools,
          main_challenges: data.main_challenges,
          integrations_needed: data.integrations_needed,
          security_requirements: data.security_requirements,
          budget_range: data.budget_range,
          timeline: data.timeline,
          additional_comments: data.additional_comments
        }
      };

      // TODO: Replace with actual webhook endpoint
      console.log("Form submission data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Proposal Request Submitted!",
        description: "We'll send your customized proposal within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact our sales team directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-secondary to-background">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proposal Request Submitted Successfully!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thank you for your interest in Slack. Our team will analyze your requirements and send you a detailed, 
              customized proposal within 24 hours. Check your email (including spam folder) for your personalized 
              Slack transformation plan.
            </p>
            <div className="bg-card p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">Next Steps:</h3>
              <p className="text-muted-foreground">
                Questions? Contact our sales team at{" "}
                <a href="mailto:sales@slack.com" className="text-primary hover:underline">
                  sales@slack.com
                </a>{" "}
                or{" "}
                <a href="tel:+1-800-SLACK-01" className="text-primary hover:underline">
                  +1-800-SLACK-01
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 via-secondary to-background">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Your Custom Slack Proposal
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Tell us about your team's needs and receive a personalized Slack implementation plan with pricing, 
            ROI calculations, and implementation timeline - delivered to your inbox within 24 hours.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Used by 500,000+ teams worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>24-hour response guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>No commitment required</span>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            "Customized for your industry and team size",
            "Detailed ROI calculations and cost savings", 
            "Implementation roadmap and timeline",
            "Integration recommendations"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 p-4 bg-card rounded-lg border">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-card p-8 md:p-12 rounded-2xl border shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Company Information & Contact Details */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Company Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                    Company Information
                  </h3>
                  
                  <FormField
                    control={form.control}
                    name="company_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "Technology", "Healthcare", "Finance", "Education", 
                              "Manufacturing", "Retail", "Consulting", "Marketing", 
                              "Non-Profit", "Other"
                            ].map(industry => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="employee_count"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team Size *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select team size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["1-10", "11-50", "51-100", "101-200", "201-500", "500+"].map(size => (
                              <SelectItem key={size} value={size}>
                                {size} employees
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourcompany.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Right Column - Contact Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                    Contact Details
                  </h3>

                  <FormField
                    control={form.control}
                    name="contact_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contact_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="email@company.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contact_phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+351 912 345 678" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="job_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Job Title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Requirements & Preferences - Full Width */}
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                  Requirements & Preferences
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Current Tools */}
                  <FormField
                    control={form.control}
                    name="current_tools"
                    render={() => (
                      <FormItem>
                        <FormLabel>What tools do you currently use?</FormLabel>
                        <div className="grid grid-cols-2 gap-2">
                          {["Email", "Microsoft Teams", "Zoom", "WhatsApp", "Discord", "Other"].map((tool) => (
                            <FormField
                              key={tool}
                              control={form.control}
                              name="current_tools"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(tool)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), tool])
                                          : field.onChange(field.value?.filter((value) => value !== tool))
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">{tool}</FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Main Challenges */}
                  <FormField
                    control={form.control}
                    name="main_challenges"
                    render={() => (
                      <FormItem>
                        <FormLabel>What are your main communication challenges?</FormLabel>
                        <div className="space-y-2">
                          {[
                            "Too many emails", "Information scattered", "Poor team collaboration",
                            "Remote work coordination", "File sharing issues", "Meeting overload"
                          ].map((challenge) => (
                            <FormField
                              key={challenge}
                              control={form.control}
                              name="main_challenges"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(challenge)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), challenge])
                                          : field.onChange(field.value?.filter((value) => value !== challenge))
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">{challenge}</FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Integrations Needed */}
                  <FormField
                    control={form.control}
                    name="integrations_needed"
                    render={() => (
                      <FormItem>
                        <FormLabel>Which integrations do you need?</FormLabel>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "Google Workspace", "Microsoft 365", "Salesforce", 
                            "Trello", "GitHub", "Zoom", "Calendly", "Other"
                          ].map((integration) => (
                            <FormField
                              key={integration}
                              control={form.control}
                              name="integrations_needed"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(integration)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), integration])
                                          : field.onChange(field.value?.filter((value) => value !== integration))
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">{integration}</FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Security Requirements */}
                  <FormField
                    control={form.control}
                    name="security_requirements"
                    render={() => (
                      <FormItem>
                        <FormLabel>Security & Compliance needs?</FormLabel>
                        <div className="space-y-2">
                          {[
                            "GDPR Compliance", "HIPAA Compliance", "SOC 2", 
                            "Single Sign-On (SSO)", "Data Encryption", "None specific"
                          ].map((requirement) => (
                            <FormField
                              key={requirement}
                              control={form.control}
                              name="security_requirements"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(requirement)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), requirement])
                                          : field.onChange(field.value?.filter((value) => value !== requirement))
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">{requirement}</FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Budget Range */}
                  <FormField
                    control={form.control}
                    name="budget_range"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly budget range per user? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "Under €5", "€5-€10", "€10-€20", "€20+", "Need recommendation"
                            ].map(budget => (
                              <SelectItem key={budget} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Timeline */}
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>When would you like to implement? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "ASAP", "Within 1 month", "1-3 months", "3-6 months", "Just exploring"
                            ].map(time => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Comments */}
                <FormField
                  control={form.control}
                  name="additional_comments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Any specific requirements or questions?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about any specific needs, integrations, or questions you have..."
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Custom Proposal
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Free proposal, no commitment required • Response within 24 hours
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ProposalForm;
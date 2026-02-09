import { useState } from 'react';
import { Phone, Mail, Clock, Calendar, CheckCircle2, Zap, Shield, TrendingUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/generated/logo-wordmark.dim_800x240.png" 
              alt="CallCraft AI" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
            <a href="tel:9295019225" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
              <Phone className="h-4 w-4" />
              (929) 501-9225
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <ChevronDown className={`h-6 w-6 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container py-4 flex flex-col gap-3">
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium hover:text-primary transition-colors text-left">
                How It Works
              </button>
              <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors text-left">
                FAQ
              </button>
              <a href="tel:9295019225" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                <Phone className="h-4 w-4" />
                (929) 501-9225
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="container py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Never Miss Another Emergency Call
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground">
                    AI Receptionist for Plumbing, HVAC & Electrical Contractors
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Answer every call 24/7, book appointments instantly, and capture thousands in revenue you're losing to voicemail.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-lg h-14 px-8">
                    <a href="tel:9295019225">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (929) 501-9225
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('pricing')} className="text-lg h-14 px-8">
                    View Pricing
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Setup in 48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">No contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Cancel anytime</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/assets/generated/hero-illustration.dim_1600x900.png" 
                  alt="AI Receptionist answering calls and booking appointments" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="border-b bg-muted/30">
          <div className="container py-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Always Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Calls Answered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">&lt;3s</div>
                <div className="text-sm text-muted-foreground">Average Answer Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="border-b">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Stop Losing Emergency Calls to Voicemail
              </h2>
              <p className="text-lg text-muted-foreground">
                When a homeowner has a burst pipe at 2 AM or their AC dies on a Saturday, they're calling multiple contractors. 
                The first one to answer gets the job. Are you losing thousands because you can't answer every call?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-destructive/50">
                <CardHeader>
                  <CardTitle className="text-destructive">Without CallCraft AI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-destructive mt-1">✗</div>
                    <div>Missed calls go to voicemail</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-destructive mt-1">✗</div>
                    <div>Customers call your competitors</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-destructive mt-1">✗</div>
                    <div>No after-hours coverage</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-destructive mt-1">✗</div>
                    <div>Manual appointment scheduling</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-destructive mt-1">✗</div>
                    <div>Lost revenue every week</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary">With CallCraft AI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>Every call answered in seconds</div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>Capture emergency jobs 24/7</div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>True 24/7/365 coverage</div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>Instant appointment booking</div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>Maximize revenue potential</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-b bg-muted/30">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                How CallCraft AI Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Get up and running in 48 hours with our simple 3-step process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle>Quick Setup Call</CardTitle>
                  <CardDescription>
                    We learn about your business, services, pricing, and scheduling preferences in a 30-minute call.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle>AI Training</CardTitle>
                  <CardDescription>
                    We train your AI receptionist on your services, rates, availability, and common customer questions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle>Go Live</CardTitle>
                  <CardDescription>
                    Forward your calls and start capturing every opportunity. Your AI receptionist is live 24/7.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-b">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Everything You Need to Never Miss a Call
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>24/7 Availability</CardTitle>
                  <CardDescription>
                    Answer calls around the clock, including nights, weekends, and holidays. Never miss an emergency job again.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Smart Scheduling</CardTitle>
                  <CardDescription>
                    Book appointments directly into your calendar based on your availability and service area.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Instant Response</CardTitle>
                  <CardDescription>
                    Answer calls in under 3 seconds. Beat your competitors who send customers to voicemail.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Emergency Triage</CardTitle>
                  <CardDescription>
                    Identify urgent situations and route them appropriately. Capture high-value emergency calls.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Lead Capture</CardTitle>
                  <CardDescription>
                    Collect customer information, service needs, and contact details for every call.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Natural Conversations</CardTitle>
                  <CardDescription>
                    AI that sounds human, understands context, and handles complex customer questions naturally.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-b bg-muted/30">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the plan that fits your business. No contracts, cancel anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for solo contractors</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$299</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Up to 100 calls/month</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>24/7 call answering</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Appointment booking</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>1 service location</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Email notifications</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" asChild>
                    <a href="tel:9295019225">Get Started</a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-primary shadow-lg">
                <CardHeader>
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                    MOST POPULAR
                  </div>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$599</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Up to 300 calls/month</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>24/7 call answering</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Appointment booking</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Up to 3 service locations</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Email & SMS notifications</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" asChild>
                    <a href="tel:9295019225">Get Started</a>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large operations</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$999</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Unlimited calls</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>24/7 call answering</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Appointment booking</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Unlimited service locations</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Email & SMS notifications</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom integrations</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" asChild>
                    <a href="tel:9295019225">Get Started</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-center">One-Time Setup Fee: $499</CardTitle>
                  <CardDescription className="text-center">
                    Includes AI training, system configuration, and testing. Get up and running in 48 hours.
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Optional Add-On</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>AI Optimization Service</CardTitle>
                    <CardDescription>
                      Monthly fine-tuning based on call performance data
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$199</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Continuous AI improvement</li>
                      <li>• Monthly performance reports</li>
                      <li>• Script optimization</li>
                      <li>• Response time improvements</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to know about CallCraft AI
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How quickly can I get started?</AccordionTrigger>
                  <AccordionContent>
                    Most clients are live within 48 hours. After your setup call, we train your AI receptionist and have it ready to answer calls. You can start forwarding calls as soon as testing is complete.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Does it sound like a real person?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Our AI uses advanced natural language processing to have human-like conversations. Customers typically can't tell they're speaking with AI. The system understands context, handles interruptions, and responds naturally to questions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What happens to emergency calls?</AccordionTrigger>
                  <AccordionContent>
                    The AI is trained to identify emergency situations (burst pipes, no heat, electrical hazards, etc.) and can immediately notify you via text or transfer the call based on your preferences. You never miss a high-value emergency job.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Can it book appointments?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. The AI integrates with your calendar and books appointments based on your availability, service area, and the type of work needed. Customers get instant confirmation, and you get a notification with all the details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What if the AI can't answer a question?</AccordionTrigger>
                  <AccordionContent>
                    If the AI encounters a question it can't confidently answer, it will collect the customer's information and let them know you'll call back shortly. You'll receive an immediate notification with the customer's question and contact details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Is there a contract?</AccordionTrigger>
                  <AccordionContent>
                    No contracts required. All plans are month-to-month. If you're not satisfied, you can cancel anytime. The only commitment is the one-time setup fee to get your AI receptionist trained and configured.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>What happens if I go over my call limit?</AccordionTrigger>
                  <AccordionContent>
                    We'll notify you when you're approaching your plan's call limit. Additional calls are billed at $2 per call, or you can upgrade to a higher tier plan at any time to get better per-call rates.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Can I customize what the AI says?</AccordionTrigger>
                  <AccordionContent>
                    Yes! During setup, we customize the AI's responses to match your brand voice, services, pricing, and policies. You can request script changes anytime, and with the AI Optimization add-on, we continuously refine responses based on performance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-b bg-primary/5">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Stop Missing Calls?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Get started today and never lose another customer to voicemail. Setup takes just 48 hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild className="text-lg h-14 px-8">
                  <a href="tel:9295019225">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (929) 501-9225
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8">
                  <a href="mailto:callcraftaai@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>

              <div className="pt-8 space-y-3">
                <p className="text-sm font-semibold text-muted-foreground">Contact Information</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <a href="tel:9295019225" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>(929) 501-9225</span>
                  </a>
                  <a href="mailto:callcraftaai@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>callcraftaai@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <img 
                src="/assets/generated/logo-wordmark.dim_800x240.png" 
                alt="CallCraft AI" 
                className="h-8 w-auto"
              />
              <p className="text-sm text-muted-foreground">
                AI Receptionist for home service contractors. Never miss another call.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <button onClick={() => scrollToSection('how-it-works')} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  How It Works
                </button>
                <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  Features
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  FAQ
                </button>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p>Plumbing Contractors</p>
                <p>HVAC Contractors</p>
                <p>Electrical Contractors</p>
                <p>Home Service Businesses</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="flex flex-col gap-3 text-sm">
                <a href="tel:9295019225" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>(929) 501-9225</span>
                </a>
                <a href="mailto:callcraftaai@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>callcraftaai@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2026. Built with love using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

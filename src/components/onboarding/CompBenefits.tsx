import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, HeartHandshake, Gift, Award, ShieldPlus, Clock, FileText, Smartphone, PhoneCall, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export function CompBenefits() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
          <HeartHandshake className="w-8 h-8 text-accent" />
          Compensation & Benefits
        </h2>
        <p className="text-muted-foreground text-lg">We value your contribution. Here's how we reward our team.</p>
      </div>

      <div className="space-y-12">
        {/* Section 1: Salary & Financials */}
        <section className="space-y-6 bg-card rounded-xl p-6 shadow-sm border">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Coins className="w-6 h-6" /> Salary & Financials
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border rounded-xl p-4 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/benefits/monthly-salary.png" alt="Monthly Salary" className="w-32 h-32 object-contain drop-shadow-sm" />
              <h4 className="font-bold text-lg text-primary">Monthly Salary</h4>
              <p className="text-sm text-muted-foreground">Paid at the end of the month (strictly confidential).</p>
            </div>
            <div className="bg-white border rounded-xl p-4 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/benefits/13th-month.png" alt="13th Month" className="w-32 h-32 object-contain drop-shadow-sm" />
              <h4 className="font-bold text-lg text-primary">13th Month</h4>
              <p className="text-sm text-muted-foreground"><span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold">70%</span> paid before Lunar New Year, remaining <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold">30%</span> in May.</p>
            </div>
            <div className="bg-white border rounded-xl p-4 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/benefits/seniority.png" alt="Seniority Award" className="w-24 h-24 object-contain drop-shadow-sm" />
              <h4 className="font-bold text-lg text-primary">Seniority Award</h4>
              <div className="text-sm text-muted-foreground w-full space-y-1.5 text-left">
                <div className="flex justify-between border-b pb-1"><span>03 Years:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">2M VND</span></div>
                <div className="flex justify-between border-b pb-1"><span>05 Years:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">5M VND</span></div>
                <div className="flex justify-between border-b pb-1"><span>07 Years:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">15M VND</span></div>
                <div className="flex justify-between border-b pb-1"><span>10 Years:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">20M VND</span></div>
                <div className="flex justify-between"><span>15 Years:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">25M VND</span></div>
              </div>
            </div>
            <div className="bg-white border rounded-xl p-4 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/benefits/overtime.png" alt="Overtime" className="w-32 h-32 object-contain drop-shadow-sm" />
              <h4 className="font-bold text-lg text-primary">Overtime</h4>
              <p className="text-sm text-muted-foreground">Paid in the following month's salary.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Allowances & Bonuses */}
        <section className="space-y-6 bg-card rounded-xl p-6 shadow-sm border">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Gift className="w-6 h-6" /> Allowances & Bonuses
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border rounded-xl p-4 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/benefits/training.png" alt="Training & Certificate" className="w-32 h-32 object-contain drop-shadow-sm" />
              <h4 className="font-bold text-lg text-primary">Training & Certificate</h4>
              <p className="text-sm text-muted-foreground">Training Allowance & Certificate Bonus.</p>
            </div>
            <div className="bg-white border rounded-xl p-4 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/benefits/attraction.png" alt="Talent Attraction" className="w-32 h-32 object-contain drop-shadow-sm" />
              <h4 className="font-bold text-lg text-primary">Talent Attraction</h4>
              <p className="text-sm text-muted-foreground">
                4 bonus levels: <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">50k - 1M VND</span><br/>
                Employee Referral: Up to <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">15M VND</span>
              </p>
            </div>
            <div className="bg-white border rounded-xl p-4 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/benefits/awards.png" alt="Awards & Recognition" className="w-32 h-32 object-contain drop-shadow-sm" />
              <h4 className="font-bold text-lg text-primary">Awards & Recognition</h4>
              <p className="text-sm text-muted-foreground">
                Best Team/Employee,<br/>
                Team of The Month,<br/>
                Employee/Team of The Year.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-4 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/benefits/teambuilding.png" alt="Teambuilding" className="w-24 h-24 object-contain drop-shadow-sm" />
              <h4 className="font-bold text-lg text-primary">Teambuilding</h4>
              <div className="text-sm text-muted-foreground w-full space-y-1.5 text-left">
                <div className="flex justify-between border-b pb-1"><span>Management:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">2M</span></div>
                <div className="flex justify-between border-b pb-1"><span>Staff:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">1.6M</span></div>
                <div className="flex justify-between border-b pb-1"><span>Engagement:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">600k</span></div>
                <div className="flex justify-between border-b pb-1"><span>Birthday:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">500k</span></div>
                <div className="flex justify-between border-b pb-1"><span>Tea break:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">1.2M</span></div>
                <div className="flex justify-between"><span>Company trip:</span> <span className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">5M</span></div>
                <div className="text-[10px] text-center text-slate-400 mt-1">* VND / person / year</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Company Activities Gallery */}
        <section className="space-y-6 bg-card rounded-xl p-6 shadow-sm border">
          <div className="space-y-2 text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
              <Award className="w-6 h-6" /> Company Activities & Events
            </h3>
            <p className="text-muted-foreground text-sm">A glimpse into our vibrant company culture, teambuilding events, and celebrations.</p>
          </div>
          <div className="max-w-4xl mx-auto px-8">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <img src="/images/activities/company-trip.png" alt="Company Trip" className="rounded-xl shadow-sm border border-gray-100 w-full aspect-[4/3] object-cover" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <img src="/images/activities/ladies-day.png" alt="Ladies Day" className="rounded-xl shadow-sm border border-gray-100 w-full aspect-[4/3] object-cover" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <img src="/images/activities/tet-event.png" alt="Tet Event" className="rounded-xl shadow-sm border border-gray-100 w-full aspect-[4/3] object-cover" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <img src="/images/activities/mid-autumn.png" alt="Mid-Autumn Festival" className="rounded-xl shadow-sm border border-gray-100 w-full aspect-[4/3] object-cover" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-6 w-8 h-8" />
              <CarouselNext className="-right-6 w-8 h-8" />
            </Carousel>
          </div>
        </section>

        {/* Section 4: Healthcare & Insurance (New Detailed Section) */}
        <section className="space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm border border-blue-100">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                <ShieldPlus className="w-6 h-6" /> Healthcare & Insurance
              </h3>
              <p className="text-gray-700">
                Annual health check-up provided for official employees.
                <br/>
                <span className="text-accent font-semibold">* Note: Only for Official Employees.</span>
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-white/90 p-4 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">New Insurance Provider</p>
                  <p className="font-bold text-primary mt-1">DBV</p>
                </div>
                <div className="bg-white/90 p-4 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Claim Settlement</p>
                  <p className="font-bold text-primary mt-1">FHVI</p>
                  <p className="text-xs text-gray-600">Fullerton Health Vietnam</p>
                </div>
                <div className="bg-white/90 p-4 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Advisory & Support</p>
                  <p className="font-bold text-primary mt-1">Broker IIB</p>
                  <p className="text-xs text-gray-600">Indochine Insurance Brokers — accompanies employees throughout the use of services</p>
                </div>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-lg text-primary mb-2">[HEALTH INSURANCE 2026] DIRECT BILLING & CLAIM SETTLEMENT GUIDELINE</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Quick guide to basic steps when using insurance services: direct billing, claim submission, and logging into the Fullerton Health Concierge App.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-semibold"><Clock className="w-4 h-4 mr-2 inline" /> 1. Direct Billing</AccordionTrigger>
                    <AccordionContent className="text-sm space-y-3">
                      <p>When using services at medical facilities within the direct billing network, please present:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Insurance card: electronic or physical card</li>
                        <li>Identity document: ID card / Passport</li>
                      </ul>
                      <p>The medical facility will check information, send a direct billing request to FHVI, and notify you of the result.</p>
                      <div className="bg-blue-50 p-3 rounded-md mt-2">
                        <p className="font-semibold mb-1">Processing time:</p>
                        <ul className="list-disc pl-5">
                          <li>Outpatient: approximately 30 minutes</li>
                          <li>Inpatient: approximately 24 hours</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-semibold"><FileText className="w-4 h-4 mr-2 inline" /> 2. Claim Settlement</AccordionTrigger>
                    <AccordionContent className="text-sm space-y-3">
                      <p>In case you need to submit a claim, please prepare:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Claim form</li>
                        <li>Medical records</li>
                        <li>Invoices / financial documents</li>
                        <li>Other documents if any</li>
                      </ul>
                      <p>Claims can be submitted via the Fullerton Health Concierge App, email, or in person following FHVI's instructions.</p>
                      <div className="bg-blue-50 p-3 rounded-md mt-2">
                        <p className="font-semibold mb-1">Processing time:</p>
                        <ul className="list-disc pl-5">
                          <li>Within delegation: 07 working days</li>
                          <li>Over delegation: 12 working days</li>
                          <li>Claim transfer: within 05 working days after the claim is approved</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-semibold"><Smartphone className="w-4 h-4 mr-2 inline" /> 3. Fullerton Health Concierge App Login</AccordionTrigger>
                    <AccordionContent className="text-sm space-y-4">
                      <div className="space-y-2">
                        <div>
                          <p className="font-semibold">Username:</p>
                          <code className="bg-muted px-2 py-1 rounded">CCCD-BHSK2026</code>
                          <p className="text-xs text-muted-foreground mt-1">Example: ID is 012345678 {`=>`} Username: 012345678-BHSK2026</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-semibold">Default password:</p>
                          <code className="bg-muted px-2 py-1 rounded">YYYYMMDD</code> (Year of birth + Month of birth + Day of birth)
                          <p className="text-xs text-muted-foreground mt-1">Example: Date of birth is 01/02/1990 {`=>`} Password: 19900201</p>
                        </div>
                      </div>

                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-semibold"><PhoneCall className="w-4 h-4 mr-2 inline" /> Notes & Support</AccordionTrigger>
                    <AccordionContent className="text-sm space-y-3">
                      <p>Detailed instructions have been sent by HR via email, please check your email for the full instruction files, claim forms, and related information.</p>
                      <div className="bg-orange-50 p-3 rounded-md border border-orange-100">
                        <p className="font-semibold mb-1">Need more support?</p>
                        <p>Please contact HR or FHVI Customer Service Hotline:</p>
                        <ul className="mt-2 space-y-1">
                          <li><strong>Hotline:</strong> (+84) 28 3925 6193 / (+84) 28 3925 6192</li>
                          <li><strong>Email:</strong> <a href="mailto:tpa-inquiry@fullertonhealth.com" className="text-blue-600 hover:underline">tpa-inquiry@fullertonhealth.com</a></li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <img src="/images/fhvi/healthcare-app.png" alt="Healthcare Insurance App" className="w-full max-w-[280px] h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-md rounded-2xl" />
            </div>
          </div>

          {/* Healthcare App Visual Guide */}
          <div className="mt-8 pt-8 border-t border-blue-200/60">
            <div className="text-center space-y-4 mb-8">
              <h4 className="text-2xl font-bold text-primary">Visual Guide</h4>
              <p className="text-muted-foreground">Steps to login and use Fullerton Health Concierge App</p>
            </div>
            <div className="max-w-4xl mx-auto px-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                    <CarouselItem key={step}>
                      <div className="p-2 flex justify-center">
                        <img 
                          src={`/images/fhvi/step${step}.png`} 
                          alt={`Step ${step}`} 
                          className="rounded-xl shadow-md border border-gray-100 w-full h-auto object-contain max-h-[600px]"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-12 w-12 h-12 border-2 bg-white" />
                <CarouselNext className="-right-4 md:-right-12 w-12 h-12 border-2 bg-white" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Section 5: Union Policies */}
        <section className="space-y-6 bg-card rounded-xl p-6 shadow-sm border">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Users className="w-6 h-6" /> Union Policies
            </h3>
            <p className="text-muted-foreground">Special Occasion Benefits - Thoughtful support for life's meaningful moments.</p>
          </div>
          
          <div className="flex justify-center mt-6 bg-slate-50/50 p-2 md:p-6 rounded-2xl">
            <img 
              src="/images/benefits/special-occasions.png" 
              alt="Special Occasion Benefits" 
              className="w-full max-w-5xl rounded-xl shadow-md border border-gray-100 object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

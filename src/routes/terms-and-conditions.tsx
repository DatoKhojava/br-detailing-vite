import { PageLayout } from "@/components/layouts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createFileRoute } from "@tanstack/react-router";

const termsAndConditions = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using our car services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Service Description",
    content:
      "We provide various car-related services including but not limited to maintenance, repair, and detailing. The specific services offered may vary and are subject to change without notice.",
  },
  {
    title: "3. Appointments and Cancellations",
    content:
      "Appointments must be scheduled in advance. We require at least 24 hours notice for cancellations. Failure to provide adequate notice may result in a cancellation fee.",
  },
  {
    title: "4. Payment Terms",
    content:
      "Payment is due upon completion of services. We accept cash, credit cards, and approved payment methods. Prices are subject to change without notice.",
  },
  {
    title: "5. Warranty and Liability",
    content:
      "We provide a 30-day warranty on parts and labor for most services. This warranty does not cover damage due to accidents, misuse, or normal wear and tear. Our liability is limited to the cost of the services provided.",
  },
  {
    title: "6. Customer Responsibilities",
    content:
      "Customers are responsible for accurately describing their vehicle issues and providing any relevant vehicle history. Failure to disclose important information may void any warranties or guarantees.",
  },
  {
    title: "7. Personal Property",
    content:
      "We are not responsible for personal property left in vehicles. Please remove all valuables before leaving your vehicle for service.",
  },
  {
    title: "8. Privacy Policy",
    content:
      "We respect your privacy and protect your personal information. Please refer to our separate Privacy Policy for details on how we collect, use, and safeguard your data.",
  },
  {
    title: "9. Modifications to Terms",
    content:
      "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of these changes.",
  },
  {
    title: "10. Governing Law",
    content:
      "These Terms and Conditions are governed by and construed in accordance with the laws of [Your State/Country]. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in [Your City/State/Country].",
  },
];

export const Route = createFileRoute("/terms-and-conditions")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-36">
        <div className="max-w-4xl w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Please read these terms and conditions carefully before using our
              car services.
            </p>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <Accordion type="single" collapsible className="w-full">
                {termsAndConditions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <AccordionTrigger className="py-4 text-left font-medium text-gray-900">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

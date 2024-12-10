import { PageLayout } from "@/components/layouts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createFileRoute } from "@tanstack/react-router";

const faqs = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
  },
  {
    question: "How do I start a Next.js project?",
    answer:
      "To start a new Next.js project, you can use the create-next-app command. Run 'npx create-next-app@latest' in your terminal and follow the prompts to set up your new project.",
  },
  {
    question: "What is server-side rendering in Next.js?",
    answer:
      "Server-side rendering (SSR) is a feature in Next.js that allows you to pre-render pages on the server. This can improve performance and SEO by sending fully rendered HTML to the client.",
  },
  {
    question: "How does routing work in Next.js?",
    answer:
      "Next.js uses a file-system based router. Each file inside the 'app' directory becomes a route. For example, 'app/about/page.js' would create a route at '/about'.",
  },
  {
    question: "What are the key features of Next.js?",
    answer:
      "Some key features of Next.js include: server-side rendering, static site generation, API routes, built-in CSS support, code splitting, and fast refresh for a better developer experience.",
  },
];

export const Route = createFileRoute("/FAQ")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ხშირად დასმული კითხვები
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              ამ დანართში თქვენ შეგიძლიათ მიიღოთ ინფორმაცია თუ რისთვის შეიქმენა
              ჩვენი პლათფორმა და თუ როგორ გამოვიყენოთ ის
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white my-2 rounded-lg shadow-sm"
              >
                <AccordionTrigger className="px-4 py-3 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageLayout>
  );
}

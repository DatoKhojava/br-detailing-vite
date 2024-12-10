import {
  AboutSection,
  ContactsSection,
  MainSection,
  ServicesSection,
} from "@/components/custom/sections";
import PageLayout from "@/components/layouts/PageLayout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageLayout>
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <ContactsSection />
    </PageLayout>
  );
}

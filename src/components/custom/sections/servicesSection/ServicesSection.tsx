import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Oil Change",
    subtitles: ["Synthetic Oil", "Oil Filter Replacement", "Fluid Top-up"],
    //img size 100x100
    image: "https://cdn-icons-png.flaticon.com/512/938/938690.png",
  },
  {
    title: "Brake Service",
    subtitles: [
      "Brake Pad Replacement",
      "Rotor Inspection",
      "Brake Fluid Check",
    ],
    image: "https://cdn-icons-png.flaticon.com/512/938/938690.png",
  },
  {
    title: "Tire Service",
    subtitles: ["Tire Rotation", "Wheel Alignment", "Tire Pressure Check"],
    image: "https://cdn-icons-png.flaticon.com/512/938/938690.png",
  },
  {
    title: "Engine Tune-up",
    subtitles: [
      "Spark Plug Replacement",
      "Air Filter Check",
      "Fuel System Cleaning",
    ],
    image: "https://cdn-icons-png.flaticon.com/512/938/938690.png",
  },
  {
    title: "Battery Service",
    subtitles: ["Battery Test", "Terminal Cleaning", "Alternator Check"],
    image: "https://cdn-icons-png.flaticon.com/512/938/938690.png",
  },
  {
    title: "Transmission Service",
    subtitles: [
      "Fluid Change",
      "Filter Replacement",
      "Transmission Inspection",
    ],
    image: "https://cdn-icons-png.flaticon.com/512/938/938690.png",
  },
];

export default function ServicesSection() {
  return (
    <div
      // className="h-dvh bg-red-200 flex items-center justify-center"
      id="services"
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            ჩვენი სერვისები
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="flex flex-col items-center">
                  <img
                    src={service.image}
                    alt={`${service.title} illustration`}
                    width={100}
                    height={100}
                    className="mb-4 rounded-full"
                  />
                  <CardTitle className="text-xl font-semibold text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {service.subtitles.map((subtitle, subIndex) => (
                      <li key={subIndex} className="text-gray-600">
                        {subtitle}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

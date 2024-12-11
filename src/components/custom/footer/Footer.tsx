export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">კომპანია</h2>
            <div className="space-y-3">
              <a
                href="/FAQ"
                className="block text-gray-600 hover:text-gray-900"
              >
                ხშირად დასმული კითხვები
              </a>
              <a
                href="terms-and-conditions"
                className="block text-gray-600 hover:text-gray-900"
              >
                მომხმარების პირობები
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                ფორუმი
              </a>
            </div>
          </div>

          {/* Working Hours Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">სამუშაო საათები</h2>
            <p className="text-gray-600">ყოველდღე: 10:00 - 21:00</p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">კონტაქტი</h2>
            <div className="space-y-3">
              <a
                href="tel:555555555"
                className="block text-gray-600 hover:text-gray-900"
              >
                +(995) 555 55 55 55
              </a>
              <a href="" className="block text-gray-600 hover:text-gray-900">
                m.me/brdetailingbatumi
              </a>
              <a
                href="mailto:info@brdetailingbatumi.ge"
                className="block text-gray-600 hover:text-gray-900 break-all"
              >
                info@brdetailingbatumi.ge
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-center">
            <span className="text-gray-500 text-center">
              © 2024 All Rights Reserved -{" "}
              <a
                className="text-purple-800 hover:text-purple-600 font-bold"
                target="_blank"
                href="https://purplemoonit.com/"
              >
                Powered by Purple Moon inc.
              </a>
            </span>
            {/* </div> */}

            {/* <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="h-6 w-6" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

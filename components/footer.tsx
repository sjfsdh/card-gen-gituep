import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-purple-50 dark:bg-purple-950/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-700 dark:text-purple-400">GitUEP</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Create professional ID cards, certificates, and credentials in minutes with our intuitive online platform.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/gituep.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com/gituep_online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com/gituep.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-700 dark:text-purple-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/id-card-generator" className="text-muted-foreground hover:text-purple-600">
                  ID Card Generator
                </Link>
              </li>
              <li>
                <Link href="/certificate-generator" className="text-muted-foreground hover:text-purple-600">
                  Certificate Generator
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-purple-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/verify" className="text-muted-foreground hover:text-purple-600">
                  Verify Credential
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-purple-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-700 dark:text-purple-400">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-purple-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-purple-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-purple-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-700 dark:text-purple-400">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="mailto:support@gituep.online" className="text-muted-foreground hover:text-purple-600">
                  support@gituep.online
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="tel:+14157892345" className="text-muted-foreground hover:text-purple-600">
                  +1 (415) 789-2345
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  123 Credential Blvd
                  <br />
                  Suite 456
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="mt-4">
                <Link href="/contact" className="text-purple-600 hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GitUEP by Rahul Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


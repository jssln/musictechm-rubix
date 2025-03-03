import Image from "next/image"
import Link from "next/link"

import { Company } from "@/lib/meta"

export function Footer() {
  return (
    <footer className="w-full h-16 border-t">
      <div className="mt-10 mx-5 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Name */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Boston Music & Tech Meetup</h2>
            <p className="text-gray-400 mt-2">connect / share / learn</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.meetup.com/boston-music-tech-meetup/"
                    target="_blank"
                    className="text-gray-400 hover:text-neonGreen transition-colors"
                  >
                    Meetup Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.meetup.com/boston-music-tech-meetup/events"
                    className="text-gray-400 hover:text-neonGreen transition-colors"
                    target="_blank"
                  >
                    Upcoming Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:jess@jssln.com"
                    className="text-gray-400 hover:text-magenta-400 transition-colors"
                  >
                    Contact Organizer
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dashboard.mailerlite.com/forms/1361131/147685666495399194/share"
                    className="text-gray-400 hover:text-magenta-400 transition-colors"
                    target="_blank"
                  >
                    Join Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0 w-full h-full px-2 sm:py-0 py-3 sm:px-4 lg:px-8 text-sm text-muted-foreground">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <Link className="font-semibold" href={Company.link}>
            {Company.name}
          </Link>
          .
        </p>
        {Company.branding !== false && (
          <div className="text-center hidden md:block">
            <Image
              src="/logo.svg"
              alt="Rubix Studios Logo"
              width={30}
              height={30}
            />
          </div>
        )}
      </div>
    </footer>
  )
}

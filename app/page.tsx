import Link from "next/link"
import Image from "next/image"
// import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"


export default function Home() {
  return (
    <>
      <div className="min-h-[60.5vh] flex flex-col justify-center items-center text-center px-2 py-8 bg-gradient-to-br from-blurple-600 via-[#3471eb] to-magenta-400">
        <h1 className="text-5xl font-bold mb-4 sm:text-7xl text-white uppercase">Boston</h1>
        <h1 className="text-5xl font-bold mb-4 sm:text-7xl text-white uppercase">Music & Tech</h1>
        <h1 className="text-6xl font-bold mb-4 sm:text-7xl text-neonGreen uppercase">Meetup</h1>
        <p className="max-w-[600px] text-foreground mb-8 sm:text-base text-white">
          A community of makers and creators working on music & tech
        </p>

        <div className="flex items-center gap-5">
          <Link
            href={`https://www.meetup.com/boston-music-tech-meetup/`}
            target="_blank"
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Join the community
          </Link>
          <Link
            href={`https://dashboard.mailerlite.com/forms/1361131/147685666495399194/share`}
            target="_blank"
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Join newsletter
          </Link>
        </div>
      </div>

      <div className="min-h-[40vh] flex flex-col justify-center items-center text-center px-2 py-20 mb-20 text-gray-800">
        <h1 className="text-5xl font-bold my-4 py-6 sm:text-7x">Upcoming events</h1>
        <a href="https://www.meetup.com/boston-music-tech-meetup/events/305793091/" target="_blank">
          <Image
            src="/images/meetup-banner-2025.03.01.png"
            alt="Meetup event on March 1, 2025"
            width={400}
            height={400}
          />
        </a>
      </div>
    </>
  )
}

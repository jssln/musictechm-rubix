import Image from "next/image"
// import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import CardGrid from "@/components/markdown/cardgrid"
import Card from "@/components/markdown/card"
import ClickTrackedLink from "@/components/google_analytics/ClickTrackedLink"

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
          <ClickTrackedLink
            href={`/learn/demos`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
            eventName="clicked_hero_viewprojects"
          >
            View community projects
          </ClickTrackedLink>
          <ClickTrackedLink
            href={`https://dashboard.mailerlite.com/forms/1361131/147685666495399194/share`}
            openInNewTab={true}
            className={buttonVariants({ className: "px-6", size: "lg" })}
            eventName="clicked_hero_subscribe"
          >
            Subscribe to updates
          </ClickTrackedLink>
        </div>
      </div>

      <div className="min-h-[40vh] flex flex-col justify-center items-center text-center px-2 py-20 mb-10 text-gray-800">
        <h1 className="text-5xl font-bold my-4 py-6 sm:text-7x">Attend events</h1>

        <p className="mb-10">Join the <a className="text-neonGreen-600" href="https://www.meetup.com/boston-music-tech-meetup/">Meetup group</a> and <a href="https://dashboard.mailerlite.com/forms/1361131/147685666495399194/share" className="text-neonGreen-600">email list</a> to hear about upcoming events.</p>

        <a href="https://www.meetup.com/boston-music-tech-meetup/events/305793091/" target="_blank">
          <Image
            src="/images/meetup-banner-2025.03.01.png"
            alt="Meetup event on March 1, 2025"
            width={400}
            height={400}
          />
        </a>
      </div>

      <div className="min-h-[60.5vh] flex flex-col justify-center items-center text-center px-2 py-8 bg-gradient-to-br from-blurple-600 via-[#3471eb] to-magenta-400">
        <h1 className="text-5xl font-bold sm:text-7xl text-white mb-20">Recent demos</h1>
        <CardGrid>
          <Card
            subtitle="March 1, 2025"
            title="Zoot"
            description="An easy-to-play, highly expressive electronic wind instrument"
            href="/learn/demos/zoot"
          />
          <Card
            subtitle="March 1, 2025"
            title="dymm"
            description="A dynamic MIDI mapper for e-drums"
            href="/learn/demos/dymm"
          />
        </CardGrid>
      </div>
    </>
  )
}

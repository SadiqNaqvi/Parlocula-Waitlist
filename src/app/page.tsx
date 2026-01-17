import { EarlyAccess, Footer, QuestionsSection, ReleasedHeader, WaitListHeader, WhatIsParloculaSection, WhatParloculaOffers, WhyParloculaExistsSection } from "@/components";
import { checkParloculaLink } from "@/lib/actions";


const WaitListLanding = () => {
  return (
    <>
      <div className="patternBackground"></div>

      <main className="w-full">
        <WaitListHeader />
        <WhatIsParloculaSection />
        <WhyParloculaExistsSection />
        <WhatParloculaOffers />
        <EarlyAccess />
        <QuestionsSection />
        <Footer />
      </main>
    </>
  )
}

const ReleasedLanding = ({ link }: { link: string }) => {
  return (
    <>
      <div className="patternBackground"></div>

      <main className="w-full">
        <ReleasedHeader link={link} />
        <WhatIsParloculaSection />
        <WhyParloculaExistsSection />
        <WhatParloculaOffers />
        <EarlyAccess />
        <QuestionsSection />
        <Footer link={link} />
      </main>
    </>
  )
}

const HomePage = async () => {

  const link = await checkParloculaLink();

  if (link) return <ReleasedLanding link={link} />
  return <WaitListLanding />

}

export default HomePage;
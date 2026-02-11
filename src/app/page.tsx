import { EarlyAccess, Footer, QuestionsSection, ReleasedHeader, WaitListHeader, WhatIsParloculaSection, VocabularySection, WhyParloculaExistsSection } from "@/components";
<WhoIsParloculaFor />
import NotAnAppSection from "@/components/NotAnAppSection";
import WhoIsParloculaFor from "@/components/WhoIsParloculaFor";
import { checkParloculaLink } from "@/lib/actions";


const WaitListLanding = () => {
  return (
    <>
      <div className="patternBackground"></div>

      <main className="w-full">
        <WaitListHeader />
        <WhatIsParloculaSection />
        <WhyParloculaExistsSection />
        <NotAnAppSection />
        <VocabularySection />
        <WhoIsParloculaFor />
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
        <NotAnAppSection />
        <VocabularySection />
        <WhoIsParloculaFor />
        {/* <EarlyAccess />
        <QuestionsSection /> */}
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
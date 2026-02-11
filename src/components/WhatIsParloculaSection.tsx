import { H3, H5, Section, SubSection, Text, UL } from "./foundations";

const WhatIsParloculaSection = () => (
    <>
        <Section>
            <H3>What Is Parlocula?</H3>
            <Text>You need to know before you dive in.</Text>
        </Section>
        <Section>
            <div>
                <div className="w-fit mx-auto">
                    <Text ghost className="text-left">Parlocula is</Text>
                    <H3 className="text-left">The Cinematic Planet.</H3>
                </div>
                <Text className="mt-4">It{"'"}s a place where movies and shows stay alive through people, not feeds.</Text>
            </div>
            <div className="mt-20">
                <h5 className="text-center font-semibold">Parlocula is a home for Taleons and Taleonists.</h5>
                <Text ghost>Keep going, we got more.</Text>
            </div>
        </Section>
    </>
)

export default WhatIsParloculaSection;
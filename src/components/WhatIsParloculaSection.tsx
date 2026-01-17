import { H3, H4, Section, UL, SubSection, H5, Text } from "./foundations";

const WhatIsParloculaSection = () => (
    <Section>
        <div>
            <H3>What is Parlocula?</H3>
            <Text ghost>More than a social app. More than a database.</Text>
        </div>
        <div className="mt-6">
            <h5 className="mt-6 text-center font-semibold">Parlocula is a home for Movies and Shows (Cinements).</h5>
            <SubSection>
                <H5>Here, every cinement has:</H5>
                <UL>
                    <li>A living wiki</li>
                    <li>Dedicated discussion threads</li>
                    <li>People who actually care</li>
                </UL>
            </SubSection>
        </div>
        <p className="mt-8 font-semibold text-center">No noise. No trends. No doomscrolling.</p>
    </Section>
)

export default WhatIsParloculaSection;
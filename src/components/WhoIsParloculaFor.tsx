import { H3, Section, SubSection, Text, UL } from "./foundations";

const WhoIsParloculaFor = () => (
    <>
        <Section>
            <H3>Who is Parlocula For?</H3>
            <Text>You already may have figured out but keep going.</Text>
        </Section>
        <Section>
            <H3>Parlocula could be a new planet for:</H3>
            <SubSection>
                <UL className="pl-4 sm:pl-0">
                    <li>The Taleonist who rewinds to watch their favorite scene again.</li>
                    <li>The one who thinks more after the story ends.</li>
                    <li>Friends who want to share a Shelf, not a feed</li>
                    <li>Creators who want their work to live in culture, not timelines</li>
                    <li>Newcomers who just begin to explore the magic.</li>
                </UL>
            </SubSection>
            <Text className="mt-8">You don{"'"}t need to know everything. You just need to care enough to stay.</Text>
        </Section>
    </>
)

export default WhoIsParloculaFor;
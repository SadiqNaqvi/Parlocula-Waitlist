import { H3, H4, Section, SubSection, Text, UL } from "./foundations";

const NotAnAppSection = () => (
    <>
        <Section>
            <H3>
                <p>We don{"'"}t call it</p>
                <p>"Social Media App"</p>
            </H3>
            <Text>You may have noticed and you wanna know why</Text>
        </Section>
        <Section>
            <div className="mx-auto w-fit">
                <Text ghost className="text-left">Parlocula is,</Text>
                <H3>Not a Social Media App</H3>
            </div>
            <SubSection>
                <Text>
                    Social Media is built on feeds. Feeds are built for speed. Speed is built to forget.
                </Text>
                <Text ghost>
                    Parlocula rejects that model entirely.
                </Text>
            </SubSection>
            <div className="flex flex-col sm:flex-row justify-around sm:gap-8">
                <SubSection className="max-w-72">
                    <Text ghost className="text-left">A Social Media App:</Text>
                    <UL>
                        <li>Prioritize feed - You see, You react, You scroll.</li>
                        <li>Algorithm Based - Master Minds control what you see.</li>
                        <li>Noisy - You are just a follower for others.</li>
                        <li>Fake freedom - Go against the system and you{"'"}re blocked.</li>
                    </UL>
                </SubSection>
                <SubSection className="max-w-72">
                    <Text ghost className="text-left">The Cinematic Planet:</Text>
                    <UL>
                        <li>Prioritize Moments - You see a question, discussion or theory, You join the conversation.</li>
                        <li>Meaning Over Metrics - You see what you like.</li>
                        <li>Presence Over Posting - Every word from you matter for people.</li>
                        <li>Allows Critisism - because you deserve the freedom.</li>
                    </UL>
                </SubSection>
            </div>
            <Text className="mt-8">Parlocula isn{"'"}t about scrolling, it{"'"}s about living the moment.</Text>
        </Section>
    </>
)

export default NotAnAppSection;
import { H3, H4, Section, SubSection, Text, UL, } from "./foundations";

const VocabularySection = () => (
    <>
        <Section>
            <H3>Vocabulary</H3>
            <Text>New Planet, New Words</Text>
        </Section>
        <Section>
            <div>
                <H3>Taleons</H3>
                <Text>Not just a one-word for Movies and Shows, Taleons represent the cinema as a living entity.</Text>
            </div>
            <SubSection>
                <UL className="pl-4 sm:pl-0">
                    <li>A Taleon is not just something you watch but also feel and remember.</li>
                    <li>They are living worlds that grow through discussion, collection, and shared presence.</li>
                    <li>On Parlocula, Taleons don{"'"}t fade away with screens, they stay.</li>
                    <li>They connect you with others</li>
                </UL>
            </SubSection>
            <Text className="mt-20">Parlocula turns cinema from something you consume into something you belong to.</Text>
        </Section>
        <Section>
            <div>
                <H3>Taleonist</H3>
                <Text>The people who watch, enjoy and live cinema.</Text>
            </div>
            <SubSection>
                <Text>They don{"'"}t rush through stories. They stay with them.</Text>
                <div>
                    <Text ghost className="text-left">They</Text>
                    <UL className="mx-0 px-4">
                        <li>collect what moves them</li>
                        <li>discuss what matters</li>
                        <li>and shape how Taleons are remembered</li>
                    </UL>
                </div>
            </SubSection>
            <Text className="mt-20">Being a Taleonist isn{"'"}t about expertise. It{"'"}s about care.</Text>
        </Section>
        <Section>
            <div>
                <H3>Shelves</H3>
                <Text>Personal Space for Taleonists.</Text>
            </div>
            <SubSection>
                <Text ghost className="text-left">A Taleonist's shelf is:</Text>
                <UL className="pl-4 sm:pl-0">
                    <li>Their taleon journey</li>
                    <li>Their collection of "Favourite Horrors", "Mind Bending Shows", "Chritmas Movies", etc. </li>
                    <li>A shared gravity between friends.</li>
                    <li>Or just a secret desire.</li>
                </UL>
            </SubSection>
            <Text>Shelves can be private, public, or collaborative.</Text>
            <Text className="mt-20">Every Shelf tells a story about the person who built it.</Text>
        </Section>
        <Section>
            <div>
                <H3>Thread</H3>
                <Text>A home where Taleonists breathe together.</Text>
            </div>
            <SubSection>
                <UL className="pl-4 sm:pl-0">
                    <li>Threads are focused spaces around Taleons, characters, artists, creators, feelings, moments, or entire universes.</li>
                    <li>Here Taleonists: discuss, speculate, question, critisize, roast and share moments together.</li>
                    <li>We believe stories don{"'"}t end on a screen.</li>
                    <li>They continue in conversations, in late-night theories, hidden questions, and in the way a Taleon becomes part of who you are.</li>
                </UL>
            </SubSection>
            <Text className="mt-20">Threads are not noice, they{"'"}re presence.</Text>
        </Section>
    </>
)

export default VocabularySection;
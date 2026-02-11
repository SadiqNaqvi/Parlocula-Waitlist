import { H3, Section, SubSection, Text } from "./foundations";

const WhyParloculaExistsSection = () => (
    <>
        <Section>
            <H3>Why Parlocula Exists?</H3>
            <Text>The idea behind Parlocula.</Text>
        </Section>
        <Section>
            <div className="w-fit mx-auto">
                <Text className="text-left" ghost>It exists because,</Text>
                <H3>Cinema deserves a dedicated place.</H3>
            </div>
            <Text>It was never meant to be consumed and forgotten but to be lived.</Text>
        </Section>
        <Section>
            <H3>
                Cinema has always done more than entertain.
            </H3>
            <Text className="text-sm">
                It has shaped how we feel, how we think, and how we see the world.
                Yet the spaces built around it have reduced it to ratings, reactions, and fleeting posts.
            </Text>

            <div className="mx-auto w-fit mt-12">
                <SubSection className="mx-0">
                    <Text className="text-left" ghost>For Other Platforms:</Text>
                    <Text className="text-left">Cinema is a small part in their feed.</Text>
                </SubSection>
                <SubSection className="mx-0">
                    <Text className="text-left" ghost>For Us:</Text>
                    <Text className="text-left">It is an Art to be admired even after the screen fades to black.</Text>
                </SubSection>
            </div>
            <Text className="mt-20 font-semibold">You deseve time, not timelines. Depth, not distraction. Memory, not disappearance.</Text>
        </Section>
    </>
)

export default WhyParloculaExistsSection;
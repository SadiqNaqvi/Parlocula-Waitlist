import { H3, H4, H5, Section, SubSection, Text, UL } from "./foundations";

const WhyParloculaExistsSection = () => (
    <Section>
        <H3>🧠 Why Parlocula Exists?</H3>
        <H4 className="my-2">Because cinements deserve better conversations.</H4>
        <div>

        </div>
        <SubSection>
            <div className="my-6">
                <H5>Other platforms:</H5>
                <UL skipCenter>
                    <li>Bury discussions under timelines</li>
                    <li>Push virality over substance</li>
                    <li>Fragment communities</li>

                </UL>
            </div>
            <div>
                <H5>Parlocula is built differently:</H5>
                <UL skipCenter>
                    <li>Topic-first, not feed-first</li>
                    <li>Community-driven, not algorithm-driven</li>
                    <li>Depth over dopamine</li>
                </UL>
            </div>
        </SubSection>
        <Text strong>If you have ever paused a movie just to think - Parlocula is for you.</Text>
    </Section>
)

export default WhyParloculaExistsSection;
import { H3, H4, Section, SubSection, Text, UL, } from "./foundations";

const WhatParloculaOffers = () => (
    <Section>
        <H3>🧩 What you can do on Parlocula</H3>
        <SubSection>
            <SubSection skipCenter>
                <H4 skipCenter>📚 Cinements Wiki</H4>
                <Text skipCenter>Every movie and show gets its own dedicated space:</Text>
                <UL skipCenter>
                    <li>Clean, structured cinement pages</li>
                    <li>Core details, cast, and metadata</li>
                    <li>Community-driven discussions</li>
                    <li>Add cinements to your shelves instantly</li>
                </UL>
            </SubSection>
            <SubSection skipCenter>
                <H4 skipCenter>💬 Threads & Discussions</H4>
                <Text skipCenter>Talk about cinements the way you always wanted:</Text>
                <UL skipCenter>
                    <li>Discussions, theories, questions</li>
                    <li>Roasts, breakdowns, interpretations</li>
                    <li>Wallpapers, clips, and frames</li>
                    <li>React, comment, and engage meaningfully</li>
                </UL>
                <Text skipCenter strong>Each cinement, artist, and character has its own space - no context lost.</Text>
            </SubSection>
            <SubSection skipCenter>
                <H4 skipCenter>🗂️ Shelves</H4>
                <Text skipCenter>Curate your cinement journey:</Text>
                <UL skipCenter>
                    <li>“Movies that broke me”</li>
                    <li>“Horror favorites”</li>
                    <li>“Watch with my partner”</li>
                    <li>“All-time comfort films”</li>
                </UL>
                <Text skipCenter strong>Shelves are personal, shareable, and tell your story.</Text>
            </SubSection>
            <SubSection skipCenter>
                <H4 skipCenter>✨ What makes Parlocula different?</H4>
                <UL skipCenter>
                    <li>No engagement farming</li>
                    <li>No algorithm manipulation</li>
                    <li>No irrelevant content</li>
                    <li>Topic-based communities</li>
                    <li>Clean, intentional design</li>
                    <li>Built for discussion, not distraction</li>
                    <li>Privacy-first by default</li>
                </UL>
                <Text skipCenter strong>Parlocula respects both your taste and time.</Text>
            </SubSection>
        </SubSection>
    </Section>
)

export default WhatParloculaOffers;
import { H3, H4, Section, Text, UL } from "./foundations";

const QuestionsSection = () => (
    <Section>
        <H3>Frequently Asked Questions</H3>
        <div className="mx-auto">
            <div className="my-12 w-fit">
                <H4>1. What exactly is Parlocula?</H4>
                <Text>Parlocula is a community-driven social platform built around movies and shows (cinements).</Text>
                <Text>Instead of endless feeds, Parlocula gives each cinement its own space - with discussions, shelves, and people who genuinely care.</Text>
            </div>
            <div className="my-12 w-fit">
                <H4>2. How is Parlocula different from other social platforms?</H4>
                <Text>Those platforms are feed-first and algorithm-driven.</Text>
                <Text strong>Parlocula is topic-first and community-driven.</Text>
                <UL>
                    <li>No virality chasing.</li>
                    <li>No engagement farming.</li>
                    <li>No content buried by timelines.</li>
                </UL>
                <Text strong>Discussions live where they belong - with the cinement.</Text>

            </div>
            <div className="my-12 w-fit">
                <H4>3. Who is Parlocula for?</H4>

                <Text>Parlocula is for people who:</Text>
                <UL>
                    <li>Love movies and shows deeply</li>
                    <li>Enjoy meaningful conversations</li>
                    <li>Create theories, interpretations, or collections</li>
                    <li>Want a calm, focused space instead of noisy social media</li>
                </UL>

                <Text>If you pause movies or shows to think and wants to discuss - you shall fit right in.</Text>
            </div>

            <div className="my-12 w-fit">
                <H4>4. Do I need to be a film expert to join?</H4>

                <Text>
                    Not at all! Whether you're a casual watcher or a hardcore fan, Parlocula is built for curiosity, not expertise.
                </Text>

                <Text strong>Everyone starts somewhere.</Text>
            </div>

            <div className="my-12 w-fit">
                <H4>5. Will my data be safe on Parlocula?</H4>
                <Text>Yes! Parlocula is privacy-first by design:</Text>
                <UL>
                    <li>No selling of data</li>
                    <li>No behavioral tracking</li>
                    <li>No third-party advertising</li>
                </UL>
                <Text strong>Your activity belongs to you.</Text>
            </div>
            <div className="my-12 w-fit">
                <H4>6. Can I delete my account later?</H4>
                <Text>Yes! You can delete your account and associated data at any time.</Text>
            </div>
            <div className="my-12 w-fit">
                <H4>7. Can I help shape Parlocula?</H4>
                <Text>Absolutely! Early members will have a direct voice in:</Text>
                <UL>
                    <li>Feature ideas</li>
                    <li>Platform direction</li>
                    <li>Community norms</li>
                </UL>
                <Text strong>Parlocula is built with its community, not just for it.</Text>
            </div>
            <div className="my-12 w-fit">
                <H4>8. I still have questions. How do I contact you?</H4>
                <Text>
                    <span className="mr-2">You can reach us anytime at:</span>
                    <a className="underline" href="mailto:contact.qcore@gmail.com">contact.qcore@gmail.com</a>
                </Text>
            </div>

        </div>
    </Section>
)

export default QuestionsSection;
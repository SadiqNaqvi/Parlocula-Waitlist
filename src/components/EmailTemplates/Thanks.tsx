import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    pixelBasedPreset,
    Preview,
    Section,
    Tailwind,
    Text
} from '@react-email/components';
import { AppIcon } from '../Icons';

const ThankingEmailTemplate = () => {
    const previewText = `You have been added to the waitlist.`;

    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                }}
            >
                <Body className="mx-auto my-auto bg-white px-2 font-sans">
                    <Preview>{previewText}</Preview>
                    <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
                        <Section className="mt-[32px]">
                            <AppIcon className='size-[40px] mx-auto' />
                        </Section>
                        <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
                            Thank You For Waiting.
                        </Heading>
                        <Text className="text-[14px] text-black leading-[24px]">
                            Hello dear user,
                        </Text>
                        <Text className="text-[14px] text-black leading-[24px]">
                            You have been added to the waiting list for Parlocula. You will be notified when Parlocula is launched. Till then keep sharing it with your friends and anyone who likes to yap. We are going to help the Parlocula Family grow together.
                        </Text>

                        <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            Parlocula or any other applications from QCore Technologies will never ask you to disclose your passwords or any other sensitive information like card number, etc. with us on email. Please never share any sensitive information using email.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ThankingEmailTemplate;
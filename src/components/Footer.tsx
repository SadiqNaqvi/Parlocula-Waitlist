import { H3, Text } from "./foundations";
import { Monogram } from "./Icons";
import WaitListForm from "./WaitListForm";

const FooterMonogram = () => (
    <Monogram className="w-full h-auto text-gray-500 opacity-40" />
)

const WaitListFooter = ({ link }: { link?: string }) => (
    <footer className="px-4">
        <H3>Look who is already hooked up.</H3>
        <Text>What are you waiting for? Dive in and Let the gravity of Parlocula pulls you deep.</Text>

        {link ? (
            <div className="mt-4 w-fit mx-auto">
                <a className="px-4 py-2 w-full max-w-96 bg-secondary color-primary rounded-md" href={link}>Visit Parlocula</a>
            </div>
        ) : (
            <WaitListForm />
        )}

        <div className="mt-10 w-full max-w-3xl mx-auto">
            <FooterMonogram />
            <Text className="mt-2">Built for depth. Designed for memory.</Text>
            <div className="mt-6">
                <Text ghost>All Rights Reserved | QCore Technologies 2021</Text>
                <Text ghost>
                    <span>Contact us at: </span>
                    <a href="mailto:contact.qcore@gmail.com" className="underline inline">contact.qcore@gmail.com</a>
                </Text>
            </div>
        </div>
    </footer>
)

export default WaitListFooter;
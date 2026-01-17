import { H3, Text } from "./foundations";
import { Monogram } from "./Icons";
import WaitListForm from "./WaitListForm";

const FooterMonogram = () => (
    <Monogram className="w-full h-auto text-gray-500 opacity-40" />
)

const WaitListFooter = ({ link }: { link?: string }) => (
    <footer className="px-4">
        <H3>This is only the start of something GRAND.</H3>
        <Text>Join Parlocula and be part of a community where cinements live on.</Text>

        {link ? (
            <div className="mt-4 w-fit mx-auto">
                <a className="px-4 py-2 w-full max-w-96 bg-secondary color-primary rounded-md" href={link}>Visit Parlocula</a>
            </div>
        ) : (
            <WaitListForm />
        )}

        <div className="mt-10 w-full max-w-screen-md mx-auto">
            <FooterMonogram />
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
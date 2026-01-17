import { LogoIcon, Text } from "./foundations";
import WaitListForm from "./WaitListForm";

export const WaitListHeader = () => (
    <header className="px-4">
        <div className="mb-6 mx-auto w-fit">
            <LogoIcon className="size-[50px] mx-auto" />
        </div>

        <h1 className="text-3xl sm:text-5xl px-4  font-semibold text-center">
            <p>Join the waitlist for</p>
            <p>Parlocula.</p>
        </h1>
        <h2 className="mt-2 font-semibold text-center">Where Stories Bring Us Together.</h2>
        <WaitListForm />
        <Text strong>You will be notified when Parlocula is launched at the provided email.</Text>
    </header>
);

export const ReleasedHeader = ({ link }: { link: string }) => (
    <header className="px-4">
        <div className="mb-6 mx-auto w-fit">
            <LogoIcon className="size-[50px] mx-auto" />
        </div>
        <h1 className="text-3xl sm:text-5xl px-4  font-semibold text-center">
            Parlocula is out and rolling!
        </h1>
        <Text>What are you waiting for? Join Parlocula Now</Text>

        <div className="my-6 w-fit mx-auto">
            <a className="px-4 py-2 w-full max-w-96 bg-secondary color-primary rounded-md" href={link}>Visit Parlocula</a>
        </div>
        <Text ghost>First 100 members will get a special badge, always shown on their profile.</Text>
    </header>
)
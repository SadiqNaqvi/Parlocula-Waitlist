"use client";

import { addToWaitList } from "@/lib/actions";
import { useMutation } from "@/lib/hooks";
import { validateNameAndEmail } from "@/lib/utils";
import { useEffect } from "react";
import { toast } from "sonner";
import { Input } from "./foundations";

const WaitListForm = () => {

    const { mutate, pending } = useMutation(addToWaitList);

    const submit = async (d: FormData) => {
        const name = d.get("name") as string | undefined;
        const email = d.get("email") as string | undefined;

        const { success, message } = validateNameAndEmail({ email, name });

        if (!email || !success) {
            toast.error(message || "Oops! Something went wrong. Please check and try again.");
            return;
        }

        toast.promise(
            mutate({ email, name }).then(resp => {
                if (resp && resp.success)
                    return resp.message || "You have successfully added to the list"
                else throw new Error(resp?.message || "Something went wrong! Please check your connection and try again.")

            })
                .catch(e => {
                    console.log("Error occured while adding user to list: " + e.message);
                    return "Oops! Something went wrong! Please try again."
                }),
            {
                success: (d) => d,
                error: (e) => e,
                loading: "Please wait while we are adding you to the list"

            }
        );
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                submit(new FormData(e.currentTarget));
            }}
            className="my-6 space-y-3 max-w-96 mx-auto">
            <Input disabled={pending} name="name" max={25} placeholder="Name (Optional)" />
            <Input disabled={pending} name="email" min={10} placeholder="Email" />
            <button disabled={pending} className="primary bg-secondary color-primary disabled:opacity-50">{pending ? "Loading..." : "Join Waitlist"}</button>
        </form>
    )
}

export default WaitListForm;
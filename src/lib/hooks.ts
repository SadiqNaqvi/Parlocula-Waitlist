"use client";

import { useState } from "react"
import { toast } from "sonner";

export const useMutation = <T, R>(func: (args: T) => Promise<R>) => {

    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");

    const mutate = async (args: T): Promise<R | undefined> => {
        if (pending) {
            toast("Please wait! A request is on its way");
            return;
        }
        setPending(true);
        try {
            return await func(args);
        } catch (err: any) {
            console.log("Error occured while mutation", err.message);
            setError(err.message);
        } finally {
            setPending(false);
        }
    }

    return { pending, error, mutate }
}
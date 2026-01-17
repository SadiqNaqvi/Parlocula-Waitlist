"use server";

import ThankingEmailTemplate from '@/components/EmailTemplates/Thanks';
import { render } from '@react-email/components';
import { Redis } from '@upstash/redis';
import { createTransport } from "nodemailer";
import { validateNameAndEmail } from './utils';
const redis = Redis.fromEnv();

export const checkParloculaLink = async () => {
    return await redis.get<string>("isReleased");
}

export const addToWaitList = async ({ email, name }: { name: string | undefined, email: string }) => {

    const link = await checkParloculaLink()

    if (link) return {
        success: true,
        message: "Parlocula is already out! No need to wait anymore."
    }

    const { success, message } = validateNameAndEmail({ email, name });
    if (!email || !success) return {
        success: false,
        message: message || "Invalid Email! Please try again with a valid email."
    }

    const doesExists = await redis.get(`waitLister:${email}`);
    if (doesExists) return {
        success: true,
        message: "You are already in the waiting list! Thank you for being so patient.",
    }

    const pipeline = redis.multi();
    pipeline.set(`waitLister:${email}`, name || 1);
    pipeline.incr("waitListersCount");
    await pipeline.exec();

    const transportor = createTransport({
        service: "gmail",
        auth: {
            user: process.env.QCORE_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    });

    await transportor.sendMail({
        from: process.env.QCORE_EMAIL,
        to: email,
        subject: "Added to waiting list - Parlocula",
        html: await render(ThankingEmailTemplate()),
    });

    return {
        success: true,
        message: "",
    }
}
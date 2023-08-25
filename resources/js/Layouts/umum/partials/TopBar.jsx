import { EmailSupportLink } from "@/Components/links/EmailSupportLink";
import { FacebookLink } from "@/Components/links/FacebookLink";
import { InstagramLink } from "@/Components/links/InstagramLink";
import { LocationLink } from "@/Components/links/LocationLink";
import { TwiterLink } from "@/Components/links/TwiterLink";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import React from "react";

export const TopBar = () => {
    return (
        <div className="bg-stone-200 py-3">
            <BigMxWrapper>
                <div className="mx-2 flex gap-2 justify-between items-center">
                <div className="flex flex-col gap-1 xl:flex-row xl:gap-5">
                    <LocationLink />
                    <EmailSupportLink />
                </div>
                    <div className="flex flex-col xl:flex-row gap-3 mt-1 items-center">
                        <FacebookLink />
                        <InstagramLink />
                        <TwiterLink />
                    </div>
                </div>
            </BigMxWrapper>
        </div>
    );
};

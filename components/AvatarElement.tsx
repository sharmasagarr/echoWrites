'use client'

import Image from "next/image";
import { useSession } from "next-auth/react";

const AvatarElement = ({width, height}: {width: number, height: number}) => {
    const { data: session } = useSession();

    return (
        <>
            {session?.user.image ? (
                <Image
                    src={session.user.image}
                    alt={session.user?.name ?? "profile picture"}
                    className="rounded-full border-2"
                    width={width}
                    height={height}
                />
            ) : (
                <div 
                    className="flex items-center text-white justify-center bg-amber-500 text-sm rounded-xl font-md border-2"
                    style={{ width: `${width}px`, height: `${height}px` }}
                >
                    {session?.user?.name?.charAt(0).toUpperCase()}
                </div>
            )}
        </>
    );
};

export default AvatarElement;

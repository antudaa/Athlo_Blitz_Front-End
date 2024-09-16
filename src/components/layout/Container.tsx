import { ReactNode } from "react";

export default function Container({
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <section>
            {children}
        </section>
    );
}
import Link from "next/link";
import Image from "@/components/Image";

type TestProps = {
    className?: string;
    dark?: boolean;
};

const Test = ({ className, dark }: TestProps) => (
    <Link className={`flex w-[11.88rem] ${className}`} href="/">
        <Image
            className="w-full h-auto"
            src={dark ? "/images/logo-dark.svg" : "/images/logo.svg"}
            width={190}
            height={40}
            alt="OpenInterpreter"
        />
    </Link>
);

export default Test;

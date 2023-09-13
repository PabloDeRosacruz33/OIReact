import { useState } from "react";
import Message from "@/components/Message";
import Menu from "@/components/Menu";

import { navigation } from "@/constants/navigation";

type MainProps = {};

const Main = ({}: MainProps) => {
    const [message, setMessage] = useState<string>("");

    return (
        <>
            <div className="grow px-10 py-20 overflow-y-auto scroll-smooth scrollbar-none 2xl:py-12 md:px-4 md:pt-0 md:pb-6">
                <div className="mb-10 text-center">
                    <div className="h3 leading-[4rem] 2xl:mb-2 2xl:h4">
                        Open Interpreter
                    </div>
                    <div className="body1 text-n-4 2xl:body1S">
                        Unleashed LLM Local Power
                    </div>
                </div>
                <Menu className="max-w-[30.75rem] mx-auto" items={navigation} />
            </div>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
            />
        </>
    );
};

export default Main;

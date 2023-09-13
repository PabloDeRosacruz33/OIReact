import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Code from "@/components/Code";

import { writeCodeChat } from "@/mocks/writeCodeChat";

const CodeGenerationPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <Layout>
            <Chat title="Create welcome form">
                <Question
                    content="Write code (HTML, CSS and JS) for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons, cancel and send, then run test with my Codepen project."
                    time="Just now"
                />
                <Answer loading />
                <Answer time="Just now">
                    <Code items={writeCodeChat} />
                </Answer>
            </Chat>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
            />
        </Layout>
    );
};

export default CodeGenerationPage;

import Image from "@/components/Image";
import Document from "./Document";

type QuestionProps = {
    content: any;
    image?: string;
    document?: string;
    time: string;
};

const Question = ({ content, image, document, time }: QuestionProps) => (
    <div className="max-w-[50rem] ml-auto">
        <div className="space-y-6 pt-6 px-6 pb-16 border-3 border-n-2 rounded-[1.25rem] md:p-5 md:pb-14 dark:border-transparent dark:bg-n-5/50">
            {document && <Document value={document} />}
            <div className="">{content}</div>
            {image && (
                <div className="relative w-[11.25rem] h-[11.25rem]">
                    <Image
                        className="rounded-xl object-cover"
                        src={image}
                        fill
                        alt="Avatar"
                    />
                </div>
            )}
        </div>
        <div className="-mt-8 flex items-end pr-6">
            <div className="pb-0.5 caption1 text-n-4/50 dark:text-n-4">
                {time}
            </div>
            {/* <button className="ml-3 px-2 py-0.5 bg-n-3 rounded-md caption1 txt-n-6 transition-colors hover:text-primary-1 dark:bg-n-5/50">
                Edit
            </button> */}
            <div className="relative w-16 h-16 ml-auto rounded-2xl overflow-hidden shadow-[0_0_0_0.25rem_#FEFEFE] dark:shadow-[0_0_0_0.25rem_#232627]">
                <Image
                    className="object-cover"
                    src="/images/avatar.jpg"
                    fill
                    alt="Avatar"
                />
            </div>
        </div>
    </div>
);

export default Question;

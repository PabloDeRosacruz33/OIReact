import Link from "next/link";
import Icon from "@/components/Icon";

import { navigation } from "@/constants/navigation";

type ServicesProps = {};

const Services = ({}: ServicesProps) => (
    <div className="">
        <div className="mb-4">
            I’m OpenInterpreter - a versatile and powerful tool for users seeking to
            enhance their experience with ChatGPT. It offers a wide range of
            advanced features to improve functionality and efficiency. With this
            tool, you can expect the following capabilities:
        </div>
        <div className="flex flex-wrap -mt-2 -ml-2">
            {navigation.map((item, index) => (
                <Link
                    className="group flex items-center mt-2 ml-2 p-2 pr-4 border border-n-3 bg-n-1 rounded-full base1 font-semibold transition-shadow hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0_2rem_2rem_-1rem_rgba(0,0,0,0.12)] md:w-full dark:border-n-5/50 dark:bg-n-6 dark:transition-all dark:hover:bg-n-5"
                    href={item.url}
                    key={index}
                >
                    <div className="relative flex justify-center items-center w-10 h-10 mr-3">
                        <div
                            className="absolute inset-0 opacity-20 rounded-full"
                            style={{
                                backgroundColor: item.color,
                            }}
                        ></div>
                        <Icon
                            className="relative z-1"
                            fill={item.color}
                            name={item.icon}
                        />
                    </div>
                    {item.title}
                </Link>
            ))}
        </div>
    </div>
);

export default Services;

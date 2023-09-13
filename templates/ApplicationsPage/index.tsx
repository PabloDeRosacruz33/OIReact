import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Application from "./Application";

import { applications } from "@/mocks/applications";

const ApplicationsPage = () => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    return (
        <Layout hideRightSidebar>
            <div className="p-10 md:pt-5 md:px-6 md:pb-10">
                <button
                    className="hidden absolute top-6 right-6 w-10 h-10 border-2 border-n-4/25 rounded-full text-0 transition-colors hover:border-transparent hover:bg-n-4/25 md:block"
                    onClick={() => router.back()}
                >
                    <Icon className="fill-n-4" name="close" />
                </button>
                <div className="h3 leading-[4rem] md:mb-3 md:h3">
                    Applications
                </div>
                <div className="mb-8 body1 text-n-4 md:mb-6 md:body1S">
                    Browse and install apps to simplify your life with OpenInterpreter
                </div>
                <form
                    className="mb-8"
                    action=""
                    onSubmit={() => console.log("Submit")}
                >
                    <div className="relative">
                        <button
                            className="group absolute top-5 left-5 outline-none"
                            type="submit"
                        >
                            <Icon
                                className="fill-n-4 transition-colors group-hover:fill-n-7"
                                name="search"
                            />
                        </button>
                        <input
                            className="w-full h-16 pl-13 pr-6 bg-n-2 border-2 border-transparent rounded-xl outline-none base1 text-n-7 transition-colors placeholder:text-n-4 focus:border-n-3 focus:bg-transparent dark:bg-n-7 dark:text-n-1 dark:focus:bg-n-6 dark:focus:border-n-7"
                            type="text"
                            name="search"
                            placeholder="Search by app name or category"
                            value={search}
                            onChange={(e: any) => setSearch(e.target.value)}
                        />
                    </div>
                </form>
                <div className="mb-11 h6 text-n-4 md:mb-6">Suggested apps</div>
                <div className="flex flex-wrap -mx-7 -mt-16 2xl:-mx-4 2xl:-mt-12 md:block md:mt-0 md:mx-0">
                    {applications.map((application) => (
                        <Application item={application} key={application.id} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ApplicationsPage;

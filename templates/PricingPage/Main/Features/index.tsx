import Icon from "@/components/Icon";

type FeaturesProps = {
    items: any;
};

const Features = ({ items }: FeaturesProps) => (
    <div className="lg:hidden">
        <div className="flex mb-8 h4">
            <div className="w-[14.875rem] h4">Core features</div>
            <div className="hidden flex-1 px-8 2xl:block">Llama</div>
            <div className="hidden flex-1 px-8 text-[#ffd21e] 2xl:block">
                Hugging Face
            </div>
            <div className="hidden flex-1 px-8 text-[#3edd78] 2xl:block">
                Open AI
            </div>
        </div>
        <div className="">
            {items.map((item: any) => (
                <div
                    className="flex items-center py-5 border-t border-n-4/15"
                    key={item.id}
                >
                    <div className="w-[14.875rem] base2 font-semibold">
                        {item.title}
                    </div>
                    <div className="flex items-center flex-1 px-8">
                        <Icon
                            className={`${
                                item.free ? "fill-primary-1" : "fill-n-4"
                            }`}
                            name={item.free ? "check-thin" : "close"}
                        />
                    </div>
                    <div className="flex items-center flex-1 px-8">
                        <Icon
                            className={`${
                                item.pro ? "fill-primary-1" : "fill-n-4"
                            }`}
                            name={item.pro ? "check-thin" : "close"}
                        />
                        {item.id === "4" && (
                            <div className="ml-3 base2">Via email</div>
                        )}
                    </div>
                    <div className="flex items-center flex-1 px-8">
                        <Icon
                            className={`${
                                item.enterprise ? "fill-primary-1" : "fill-n-4"
                            }`}
                            name={item.enterprise ? "check-thin" : "close"}
                        />
                        {item.id === "4" && (
                            <div className="ml-3 base2">Chat 24/7</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Features;

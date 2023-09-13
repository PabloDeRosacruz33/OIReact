import { useState } from "react";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";

type AddFileProps = {};

const AddFile = ({}: AddFileProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <>
            <button
                className="group absolute left-3 bottom-2 w-10 h-10 outline-none"
                onClick={() => setVisible(true)}
            >
                <Icon
                    className="w-7 h-7 fill-[#7F8689] transition-colors group-hover:fill-primary-1 dark:fill-n-4"
                    name="plus-circle"
                />
            </button>
            <Modal
                classWrap="max-w-[25.2rem] rounded-none bg-transparent"
                classOverlay="bg-n-7/95 dark:bg-n-7/95"
                classButtonClose="hidden"
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <div className="relative p-3 bg-primary-1 rounded-[1.25rem]">
                    <input className="absolute inset-0 opacity-0" type="file" />
                    <div className="px-6 py-14 border-2 border-dashed border-n-1 rounded-xl text-center text-n-1">
                        <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 bg-n-1 rounded-full">
                            <Icon name="upload" />
                        </div>
                        <div className="h5">Upload to OpenInterpreter</div>
                        <div className="base2">
                            You can add prompts after uploading.
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AddFile;

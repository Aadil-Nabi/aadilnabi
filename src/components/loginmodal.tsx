import Input from "@/components/input";
import {ReactNode} from "react";

export default function LoginModal({children}: {children: ReactNode}) {
    return (

        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn"  >Login</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <Input/>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
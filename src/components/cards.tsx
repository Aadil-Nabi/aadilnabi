import React from "react";

export const Cards = ({children}: {children: React.ReactNode})=>{
    return (
        <div className="flex w-full flex-col lg:flex-row">
            <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">{children}</div>
            {/*<div className="divider lg:divider-horizontal">OR</div>*/}
            {/*<div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>*/}
        </div>
    )
}
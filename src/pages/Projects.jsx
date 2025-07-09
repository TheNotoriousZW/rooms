import FeatureIcon from "../icons/FeatureIcon"
export default function Projects(){
    return(
        <div className="flex  mt-6 w-screen h-full absolute top-6 text-stone-500">
        <div className=" border border-stone-200  p-4 ">
            <h1 className="border-b w-full border-stone-200 pb-2 font-bold text-stone-900">PROJECT NAME</h1>

            <div className="flex flex-row">
                <p>Project Leader</p>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-row items-center">
                <p>Project Members(LIST OF MEMBERS)</p>
                <FeatureIcon lable="members" path="/projects">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                   <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                 </svg>
                </FeatureIcon>
                </div>
            </div>

            <div className="flex flex-row">
                <p>Project Description (optional)</p>
            </div>

            <div className="flex flex-row">
                <p>Project Resources (files, links, etc.)</p>
            </div>

            <div className="flex flex-row">
                <p>Project Status(calculted by Actions)</p>
            </div>

            <div className="flex flex-row">
                <p>Project Messages</p>
            </div>
        </div>

        <div className="border w-screen border-stone-200 flex flex-col pt-14 justify-center items-center">
            <div className="flex flex-col border border-stone-200">
                <p>New Feature</p>
            </div>
            <div className="flex flex-col 
                            justify-center 
                            divide-stone-200
                            border-2
                            border-dashed
                            border-stone-200
                            text-center items-center relative border m-auto rounded-md w-1/2 h-1/4">
                <div className="flex flex-row items-center absolute border-b-2 border-stone-200 top-4 text-stone-900 font-bold">
                    Submit Project Information
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center pl-18">
                    <label htmlFor="projectResource" className="text-stone-300 font-bold ">New Resource</label>
                    <FeatureIcon lable="submit" path="/projects">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z" />
                        <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                     </svg>
                    </FeatureIcon>
                    </div>
                    <input type="file" id="projectResource" className="file-input" />
                </div>
                
            </div>
            
        </div>
    </div>
    )
}
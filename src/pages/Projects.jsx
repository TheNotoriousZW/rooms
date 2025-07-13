import FeatureIcon from "../icons/FeatureIcon"
export default function Projects(){
    return(
        <div>
        <div>
            <h1 >PROJECT NAME</h1>

            <div>
                <p>Project Leader</p>
            </div>

            <div>
                <div >
                <p>Project Members(LIST OF MEMBERS)</p>
                <FeatureIcon lable="members" path="/projects">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                   <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                 </svg>
                </FeatureIcon>
                </div>
            </div>

            <div>
                <p>Project Description (optional)</p>
            </div>

            <div >
                <p>Project Resources (files, links, etc.)</p>
            </div>

            <div>
                <p>Project Status(calculted by Actions)</p>
            </div>

            <div>
                <p>Project Messages</p>
            </div>
        </div>

        <div >
            <div >
                <p >New Action</p>
                <div >
                    <p >Create and assign a new action to the project</p>
                </div>
                <button >Create Action</button>
            </div>

            <div >
                 <div >
                     <p>project time tracking</p>
                     <p>calendar kind of object</p>
                 </div>
                 <div >
                    <p>project members activity</p>
                    <p>list of members and their activity</p>
                 </div>
                 <div >
                    <p>blockers</p>
                    <p>list of blockers and raised concerns</p>
                    <p>can be raised by members or by the project leader</p>
                 </div>
            </div>

            <div >
                <div >
                    Submit Project Information
                </div>
                <div>
                    <div >
                    <label htmlFor="projectResource" className="text-stone-300  ">New Resource</label>
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
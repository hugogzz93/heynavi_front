
type ITestimonialBoxProps = {
    src: string;
    title: string;
    body: string;
    starCount: number;
    focused?: boolean;
}

const TestimonialBox = (props: ITestimonialBoxProps) => {
    const starCount = []
    for(let i = 0; i < props.starCount; i++) starCount.push(
                <span key={i} className="material-symbols-outlined filled text-yellow-300"> grade </span>
    )

    for(let i = 0; i < 5 - props.starCount; i++) starCount.push(
                <span key={props.starCount + i} className="material-symbols-outlined text-yellow-300"> grade </span>
    )

    return (
        <div 
        style={{scrollSnapAlign: 'center', boxShadow: '0 10px 35px #888F', fontSize: props.focused ? '18px' : '14px', transform: props.focused ? 'scale(1.15)' : 'scale(1)', zIndex: props.focused ? '1' : '0'}}
        className={` 
            testimonial__box
            flex mx-8 my-8 text-white flex-col rounded-2xl items-center 
            p-4 py-6 text-center bg-purple-500 border border-2 border-white 
            w-96
        `}>
            <div className='flex items-left mb-12'>
                <img style={{width: '3em', height: '3em', borderRadius: '100%'}}src={props.src} alt="" />
                <div className='flex flex-col items-left ml-4'>
                        <div className="text-left text-md font-bold">{props.title}</div>
                        <div>
                            {starCount}
                        </div>
                </div>
            </div>
            <div className="text-md">{props.body}</div>
        </div>
    )
}

export { TestimonialBox };

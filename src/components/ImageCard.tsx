type IImageCardProps = {
    src: string;
    title: string;
    body: string;
}

const ImageCard = (props: IImageCardProps) => (
    <div className="flex flex-col rounded-md items-center p-12 mx-8 text-center my-5" style={{boxShadow: '0 3px 15px #8885'}}>
        <img className='md:w-20 md:h-20' src={props.src} alt="" />
        <div className="text-2xl font-bold mt-3 mb-6">{props.title}</div>
        <div className="text-md">{props.body}</div>
    </div>
)

export { ImageCard };

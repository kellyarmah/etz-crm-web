const PostItem = ({url})=>{
    return (
        <div className='flex border rounded-xl bg-gray-50 w-fit'>
            <div className=''>
                <img src={url} alt="" className='rounded-lg h-20 w-20 object-cover' />
            </div>
            <div className='text-left space-y-1 p-2'>
                <p className='font-medium'>Lorem Ipsum lored vumsid gidraul ghualu...</p>
                <div className='flex justify-between'><span>Oct 1st, 2023</span> <span>10:20 PM</span></div>
            </div>
        </div>
    )
}

export default PostItem;
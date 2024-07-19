import {Divider, Image } from '@chakra-ui/react'
const CommentItem = ({image, fname, username, comment})=>{
    return (
        <div>
                                    <div className='flex my-2 space-x-1'>
                                        <Image
                                            borderRadius='full'
                                            boxSize='45px'
                                            bgSize={'fit'}
                                            bgPosition={'center'}
                                            src= {image}
                                            alt='Dan Abramov'
                                            />
                                        <div className='flex-1'>
                                            <div className='flex justify-between'>
                                                <p><span className='font-bold'>{fname}</span> <span className='text-gray-400'>@{username}</span></p>
                                                <p className='text-gray-400'>1hr</p>
                                            </div>
                                            <div className='text-left'>
                                                <p><span className='text-gray-400'>On</span> <span className='font-bold'>Business Finance..</span></p>
                                                <p className='font-italic mt-3'>{comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider/>
                                </div>
    )
}

export default CommentItem;
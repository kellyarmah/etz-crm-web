
import { Input,InputGroup, InputLeftElement } from '@chakra-ui/react'

export const SearchInput = ({title,onClick})=>{
    return (
        <div>
            <InputGroup >
                <InputLeftElement pointerEvents='none'>
                <span className='text-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
                </InputLeftElement>
                <Input borderColor='gray.500' type='text' placeholder={title} />
            </InputGroup>
        </div>
    )
}


export const SearchInputDark = ({title,onClick})=>{
    return (
        <div>
            <InputGroup >
                <InputLeftElement pointerEvents='none'>
                <span className='text-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
                </InputLeftElement>
                <Input borderColor='gray.500' border={0} color={'white'} bgColor={'#253344'} type='text' placeholder={title} />
            </InputGroup>
        </div>
    )
}

import React, { useState } from 'react'
import { useSearchTours } from '../useSearchTours'
import { ITour } from '@/interfaces'
import Spinner from '@/components/Spinner'
import ButtonLink from '@/components/ButtonLink'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import Button from '@/components/Button'
import { Link } from 'react-router-dom'

export default function SearchTours() {
  const [searchStr, setSearchStr] = useState('')

  const { tours, isLoading } = useSearchTours({ searchStr: searchStr })
  // console.log(tours)
  return (
    <div className="relative flex items-center flex-col">
      <div className='relative w-[40rem] mt-3  flex items-center justify-center'>
        <input className="px-3 py-2 bg-stone-0 mb-6 rounded-full w-full outline-none border-brand-300 focus:border-brand-600 border-[1.5px] text-stone-600 h-10" placeholder="Search tours..." type="text" value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
        <div className=''>
          <Button type='search-1' ><HiMagnifyingGlass className='text-brand-100 text-3xl' /></Button>
        </div>
        {/* <Button type="icon-search" onClick={handleClickSearch}><HiMagnifyingGlass /></Button> */}


        {isLoading && <ul className='absolute top-12 bg-stone-100 w-[99%] text-stone-600 rounded-lg py-2 px-3 flex flex-col gap-1'><Spinner size='small' /></ul>}
        {tours?.length ?
          <ul className='absolute top-12 bg-stone-100 w-[99%] text-stone-600 rounded-lg py-2 px-3 flex flex-col gap-1'>
            {tours?.map((tour: ITour) =>
              <Link to={`/tours/${tour._id}`}>
                <li className='flex gap-2 items-center border-b-[1.5px]'>
                  <img src={tour.imageCover} className='w-16' alt="" />
                  <p>{tour.name}</p>
                </li>
              </Link>)
            }
          </ul> : null
        }
      </div>
    </div>
  )
}

"use client"
import Link from 'next/link'
import React from 'react'
import TPForm from '../form/TPForm'
import TechInput from '../form/TechInput'
import { FieldValues, SubmitHandler } from 'react-hook-form'


const Header = () => {

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
      };
  return (
    <div>
        <div className='flex'>
            <div className="flex-1">
                <Link href="/">Tech Tips</Link>
            </div>
            <div className="flex-auto">
                <div className='flex justify-around'>
                    <Link href="/">For You</Link>
                    <Link href="/following">Following</Link>
                </div>
            </div>
            <div className="flex-1">
                <TPForm onSubmit={onSubmit}>
                <TechInput label="Search" name="search" type="text" />
                </TPForm>
            </div>
        </div>
    </div>
  )
}

export default Header
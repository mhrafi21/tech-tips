"use client"
import React from 'react'
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation';


const BackButton = () => {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    }
  return (
    <div>
        <Button onClick={handleBack}>Back</Button>
    </div>
  )
}

export default BackButton
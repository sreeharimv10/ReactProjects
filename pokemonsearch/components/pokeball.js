import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import pokeball from '../images/pokeball.png'


export default function Pokeball()
{
    return (
        <div>
            <Image alt="pokeball" src={pokeball} height="30" width="30"/>
        </div>
    )
}
import React from "react"
import './style.css'
import HeadingProps from './types'


export const Heading: React.FC<HeadingProps> = ({children, classname}) => {
    return <h1 className={`heading ${classname}`}>{children}</h1>
}


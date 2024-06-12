import  { FC, ReactNode } from 'react'

interface IProps {
    children: string | ReactNode,
    className: string,
    clickHandler?: ()=>void
}

export const MyButton:FC<IProps> = ({children, className, clickHandler}) => {
  return (
    <button className={className} onClick={clickHandler}>{children}</button>
  )
}

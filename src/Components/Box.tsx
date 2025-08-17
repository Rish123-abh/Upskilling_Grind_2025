import type { ReactNode } from "react";

type Proptype={
    heading:string;
    // below will make optional
    count?:number;
    func1:(a:string)=>void;
    children:ReactNode;
}

// There are two ways of accepting porop and defining its type  


// const Box = ({count,heading}:{heading:string,count:number}) => {
const Box = ({count=23,heading,func1,children}:Proptype) => {
  func1("Hello");
    return (
    <>
    <div>{heading}</div>
    <div>{count}</div>
    {children}
    </>
  )
}

export default Box
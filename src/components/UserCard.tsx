// we are getting a prop called as type and u are immediately destructuring the type prop and specifying it must be a string. If u are using typescript its mandatory

import Image from "next/image"
const UserCard = ({type}:{type:string}) => {
  return (
    <div className=" rounded-lg odd:bg-sparkPurple even:bg-sparkYellow p-4 flex-1">

        <div className=" flex justify-between items-center">

            <span className=" text-[10px] bg-sparkYellowLight px-2 py-1 rounded-full text-sparkGreen600"> 2025/26</span>
            <Image src="/more.png" alt="" width={20} height={20}/>

        </div>

        <h1 className="text-2xl font-semibold my-4">1,234</h1>
        <h2 className=" capitalize text-sm font-medium text-sparkGray500 ">{type}</h2>
    </div>
  )
}

export default UserCard
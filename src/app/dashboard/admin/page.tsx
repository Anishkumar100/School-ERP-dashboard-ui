import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className=" p-4 flex gap-4 flex-col md:flex-row">
      
      {/*Left side of the Right part of the layout in Admin POV  */}
      <div className=" w-full lg:w-2/3 flex flex-col gap-8">

      {/*USER CARDS */}

      <div className=" flex gap-4 justify-between flex-wrap">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
        
      </div>

      {/*Middle Charts */}

      <div className=" flex gap-4 flex-col lg:flex-row">
        {/*Count Chart */}
        <div className="w-full lg:w-1/3 h-[450px]">
        <CountChart/>
        
        </div>

        {/*Attendance Chart */}
        <div className=" w-full lg:w-2/3 h-[450px]">
        <AttendanceChart/>

        </div>
      </div>

      {/*Bottom Charts */}

      <div className="">

      </div>

      </div>

      {/*Right side of the Right part of the layout Admin POV */}

      <div className=" w-full lg:w-1/3">
      r

      </div>
    </div>
  )
}

export default AdminPage
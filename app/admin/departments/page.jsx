import { getDepartment } from './api/department'

export default async function Page() {
  const departments = await getDepartment()

  return (
    <div className="flex flex-col items-center">
      {departments.map((department) => (
        <div
          key={department.id}
          className="my-2 min-w-[50%] max-w-sm rounded bg-blue-700 p-4 text-center"
        >
          <p className="text-2xl font-bold text-white">{department.dep_name}</p>
        </div>
      ))}
    </div>
  )
}

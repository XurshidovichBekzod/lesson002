import { User } from "@/type/User"

interface Props {
  users: User[]
  onEdit: (user: User) => void
  onDelete: (id: string) => void
}

export default function UserView({ users, onEdit, onDelete }: Props) {
  return (
    <div className="flex w-[300px] gap-3">
      {users.map((user) => (
        <div key={user.id} className="bg-[#e7e7e7] p-2 rounded">
          <div className="mb-[10px]">
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Region: {user.region}</p>
            <p>Gender: {user.gender}</p>
          </div>
          <div className="flex h-[30px] w-[300px] gap-2">
            <button 
              onClick={() => onEdit(user)}
              className="bg-[gray] text-white px-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="bg-[gray] text-white px-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

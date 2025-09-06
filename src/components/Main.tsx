"use client"
import { useEffect, useState } from "react"
import Form from "./Form"
import UserView from "./UserViwe"
import { User, UserForm } from "@/type/User"

const API_URL = "https://68bb05de84055bce63f0ef06.mockapi.io/api/user"

export default function Main() {
  const [users, setUsers] = useState<User[]>([])
  const [editUser, setEditUser] = useState<User | null>(null)

  const getUsers = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleSubmit = (data: UserForm) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => getUsers())
      .finally(() => setEditUser(null))
  }

  const handleDelete = (id: string) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => getUsers())
      .catch((err) => console.error("Error deleting user:", err))
  }

  return (
    <div className="p-4 gap-8">
      <Form onSubmitData={handleSubmit} editUser={editUser} />
      <UserView users={users} onEdit={setEditUser} onDelete={handleDelete} />
    </div>
  )
}

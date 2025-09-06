import { FC, useEffect, useState } from "react"
import { User, UserForm } from "@/type/User"

type FormProps = {
  onSubmitData: (data: UserForm, id?: string) => void
  editUser: User | null
}

const Form: FC<FormProps> = ({ onSubmitData, editUser }) => {
  const [formData, setFormData] = useState<UserForm>({
    first_name: "",
    last_name: "",
    region: "",
    gender: "",
  })

  useEffect(() => {
    if (editUser) {
      const { id, ...rest } = editUser
      setFormData(rest)
    } else {
      setFormData({ first_name: "", last_name: "", region: "", gender: "" })
    }
  }, [editUser])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmitData(formData, editUser?.id)
    setFormData({ first_name: "", last_name: "", region: "", gender: "" })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-[10px] rounded-[3px] w-[300px] mx-auto mt-[100px] mb-[100px] bg-[#e7e7e7] gap-2"
    >
      <input
        className="border pl-[5px] rounded-[3px] bg-[#fff]"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="First name"
      />
      <input
        className="border pl-[5px] rounded-[3px] bg-[#fff]"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Last name"
      />
      <input
        className="border pl-[5px] rounded-[3px] bg-[#fff]"
        name="region"
        value={formData.region}
        onChange={handleChange}
        placeholder="Region"
      />
      <input
        className="border pl-[5px] rounded-[3px] bg-[#fff]"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        placeholder="Gender"
      />
      <button type="submit" className="bg-[gray] text-white px-3 py-1 rounded">
        {editUser ? "Update" : "Add"}
      </button>
    </form>
  )
}

export default Form


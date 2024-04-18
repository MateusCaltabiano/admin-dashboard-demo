export default async function AddUserPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Add User</h1>
      </div>
      <div>
        <form id="new-user-form">
          <div className="flex flex-col size-80 space-y-2">
            <label htmlFor="name">Name</label>
            <input
              className="border border-black rounded-md"
              type="text"
              id="name"
            ></input>
            <label htmlFor="email">Email</label>
            <input
              className="border border-black rounded-md"
              type="text"
              id="email"
            ></input>
            <label htmlFor="username">Username</label>
            <input
              className="border border-black rounded-md"
              type="text"
              id="username"
            ></input>
            <input
              className="border border-black rounded-lg w-20"
              type="submit"
              value="Add"
            ></input>
          </div>
        </form>
      </div>
    </main>
  );
}

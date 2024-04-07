import React from 'react'

const Details = ({data}) => {
  return (
    <div className="ml-14 mr-24 h-[70%] rounded-lg pt-8 w-auto flex justify-center flex-wrap  bg-slate-100  overflow-y-auto px-4">
        <div className="w-[25rem] h-auto ">
          <div>
            <p className="font-bold">Name</p>
            <span className="font-semibold">
              -{data.profile.firstName}
            </span>{" "}
            <span className="font-semibold">{data.profile.lastName}</span>
          </div>
          <hr />
          <div>
            <p className="font-bold">Username</p>
            <p className="mb-0 font-semibold">-{data.profile.username}</p>
          </div>
          <hr />
          <div>
            <p className="font-bold">Email</p>
            <p className="mb-0 font-semibold">-{data.profile.email}</p>
          </div>
          <hr />
        </div>
        <hr />
        <div className="w-[25rem]  h-auto">
          <div>
            <p className="font-bold">Job</p>
            <p className="mb-0 font-semibold">-{data.jobTitle}</p>
          </div>
          <hr />
          <div>
            <p className="font-bold">Bio</p>
            <p className="mb-0 font-semibold">-{data.Bio}</p>
          </div>
          <hr />
          <div>
            <p className="font-bold">Created At</p>
            <p className="mb-0 font-semibold">-{data.createdAt}</p>
          </div>
          <hr />
        </div>
      </div>
  )
}

export default Details
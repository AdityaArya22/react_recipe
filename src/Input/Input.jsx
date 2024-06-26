import React from 'react'
import {RecipieContext} from '../Components/contexts/index'
export function Input() {
  return (
    <div className="w-full md:w-1/3">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        // on={}
        placeholder="Enter your name"
        id="name"
      ></input>
      <p className="mt-1 text-xs text-gray-500">*This field is required</p>
    </div>
  )
}

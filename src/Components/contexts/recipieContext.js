import {useContext, createContext} from 'react'

export const RecipieContext = createContext({
    recipes:[
        {
            id:1,
            name:"name",
            bookmarked:false,
        }
    ],
    fetchApi: (search)=>{},
    bookmarkRecipie:(id) =>{}

})
export const RecipieProvider = RecipieContext.Provider

export default function useRecipe(){
    return useContext(RecipieContext)
}
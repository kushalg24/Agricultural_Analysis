import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import { lastIndexOf } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
export function useConnector(query){
    const [result,setResult]=useState([])
    const [isError,SetisError]=useState({error:false,message:""})
    const refetch=useRef(false)
    console.log(result,"queryrefreshed")
    useEffect(()=>{
        async function  post(){
            try{
            const results= await axios.post("https://express-2273.onrender.com/query",{
                "query":query
                    
            })
            setResult(results.data)
            SetisError({error:false,message:""})
            refetch.current=true
        }
            catch(err){
                console.error(err,"BABAI")
                setResult([])
                SetisError({error:true,message:err?.response?.data?.error})
            }
        }
        post()
       
        
    },[query])
    const getData=useCallback((start,end)=>{
        console.log("result",result)
        // const result1=result.slice()
        // result1.slice(start,start+end)
       
        let result2=[...result]
    //    for(let i=start;i<start+end;i++){
    //      result2.push(result[i])
    //    }
       console.log(result,result2.slice(start,start+end),start,start+end,data,"happymen")
        // let result1 =[...result]
        if(result<lastIndexOf(result)<=start+end){
            return {data:result2.slice(start,lastIndexOf(result)),meta:{
                totalRowCount: result2.length
                }}}
        
        return {data:result2.slice(start,start+end),meta:{
        totalRowCount: result2.length
        }}
        },[result])
        const { data, fetchNextPage, isFetching, isLoading } =
        useInfiniteQuery({
            queryKey: [
              'people',
               query,
             refetch.current
              //refetch when sorting changes
            ],
            queryFn: async ({ pageParam = 0 }) => {
              const start = (pageParam) * 5
              const fetchedData =  getData(start, 5) //pretend api call
              console.log(fetchedData,"happy")
              return fetchedData
            },
            initialPageParam: 0,
            getNextPageParam:  (_lastGroup, groups) => groups.length,
            refetchOnWindowFocus: false,
            placeholderData: keepPreviousData,
          })
          console.log(data,"flatdatafather")
        return {data, fetchNextPage, isFetching, isLoading,isError }
        
}

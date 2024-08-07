import React from 'react'
//3 TanStack Libraries!!!
import "./Dataview.css"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { useVirtualizer } from '@tanstack/react-virtual'

// import { fetchData, Person, PersonApiResponse } from './makeData'
import {  useConnector } from './utils.js/connector'
import { useLocation } from 'react-router-dom'

const fetchSize = 10
export function Dataview() {
  //we need a reference to the scrolling element for logic down below
  const location =useLocation()

  const tableContainerRef = React.useRef(null)
  const { data, fetchNextPage, isFetching, isLoading,isError } =useConnector(location?.state?.["query"]||"SELECT * FROM employee")
 
  console.log(location.state,isError,data,"mehfil")
 

  //react-query has a useInfiniteQuery hook that is perfect for this use case

  //flatten the array of arrays from the useInfiniteQuery hook
  const flatData = React.useMemo(
    () => data?.pages?.flatMap(page => page.data) ?? [],
    [data]
  )
  console.log(data,flatData,"flatdata")
  const columns = React.useMemo(
    () => Object.keys(flatData?.[0]||{})?.map(e=>({accessorKey:e,header:e, cell: info => info.getValue(),}))
    ,
    [data]
  )
  console.log(columns,"freetable")
  const totalDBRowCount = data?.pages?.[0]?.meta?.totalRowCount ?? 0
  const totalFetched = flatData.length

  //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement) => {
     
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        //once the user has scrolled within 500px of the bottom of the table, fetch more data if we can
        console.log(scrollHeight,scrollTop,clientHeight,"emotion")
        if (
          scrollHeight - scrollTop - clientHeight < 5 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
    
          fetchNextPage()
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  )

  //a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
//   React.useEffect(() => {
//     fetchMoreOnBottomReached(tableContainerRef.current)
//   }, [])

  const table = useReactTable({
    data: flatData,
    columns,
   
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  })

  //scroll to top of table when sorting changes
  

  //since this table option is derived from table row model state, we're using the table.setOptions utility

  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 33, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  })

  if (isLoading) {
    return <>Loading...</>
  }
  if(isError.error){
   return  <div>
      {JSON.stringify(isError.message)}
    </div>
  }

  return (
    <div className="datacomponent" style={{height:"100%"}}>
      
      ({flatData.length} of {totalDBRowCount} rows fetched)
      <div
        className="dataviewcontainer"
        onScroll={e => fetchMoreOnBottomReached(e.target)}
        ref={tableContainerRef}
        style={{
          overflow: 'auto', //our scrollable table container
          position: 'relative', //needed for sticky header
          height: '100%', //should be a fixed height
        }}
      >
        {/* Even though we're still using sematic table tags, we must use CSS grid and flexbox for dynamic row heights */}
        <table style={{ display: 'grid' }}>
          <thead
            style={{
              display: 'grid',
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}
          >
            {table.getHeaderGroups().map(headerGroup => (
              <tr
                key={headerGroup.id}
                style={{ display: 'flex', width: '100%' }}
              >
                {headerGroup.headers.map(header => {
                  return (
                    <th
                      key={header.id}
                      style={{
                        display: 'flex',
                        width: header.getSize(),
                      }}
                    >
                       {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      <div
                      
                        {...{
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${
                            header.column.getIsResizing() ? 'isResizing' : ''
                          }`,
                            style: {
                              transform:
                             true&&
                                header.column.getIsResizing()
                                  ? `translateX(${
                                      (false
                                        ? -1
                                        : 1) *
                                      (table.getState().columnSizingInfo
                                        .deltaOffset ?? 0)
                                    }px)`
                                  : '',
                            }
                        
                        }}
                      >
                       
                     
                      </div>
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody
            style={{
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
              position: 'relative', //needed for absolute positioning of rows
            }}
          >
            {rowVirtualizer.getVirtualItems().map(virtualRow => {
              const row = rows[virtualRow.index]
              return (
                <tr
                  data-index={virtualRow.index} //needed for dynamic row height measurement
                  ref={node => rowVirtualizer.measureElement(node)} //measure dynamic row height
                  key={row.id}
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`, //this should always be a `style` as it changes on scroll
                    width: '100%',
                  }}
                >
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td
                        key={cell.id}
                        style={{
                          display: 'flex',
                          width: cell.column.getSize(),
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {isFetching && <div>Fetching More...</div>}
    </div>
  )
}


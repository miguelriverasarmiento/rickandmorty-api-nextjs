import {NextRouter} from 'next/router'
import {useCallback} from 'react'

interface PaginationProps {
    next: number | null
    prev: number | null
    router: NextRouter
    count: number
    pages: number
    pathname: string
  }

  const Pagination: React.FC<PaginationProps> = ({count, next, pages, prev, router, pathname}) => {
    const {query} = router
  
    const handleNext = useCallback(() => {
        if (!next) {
            return
      }
  
      router.push({pathname: pathname, query: {...query, page: next}})
    }, [next, pathname, query, router])
  
    const handlePrev = useCallback(() => {
        if (!prev) {
            return
      }
  
      router.push({pathname: pathname, query: {...query, page: prev}})
    }, [prev, pathname, query, router])
  
    return (
        <div>
            <div>{`Showing ${count} results`}</div>
            <div>{`Page ${query.page || 1} out of ${pages}`}</div>
    
            <div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
  }

  export default Pagination

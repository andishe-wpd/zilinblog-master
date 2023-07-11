import React, { useState, useEffect, useCallback } from 'react'
import Button from '@components/button/Button'
import ArrowIcon from '@assets/icons/ArrowIcon'
import { useNavigate } from 'react-router-dom'
import { PaginationProps } from '@interfaces/PropTypes'

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const [pages, setPages] = useState<number[]>([])
  const navigate = useNavigate()

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Update page numbers when totalPages or currentPage changes
  useEffect(() => {
    const tempPages: number[] =
      totalPages <= 10
        ? Array.from({ length: totalPages }, (_, i) => i + 1)
        : (() => {
            const startPage = Math.max(2, currentPage - 2)
            const endPage = Math.min(totalPages - 1, currentPage + 2)
            const arr = Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i,
            )
            if (startPage > 3) arr.unshift(-1)
            if (endPage < totalPages - 2) arr.push(-1)
            arr.unshift(1)
            arr.push(totalPages)
            return arr
          })()
    setPages(tempPages)
  }, [totalPages, currentPage])

  // useCallback for memoization of handlers
  const onPrevPage = useCallback(() => {
    onPageChange(Math.max(1, currentPage - 1))
  }, [currentPage, onPageChange])

  const onNextPage = useCallback(() => {
    onPageChange(Math.min(totalPages, currentPage + 1))
  }, [totalPages, currentPage, onPageChange])

  const navigatePage = (page: number) => {
    navigate('/' + page)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="flex-wrap-between-center">
      <Button
        title="Previous"
        className="text-secondary"
        onClickAction={onPrevPage}
        disabled={currentPage === 1}
        icon={<ArrowIcon />}
      />
      <div>
        {pages.map((page, idx) =>
          page === -1 ? (
            <span key={idx} className="mx-2">
              ...
            </span>
          ) : (
            <Button
              title={page}
              key={idx}
              onClickAction={() => navigatePage(page)}
              className={` mx-1 text-secondary ${
                currentPage === page ? 'bg-grey' : null
              }`}
            />
          ),
        )}
      </div>

      <Button
        title="Next"
        onClickAction={onNextPage}
        disabled={currentPage === (pages.length || 10)}
        className="flex-row-reverse text-secondary"
        icon={<ArrowIcon className="trasform rotate-180" />}
      />
    </div>
  )
}

export default Pagination

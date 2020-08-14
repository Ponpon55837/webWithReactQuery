import React from 'react'
import { Pagination } from 'react-bootstrap'
import { paginationStyle } from '../style'

const PageCount = ({ page, setPage }) => {
  const arrs = [1, 2, 3, 4, 5, 6]

  return (
    <Pagination>
      {arrs.map(arr => (
        <Pagination.Item key={arr} title={`第1頁`} onClick={() => setPage(arr)}>{arr}</Pagination.Item>
      ))}
    </Pagination>
  )
}

export default PageCount

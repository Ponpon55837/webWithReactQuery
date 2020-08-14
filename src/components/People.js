import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Spinner } from 'react-bootstrap'
import Person from '../pageComponents/Person'
import PageCount from '../components/PageCount'

const fetchPeople = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}&people=1`)
  return res.json()
}

const People = () => {
  const [page, setPage] = useState(1)
  const { data, status } = useQuery(['people', page], fetchPeople)
  console.log(data)

  return (
    <div>
      <h2>People</h2>
      <PageCount page={page} setPage={setPage} />
      { // 如果還在loading，顯示loading的畫面
        status === 'loading' && (
        <Spinner size='lg' animation="border" />
      )}

      { //如果出錯，直接報錯
        status === 'error' && (
        <div>Error fetching data</div>
      )}

      { //如果成功，顯示內容
        status === 'success' && (
        <div>
          {data.results.map(person => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
      <PageCount page={page} setPage={setPage} />
    </div>
  )
}

export default People

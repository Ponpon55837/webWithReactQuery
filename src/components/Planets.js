import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Spinner } from 'react-bootstrap'
import Planet from '../pageComponents/Planet'
import PageCount from '../components/PageCount'

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
  return res.json()
}

const Planets = () => {
  const [page, setPage] = useState(1)
  const { data, status } = useQuery(['planets', page], fetchPlanets)
  console.log(data)

  return (
    <div>
      <h2>Planets</h2>
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
          {data.results.map(planet => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
      <PageCount page={page} setPage={setPage} />
    </div>
  )
}

export default Planets

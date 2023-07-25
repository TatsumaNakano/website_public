// 'use client'
import { GetStaticProps } from 'next';
import { GET_WORK_POSTS_LIST } from '@/graphql/queries';
import GridSystem from '../components/grid/page';
import client from "../lib/apolloClient"

export default async () => {

  const res = await client.query({
    query: GET_WORK_POSTS_LIST
  })

  return (
    <GridSystem columns={3} data={res.data} path="" />
  )
}


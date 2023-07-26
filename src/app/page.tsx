// 'use client'
import { GetStaticProps } from 'next';
import { GET_WORK_POSTS_LIST, fetchGQL } from '@/graphql/queries';
import GridSystem from '../components/grid/page';

export default async () => {

  const res = await fetchGQL(GET_WORK_POSTS_LIST)

  return (
    <GridSystem columns={3} data={res.data} path="" />
  )
}


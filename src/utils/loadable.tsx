import { FullLoading } from '@/pages/others'
import { lazy, Suspense } from 'react'

function loadable(importFunc: any) {
  const LazyComponent = lazy(importFunc)

  return (props: any) => (
    <Suspense fallback={<FullLoading />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default loadable

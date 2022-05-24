import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function useRoutingInfo() {
  const router = useRouter()

  const [route, setRouteInfo] = useState({
    isLoading: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouteInfo((prevState) => ({
        ...prevState,
        isLoading: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setRouteInfo((prevState) => ({
        ...prevState,
        isLoading: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  return route
}

export default useRoutingInfo

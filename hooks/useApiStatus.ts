'use client'

import { useEffect, useState } from 'react'

interface ApiInfo {
  id: string
  name: string
  url: string
}

interface ApiStatus extends ApiInfo {
  status: 'loading' | 'up' | 'down'
  description: string
}

const apiList: ApiInfo[] = [
  { id: "1", name: "Word Length API", url: "https://wrd-len.onrender.com/status" },
  { id: "2", name: "VADER API", url: "https://vader-edft.onrender.com/status" },
  { id: "3", name: "Important Words API", url: "https://imp-words.onrender.com/status" },

  { id: "4", name: "Model API 1", url: "https://modelapi-dt3c.onrender.com/status" },

  { id: "5", name: "Model API 2", url: "https://modelapi2.onrender.com/status" },
  { id: "6", name: "Model Api For Text", url: "https://modeltext.onrender.com/status"},
]

export function useApiStatus(): ApiStatus[] {
  const [apiStatuses, setApiStatuses] = useState<ApiStatus[]>(
    apiList.map(api => ({
      ...api,
      status: 'loading',
      description: 'Checking API status...'
    }))
  );

  useEffect(() => {
    const checkApiStatus = async (api: ApiInfo): Promise<ApiStatus> => {
      try {
        const response = await fetch(api.url)
        const data = await response.json()
        return {
          ...api,
          status: data.status === 'ok' ? 'up' : 'down',
          description: data.status === 'ok' ? 'API is up and running' : 'API is not responding correctly'
        }
      } catch (error) {
        return { ...api, status: 'down', description: 'API is not running' }
      }
    }

    const fetchAllApiStatuses = async () => {
      const statuses = await Promise.all(apiList.map(checkApiStatus))
      setApiStatuses(statuses)
    }

    fetchAllApiStatuses()
  }, [])

  return apiStatuses
}

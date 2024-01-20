'use server'

import { isEmpty, } from '@/utils/helpers'

interface SaveLastRunResponse {
  success?: string;
  error?: string;
}

export const saveLastRun = async (steamId: string, steamKey: string): Promise<SaveLastRunResponse> => {
  try {
    if (isEmpty(steamId) || isEmpty(steamKey)) return { error: 'Steam ID or Steam Key is empty', }

    const response = await fetch(`${process.env.NEXT_PUBLIC_GCLOUD_URL}/api/save-last-run?steamId=${steamId}&key=${steamKey}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${process.env.AUTHORIZATION_TOKEN}`,
      },
      cache: 'no-cache',
    })

    if (response.ok) {
      return {
        success: 'Your run has been saved!',
      }
    }

    return { error: 'Invalid ID or Key', }
  } catch (error) {
    return { error: 'Something went wrong', }
  }
}
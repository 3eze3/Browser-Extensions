import { ENTRY_POINT_DATA } from '../constant/ENTRY_JSON.mjs'
import { Extencion } from '../type/extencions-types.mjs'

export async function getData(): Promise<Extencion[]> {
	try {
		const response = await fetch(ENTRY_POINT_DATA)
		if (!response.ok) return []
		const data: Extencion[] = await response.json()
		return data
	} catch (error) {
		console.log(error + 'al momento de procesar la informacion...')
		return []
	}
}

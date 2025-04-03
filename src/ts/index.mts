import { renderExtencions } from './component/reder-extencion.mjs'
import { filterExtencions } from './dom-interaction/extencions-actions.mjs'
import { removeCards } from './dom-interaction/remove.mjs'
import { switchTheme } from './dom-interaction/theme-extencions.mjs'

class Main {
	public static main() {
		document.addEventListener('DOMContentLoaded', async () => {
			await renderExtencions()
			filterExtencions()
			switchTheme()
			removeCards()
		})
	}
}
Main.main()

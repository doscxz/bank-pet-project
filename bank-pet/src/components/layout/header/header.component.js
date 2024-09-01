import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './header.module.scss'
import template from './header.template.html'
import { Logo } from './logo/logo.component'
import { LogoutButton } from './logout-button/logout-button.component'
import { UserItem } from '@/components/ui/user-item/user-item.component'
import { Search } from './search/search.component'
import { NotificationService, Show } from '@/core/services/notification.service'

export class Header extends ChildComponent {
	constructor({router}){
		super()
		this.router = router
	}
	render() {
		this.element = renderService.htmlToElement(template, 
			[
				Logo,
				new LogoutButton({
					router: this.router
				}),
				Search,
				new UserItem({
					avatarPath: 'https://i.pinimg.com/564x/01/00/f0/0100f0464e947a3c54219f11c12ecfc2.jpg',
					name: 'Luba'
				}),
			], 
			styles)

		return this.element
	}
}

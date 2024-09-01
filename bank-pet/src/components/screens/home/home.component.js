import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'

import { Field } from '@/components/ui/field/field.component'

import styles from './home.module.scss'
import template from './home.template.html'
import { UserItem } from '@/components/ui/user-item/user-item.component'


export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [],styles)
		return element 
	}
}

import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './auth.module.scss'
import template from './auth.template.html'
import { BaseScreen } from '@/core/component/base-screen.component';
import { getTitle } from '@/config/seo.config';
import { Heading } from '@/components/ui/heading/heading.component';

export class Auth extends BaseScreen {
	constructor(){
		super({title: 'auth'})
	}

	render() {
		this.element = renderService.htmlToElement(template, [new Heading('Auth')], styles);
		
		return this.element
	}
}

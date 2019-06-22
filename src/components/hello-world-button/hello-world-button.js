/*
* @Author: Joe Meers Jankowski
* @Date:   2019-06-22 09:59:31
* @Last Modified by:   Joe Meers Jankowski
* @Last Modified time: 2019-06-22 12:27:23
*/

import './hello-world-button.scss';

class HelloWorldButton {
	buttonCssClass   = 'hello-world-button';
	render() {
		const button = document.createElement('button');
		const body   = document.querySelector('body');
		button.innerHTML = 'Hello World';
		
		button.onclick = function(){
			const p = document.createElement('p');
			p.innerHTML = 'Hello world';
			p.classList.add('hello-world-text');
			body.appendChild(p);
		}
		button.classList.add(this.buttonCssClass);
		body.appendChild(button);
	}
}

export default HelloWorldButton;
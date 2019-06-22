/*
* @Author: Joe Meers Jankowski
* @Date:   2019-06-22 10:29:22
* @Last Modified by:   Joe Meers Jankowski
* @Last Modified time: 2019-06-22 10:31:06
*/
import Mountain from './mountain.jpg';

function addImage() {
	const img = document.createElement('img');
	img.alt   = 'Mountain';
	img.width =  300;
	img.src   =  Mountain;

	const body = document.querySelector('body');
	body.appendChild(img);
}

export default addImage;
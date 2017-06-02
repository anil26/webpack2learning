import big1 from '../assets/testbig1.jpg';
import big2 from '../assets/testbig2.jpg';
import big3 from '../assets/testbig3.jpg';
import small1  from '../assets/testsmall1.jpg';
import small2 from '../assets/testsmall2.jpg';
import small3 from '../assets/testsmall3.jpg';
import '../styles/image_viewer.css';
export default ()=>{
	const image = document.createElement('img');
image.src=small1;
document.body.appendChild(image);
}




import Card from './Card'
import one from '../assets/img/img1.jpg'
import two from '../assets/img/img2.jpg'
import three from '../assets/img/img3.jpg'
import four from '../assets/img/img4.jpg'
function Allcards(){
    return(
<div className="text-align-center" style={{display: "inline-flex"}}>
    <Card img={one}/>    
    <Card img={two}/>    
    <Card img={three}/>    
    <Card img={four}/>    
</div>
    )
}

export default Allcards;
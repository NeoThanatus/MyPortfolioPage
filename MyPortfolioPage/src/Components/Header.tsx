import Foto1 from '../Assets/Foto1.jpg'
import '../index.css'

function Header(){
    return(
        <div >
            <img className="rounded-image" src={Foto1} alt="" height={120}/>
        </div>
    )
}

export default Header   
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'


const Logo = () => {
  

    return (
      <>
        {/* <div className="logo-container stage-cube-cont">
            <img src={LogoS} alt="H" className="solid-logo" />
        </div> */}
        

        <div className="logo-section">
        <div className=" logo-container ">
                <div className="cubespinner">
                    <div className="face1">
                    <img src={LogoS} alt="H" className="solid-logo" style={{height:"200px"}} />
                    </div>
                    <div className="face2">
                    <img src={LogoS} alt="H" className="solid-logo" style={{height:"200px"}} />
                    </div>
                    <div className="face3">
                    <img src={LogoS} alt="H" className="solid-logo" style={{height:"200px"}} />
                    </div>
                    <div className="face4">
                    <img src={LogoS} alt="H" className="solid-logo" style={{height:"200px"}} />
                    </div>
                    <div className="face5">
                    <img src={LogoS} alt="H" className="solid-logo" style={{height:"200px"}} />
                    </div>
                    <div className="face6">
                    <img src={LogoS} alt="H" className="solid-logo" style={{height:"200px"}} />
                    </div>
                </div>
            </div>
        </div>
        
      </>

        
    )
}


export default Logo
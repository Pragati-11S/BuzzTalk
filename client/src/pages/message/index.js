import React from 'react'
import LeftSide from '../../components/message/LeftSide'
import Buzztalk from '../../images/Buzztalk.png'


const Message = () => {
    return (
        <div className="message d-flex">
            <div className="col-md-4 border-right px-0">
                <LeftSide />
            </div>

            <div className="col-md-8 px-0 right_mess">
                <div className="d-flex justify-content-center 
                align-items-center flex-column h-100">
                     <img className="Buzztalk"  style={{width: "300px" , height:"150px" 
                    }} src={Buzztalk} alt="Buzztalk"  />
                    <h4>Messenger</h4>

                </div>
            </div>
        </div>
    )
}

export default Message

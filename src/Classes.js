import React from 'react'
import { Link } from 'react-router-dom'
var clsarr = ["class01", "class02", "class03", "class04", "class05", "class06", "class07", "class08", "class09", "class10",
    "class11", "class12", "class13", "class14", "class15", "class16", "class17", "class18", "class19", "class20"]
function Classes() {
    return (
        <>
            <div className='text-left'><h2>Class</h2></div>
            <hr />
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        {
                            
                            // for(var i=0;i<5;i+=){
                            //     Console.log(i)
                            // }
                            clsarr.map((cls) => {
                                return <>
                                <Link to={`/${cls}`}><div className='btn btn-primary mr-3 mb-3 btn-lg btn-default '>{cls}</div></Link>
                                    
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Classes
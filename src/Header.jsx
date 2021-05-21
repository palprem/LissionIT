import React from 'react';

const Header = ()=>{
    
    
    return(
        <>
        <div className="sticky-top bg-white container-fluid">
            <div className=" row first mt-4">
                <div className="sticky-top col-md-4 d-flex list-unstyled">
                    <li><a className="react" href="">React</a></li>
                </div>
                <div className="col-md-5 d-flex list-unstyled">
                    <li><input type="text" placeholder="Start your search" /></li>
                    <li><button className="btn"><i class="fas fa-search"></i></button></li>
                </div>
                <div className="col-md-3 d-flex list-unstyled">
                    <li><button className="hostbtn border-0  bg-white mr-2 mt-1">Beacomea host</button></li>
                    <li><button className="hostbtn border-0 bg-white mr-2 mt-1"><i class="fas fa-globe"></i></button></li>
                    <li><button className=" bg-white pr-3 pl-3 pt-1 pb-1  profileBtn"><i class="fas fa-ellipsis-h mr-2"></i><i class="far fa-user-circle"></i></button></li>
                </div>               
            </div>
        </div>
        </>
    )

}
export default Header;
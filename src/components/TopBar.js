import React from 'react';

function TopBar(props) {
    return (
        <section className='bg-primary'>
            <div className='container'>
                <div className='row justify-content-between py-3 text-white'>
                    <div className='col-auto'>
                        <p className='d-inline'> <i className="fa fa-envelope"></i> info@example.com</p>
                        <p className='d-inline ms-2'> <i className="fa fa-phone"></i> 123 456-7890</p>
                    </div>
                    <div className='col-auto'>
                        md
                    </div>
                </div>
            
            </div>
        </section>
    );
}

export default TopBar;
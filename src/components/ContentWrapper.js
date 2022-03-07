import React from 'react';
import TopBar from './TopBar.js';
import ContentRowTop from './ContentRowTop.js';
import Footer from './Footer.js';

function ContentWrapper(){
  return (
    <div id="content-wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">

				{/* <!-- Topbar --> */}
				<TopBar />
				{/* <!-- End of Topbar --> */}

				{/* <!-- Content Row Top --> */}
				<ContentRowTop />
				{/* <!--End Content Row Top--> */}
        <Footer />
			</div>
			{/* <!-- End of MainContent --> */}
		</div>
  );
}

export default ContentWrapper;
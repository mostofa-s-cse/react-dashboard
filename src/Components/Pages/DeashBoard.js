import React from 'react';

const DeashBoard = () => {
    return (
      <>
       <div className="container-fluid">
  {/* start page title */}
  <div className="row">
    <div className="col-12">
      <div className="page-title-box">
        <div className="page-title-right">
          <form className="d-flex">
            <div className="input-group">
              <input type="text" className="form-control form-control-light" id="dash-daterange" />
              <span className="input-group-text bg-primary border-primary text-white">
                <i className="mdi mdi-calendar-range font-13" />
              </span>
            </div>
            <a href="javascript: void(0);" className="btn btn-primary ms-2">
              <i className="mdi mdi-autorenew" />
            </a>
          </form>
        </div>
        <h4 className="page-title">Analytics</h4>
      </div>
    </div>
  </div>
  {/* end page title */}
  <div className="row">
    <div className="col-xl-3 col-lg-4">
      <div className="card tilebox-one">
        <div className="card-body">
          <i className="uil uil-users-alt float-end" />
          <h6 className="text-uppercase mt-0">Active Users</h6>
          <h2 className="my-2" id="active-users-count">121</h2>
          <p className="mb-0 text-muted">
            <span className="text-success me-2"><span className="mdi mdi-arrow-up-bold" /> 5.27%</span>
            <span className="text-nowrap">Since last month</span>  
          </p>
        </div> {/* end card-body*/}
      </div>
      {/*end card*/}
      <div className="card tilebox-one">
        <div className="card-body">
          <i className="uil uil-window-restore float-end" />
          <h6 className="text-uppercase mt-0">Views per minute</h6>
          <h2 className="my-2" id="active-views-count">560</h2>
          <p className="mb-0 text-muted">
            <span className="text-danger me-2"><span className="mdi mdi-arrow-down-bold" /> 1.08%</span>
            <span className="text-nowrap">Since previous week</span>
          </p>
        </div> {/* end card-body*/}
      </div>
      {/*end card*/}
      <div className="card cta-box overflow-hidden">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <h3 className="m-0 fw-normal cta-box-title">Enhance your <b>Campaign</b> for better outreach <i className="mdi mdi-arrow-right" /></h3>
            </div>
            <img className="ms-3" src="assets/images/email-campaign.svg" width={92} alt="Generic placeholder image" />
          </div>
        </div>
        {/* end card-body */}
      </div>
    </div> {/* end col */}
    <div className="col-xl-9 col-lg-8">
      <div className="card card-h-100">
        <div className="card-body">
          <div className="alert alert-warning alert-dismissible fade show mb-3" role="alert">
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            Property HY1xx is not receiving hits. Either your site is not receiving any sessions or it is not tagged correctly.
          </div>
          <ul className="nav float-end d-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">Today</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">7d</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">15d</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">1m</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">1y</a>
            </li>
          </ul>
          <h4 className="header-title mb-3">Sessions Overview</h4>
          <div dir="ltr">
            <div id="sessions-overview" className="apex-charts mt-3" data-colors="#0acf97" />
          </div>
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div>
  </div>
  {/* end row */}
  {/* end row */}
  <div className="row">
    <div className="col-xl-4 col-lg-6">
      <div className="card">
        <div className="card-body">
          <a href className="p-0 float-end">Export <i className="mdi mdi-download ms-1" /></a>
          <h4 className="header-title mt-1 mb-3">Channels</h4>
          <div className="table-responsive">
            <table className="table table-sm table-centered mb-0 font-14">
              <thead className="table-light">
                <tr>
                  <th>Channel</th>
                  <th>Visits</th>
                  <th style={{width: '40%'}} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Direct</td>
                  <td>2,050</td>
                  <td>
                    <div className="progress" style={{height: 3}}>
                      <div className="progress-bar" role="progressbar" style={{width: '65%', height: 20}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Organic Search</td>
                  <td>1,405</td>
                  <td>
                    <div className="progress" style={{height: 3}}>
                      <div className="progress-bar bg-info" role="progressbar" style={{width: '45%', height: 20}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Refferal</td>
                  <td>750</td>
                  <td>
                    <div className="progress" style={{height: 3}}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%', height: 20}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Social</td>
                  <td>540</td>
                  <td>
                    <div className="progress" style={{height: 3}}>
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '25%', height: 20}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> {/* end table-responsive*/}
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col*/}
    <div className="col-xl-4 col-lg-6">
      <div className="card">
        <div className="card-body">
          <a href className="p-0 float-end">Export <i className="mdi mdi-download ms-1" /></a>
          <h4 className="header-title mt-1 mb-3">Social Media Traffic</h4>
          <div className="table-responsive">
            <table className="table table-sm table-centered mb-0 font-14">
              <thead className="table-light">
                <tr>
                  <th>Network</th>
                  <th>Visits</th>
                  <th style={{width: '40%'}} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Facebook</td>
                  <td>2,250</td>
                  <td>
                    <div className="progress" style={{height: 3}}>
                      <div className="progress-bar" role="progressbar" style={{width: '65%', height: 20}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td>1,501</td>
                  <td>
                    <div className="progress" style={{height: 3}}>
                      <div className="progress-bar" role="progressbar" style={{width: '45%', height: 20}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>750</td>
                  <td>
                    <div className="progress" style={{height: 3}}>
                      <div className="progress-bar" role="progressbar" style={{width: '30%', height: 20}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td>540</td>
                  <td>
                    <div className="progress" style={{height: 3}}>
                      <div className="progress-bar" role="progressbar" style={{width: '25%', height: 20}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> {/* end table-responsive*/}
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col*/}
    <div className="col-xl-4 col-lg-12">
      <div className="card">
        <div className="card-body">
          <a href className="p-0 float-end">Export <i className="mdi mdi-download ms-1" /></a>
          <h4 className="header-title mt-1 mb-3">Engagement Overview</h4>
          <div className="table-responsive">
            <table className="table table-sm table-centered mb-0 font-14">
              <thead className="table-light">
                <tr>
                  <th>Duration (Secs)</th>
                  <th style={{width: '30%'}}>Sessions</th>
                  <th style={{width: '30%'}}>Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0-30</td>
                  <td>2,250</td>
                  <td>4,250</td>
                </tr>
                <tr>
                  <td>31-60</td>
                  <td>1,501</td>
                  <td>2,050</td>
                </tr>
                <tr>
                  <td>61-120</td>
                  <td>750</td>
                  <td>1,600</td>
                </tr>
                <tr>
                  <td>121-240</td>
                  <td>540</td>
                  <td>1,040</td>  
                </tr>
              </tbody>
            </table>
          </div> {/* end table-responsive*/}
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col*/}
  </div>
  {/* end row */}
</div>

      </>

    );
};

export default DeashBoard;
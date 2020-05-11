import React from 'react'

const clientForms = () => {
    return (
     <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <h1>
      CREATE A CLIENT/CUSTOMER
    </h1>
  </section>
  {/* Main content */}
  <section className="content">
    <div className="row">
      {/* left column */}
      <div className="col-md-6">
        {/* general form elements */}
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className="box-title">CLIENT/CUSTOMER INFORMATION</h3>
          </div>
          {/* /.box-header */}
          {/* form start */}
          <form role="form">
            <div className="box-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Client Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Client Name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Client Description</label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Client NDescription" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Client Location</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter client Location" />
              </div>
              <div className="form-group">
              <label htmlFor="exampleInputPassword1">GH Post GPS Address</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter GPS Address" />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">Client Email Address</label>
            <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter client Email" />
          </div>
          <div className="form-group">
            <label>Billing Circle</label>
               <select className="form-control select2" style={{width: '100%'}}>
                <option selected="selected">DAILY</option>
                   <option>WEEKLY</option>
                   <option>MONTHLY</option>
                   <option>YEARLY</option>
               </select>
         </div>
         <div className="form-group">
            <label>Support Status</label>
               <select className="form-control select2" style={{width: '100%'}}>
                <option selected="selected">CONTRACT</option>
                   <option>ON CALL</option>
               </select>
         </div>
         <div className="form-group">
       
  <label>Service Subscribed</label>
  <select className="form-control select2" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
    <option>GP</option>
    <option>POS</option>
    <option>RMS</option>
    <option>PASTEL</option>
  </select>
</div>


            </div>
            {/* /.box-body */}
            <div className="box-footer">
              <button type="submit" className="btn btn-primary">Save Info</button>
            </div>
          </form>
        </div>
        {/* /.box */}
      </div>
      <div className="col-md-6">
      </div>
      {/*/.col (right) */}
    </div>
    {/* /.row */}
  </section>
  {/* /.content */}
</div>

  
    )
}

export default clientForms;

      {/* <div className='container mt-4' style={{width:"300px"}}>
<div className='card'>
        <img src='h.jpg' style={{width:"250px"}}></img>
        <div className='card-body'>
          <h5 className='card-title'>cardtitle</h5>
          <p className='card-text'>this paragraph</p>
        </div>
      </div>
      </div> */}
      {/* <div className='container mt-4'>
        <div className='row'>
          <div className='col-6 bg-info p-3'>auto1</div>
<div className='col-6 bg-info p-3'>auto2</div>
<div className='col-6 bg-info p-3'>auto2</div>
        </div>
      </div> */}
{/*    
   <div className="continer mx-4">
    <div className='row '>
      <div className='col-12 col-md-4 col-lg-4 bg-primary text-white p-3'>box-1</div>
       <div className='col-12 col-md-4 col-lg-4 bg-danger text-white p-3'>box-2</div>
        <div className='col-12 col-md-4 col-lg-4 bg-success text-white p-3'>box-3</div>
    </div>
   </div> */}
   {/* <div className='container mx-4'>
    <p className='d-none d-md-block'>this text appear only tablet</p>
   </div> */}

    


    <div className='container mt-5'>
      <h3 className='mb-4 text-center'>student form</h3> 
      <div className='mb-3'>
        <label className='form-label'>name</label>
        <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                <label className='form-label'>email</label>
        <input type="email" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>  
              <label className='form-label'>course</label>
        <input type="text" className='form-control' value={course} onChange={(e)=>setCourse(e.target.value)}/>       
         <label className='form-label'>feedback</label>
        <input type="text" className='form-control' value={feedback} onChange={(e)=>setFeedback(e.target.value)}/>
        <br></br>
        <button className='btn btn-success w-100' onClick={handlesubmit}>submit</button>
         

        {
        error&&(
          <div className='text-danger mb-2'>{error}</div>

       ) }
      
 </div>
  </div> 

const PartnershipVideo = ({
    compAddedItemPictureURL1,
    compAddedItemLink1
}) => {



    const handleInputItemPictureFirst = (e) => {
        //AddedItemPicture1(e.target.files[0])
        compAddedItemPictureURL1(URL.createObjectURL(e.target.files[0]))
    }

    const handleInputLinkFirst = (e) => {
        compAddedItemLink1(e.target.value)
    }



    return (
  
     
        <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-evenly",marginTop:30}}>


    {/*IMAGE*/}  
        <div>
          <div>
            <h5></h5>
            <h6 style={{opacity:0.6}}>Upload The Product Video</h6>
            <h3>Video</h3>
          </div>
          <input type="file" onChange={handleInputItemPictureFirst}/>
        </div>
        <hr />
           {/*LINK*/}  
           <div>
          <div>
            <h5></h5>
            <h6 style={{opacity:0.6}}>Add Link To The Item</h6>
            <h3>Item Link</h3>
          </div>
          <input type="text" onChange={handleInputLinkFirst} />
        </div>
       
    </div>
    
 
    )
}

export default PartnershipVideo
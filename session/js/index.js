window.onload=function(){
    var storageform=document.getElementById("storage-form")
    storageform.onsubmit=function(e){
        e.preventDefault()
        var key=document.getElementById("store-key").value
        var value=document.getElementById("store-value").value
        sessionStorage.setItem(key,value)
        Swal.fire({
            icon:'success',
            title:'data stored' ,
            // showConfirmButton:false

        })

    }
    // read
    var readform=document.getElementById("read-form")
    readform.onsubmit=function(e){
        e.preventDefault()
        var key=document.getElementById("read-key").value
       var data= sessionStorage.getItem(key)
       if(data==null){  
              Swal.fire({
            icon:'error',
            title:'data not found',
            // text:data
           })

       }
       else{
        Swal.fire({
            icon:'success',
            title:'your data',
            text:data
           })
       }
     
    }
    // read all data
    var readnow=document.getElementById("read-now")
    readnow.onclick= async function(){
       var count= sessionStorage.length
       for(var i=0;i<count;i++){
      var key=  sessionStorage.key(i)
      var data=sessionStorage.getItem(key)
      await Swal.fire({
        icon:'success',
        title:key,
        text:data,
        confirmButtonText:'Next'


      })
     
       }
    }
    // remove data
    var removeform=document.getElementById("remove-form")
    removeform.onsubmit=function(e){
        e.preventDefault()
        var key=document.getElementById("remove-key").value
        var data=sessionStorage.getItem(key)
        if(data==null){
            Swal.fire({
                icon:'error',
                title:'key doen`t exist'

            })
        }
        else{
            sessionStorage.removeItem(key)
            Swal.fire({
                icon:'success',
                title:'data deleted'

            })
        }
    }
    // remove all data
    var removeall=document.getElementById("remove-all")
    removeall.onclick=function(){
        var count=sessionStorage.length
        if(count>1){
            sessionStorage.clear();
            Swal.fire({
                icon:'success',
                title:'all data deleted'
            })

        }
        else{
            Swal.fire({
                icon:'error',
                title:'data already deletd'
            })
        }
      
    }

}
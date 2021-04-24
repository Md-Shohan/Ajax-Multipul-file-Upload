const { default: axios } = require("axios");

$('.addBtn').on('click', function(){

   let newTableRow =
                "<tr>"+
                    "<td><input type='file' class='fileInput form-control'></td>"+                            
                    "<td class='fileSize'>File Size</td>+"+                          
                    "<td><button class='btn btn-danger btn-sm CancelBtn'>Cancel</button></td>"+
                    "<td><button class='btn btn-success btn-sm UpBtn'>Upload</button></td>+"+
                    "<td class='fileUpMb'>Upload(MB)</td>"+ 
                    "<td class='fileParcent'>Upload(%)</td>"+ 
                    "<td class='fileStatus'>Status</td>"+ 
               "</tr>"

               $('.fileList').append(newTableRow);

                $('.fileInput').on('change',function(){
                    let MyFile=$(this).prop('files');
                    let MyFileSize=((MyFile[0].size)/(1024*1024)).toFixed(2);
                    $(this).closest('tr').find('.fileSize').html(MyFileSize+ "mb");
                });

                $('.UpBtn').on('click',function(event){
                    let MyFile=$(this).closest('tr').find('.fileInput').prop('files')
                    let fileUpMb=$(this).closest('tr').find('.fileUpMb');
                    let fileParcent=$(this).closest('tr').find('.fileParcent');
                    let fileStatus=$(this).closest('tr').find('.fileStatus');
                    let Upbtn=$(this);
                    let fromData=new FormData();
                    fromData.append('FileKey',MyFile[0])
                    OnFileUpload(fromData,fileUpMb,fileParcent,fileStatus,Upbtn);
                    event.preventDefault();
                    event.stopImmediatePropagation();
                });
                
              

               //remove row
               $('.CancelBtn').on('click',function(){
                    $(this).parents('tr').remove();
               });
               

});

function OnFileUpload(fromData,fileUpMb,fileParcent,fileStatus,Upbtn){

    fileStatus.html("Uploading...");
    Upbtn.prop('disabled',true);

    let url='/fileUp';
    let config={
            headers:{'content-type':'multipart/form-data'},
            onUploadProgress:function(ProgressEvent) {
                let UpMB= (ProgressEvent.loaded/(1024*1024)).toFixed(2) + " MB";
                let UpPer= ((ProgressEvent.loaded*100)/progressEvent.total).toFixed(2)+ " %";
                fileUpMb.html(UpMB);
                fileParcent.html(UpPer);
            }

    }

    axios.post(url,fromData,config)
        .then(function(response){
            if(response.status==200){
                fileStatus.html('Success')
                Upbtn.prop('disabled',false);

            }else{
                fileStatus.html('failed')
                Upbtn.prop('disabled',false);
            }


        }).catch(function(error){
            fileStatus.html('failed')
            Upbtn.prop('disabled',false);
        })


}


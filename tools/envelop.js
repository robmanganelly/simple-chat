module.exports = (res, status, data, message)=>{
    
    

    return res.status(status).json({
        status,
        data,
        message: msg_builder(status,message)
    });
};

function msg_builder(status, message){
    
    if (!!message && typeof message === "string"){
        return message;
    }

    else if (typeof status !== "number"){
        return "wrong status and unknown message";
    }

    else {
        
        let msg = "";
        switch (status) {
            case 200:
                msg = "resource sent successfully";
                break;
            case 201:
                msg = "resource created successfully";
                break;
            
            case 400:
                msg = "error, bad request";
                break;
            case 401:
                msg = "error, not enough privileges ";
                break;
            
            case 403:
                msg = "error, forbidden!!";
                break;
            
            case 404:
                msg = "error, resource not found";
                break;
            
            case 500:
                msg = "internal server error";
                break;


            default:
                msg = `unknown status "${status}" and undefined message`;
                break;
        }
        return msg;
    }
}
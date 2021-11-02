'use strict'

const Slack = require('slack');


module.export.run = async (date) => {
    const dataObject = JSON.parse (data.body);

    let response = {
        statusCode: 200,
        body : {},
        headers : {'X-Slack-No-Retry' : 1}
    }

    try {
        switch (dataObject,type) {
            case 'url_verification':
                response.body = verifyCall (dataObject);
                break;
        }

    }
    catch ( err ){

    }
    finally{
        return response;
    }
}

function verifyCall (data){
    if ( data.token == 'vpkgGabsp9aWOZbVyjqjJjjV'){
        return data.challenge;
    }
    else {
        throw 'Verification failed';
    }
}
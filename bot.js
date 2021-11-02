'use strict'

const Slack = require('slack');


module.exports.run = async (data) => {
    const dataObject = JSON.parse (data.body);


    let response = {
        statusCode: 200,
        body : {},
        headers : {'X-Slack-No-Retry' : 1}
    }

    try {
        if ( !('X-Slack-Retry-Num' in data.headers) )
        {
            switch (dataObject.type) {
                case 'url_verification':
                    response.body = verifyCall (dataObject);
                    break;
                case 'event_callback':
    
                    if (!dataObject.event.thread_ts){
                        const params = {
                            token: 'xoxb-2643825504114-2662532794471-Jb3uemVCngY9uSS3jeqkYSES',
                            channel: dataObject.event.channel,
                            text: 'This is the new thread you can talk in!',
                            thread_ts: dataObject.event.ts
                        }
        
                        Slack.chat.postMessage( params );
                    }
    
                    response.body = {ok: true}
    
                    break;
                    
                }
        }
    }
    catch ( err ) {

    }
    finally {
        return response;
    }

}

function verifyCall (data){
    return data.challenge;
}
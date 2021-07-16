const TheirMessage = ({ lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

    return(
        <div className='message-row'>
            {isFirstMessageByUser&& (
                <div 
                className='message-avatar'
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.length > 0 /*seeing if the message is an image or text*/
            ? (
                <img
                    src={message.attachments[0].file} /*setting up image */
                    alt='message-attachment'
                    className='message-image'
                    style={{float:'right'}}
                />
            ) : (
                <div className='messgage' style={{float:'right', marginRight: '18px', color:'white', backgroundColor:'#3B2A50'}}>
                    {message.text} {/*else statement for if message is not an image */}
                </div>
            )
            }
        </div>
    );
}

export default TheirMessage;
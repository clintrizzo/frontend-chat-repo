  const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) { /*seeing if the message is an image or text*/
      return (
        <img
          src={message.attachments[0].file} /*setting up image */
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      );
    }
  
    return (
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
        {message.text} {/*else statement for if message is not an image */}
      </div>
    );
  };
  
  export default MyMessage;
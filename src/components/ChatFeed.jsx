import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];
    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index -1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`mesg_${index}`} style={{width: '100%'}}>
                    <div className='message-block'>
                        {/*passing the Mymessage as a prop from the message key
                        TheirMessage is being passed using the same prop but is also using the set index for the users lastmessage*/}
                        {
                            isMyMessage 
                            ? <MyMessage message={message}/> 
                            :<TheirMessage message={message} lastMessage={messages[lastMessageKey]}/> 
                        }
                    </div>
                    <div class='read-receipts' style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        {/*If else statement for getting the properties aligned correctly */}
                        read receipts
                    </div>
                </div>
            )
        })
    }

    if(!chat) return 'Loading...'; {/*connected to line 40 */}

    return(
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>{chat?.title}</div> {/*question mark makes sure we can access the chat before the title variable*/}
                <div className='chat-subtitle'>
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}}/>
            <div className='message-form-container'>
                <MessageForm {...props} chatID={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;
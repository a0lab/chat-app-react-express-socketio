
function ChatMessages({
 messagesLoading,
 messages
}) {
 return (
   <section className="chat-screen">
     {/* { JSON.stringify(messages)} */}
     <div className="channels">
       <ul className="chat-messages">
         {messagesLoading ? (
           <li>
             <span className="channel-name">Loading channels....</span>
           </li>
         ) : messages.length ? (
          messages.map((m) => {
             return (
               <li
                 key={m.id}
               >
                 <span className="user-id"><i><b>{m.user} says:</b></i></span>
                 <span className="message">{m.body}</span>
               </li>
             );
           })
         ) : (
           <li>
             <span className="channel-name">No channels available</span>
           </li>
         )}
       </ul>
     </div>
     <footer className="chat-footer">
       
       {/* <MessageForm
         emojiSelect={handleEmojiSelect}
         handleMessageSend={handleMessageSend}
         setShowEmojiPicker={setShowEmojiPicker}
         showEmojiPicker={showEmojiPicker}
         message={message}
         handleMessageChange={handleMessageChange}
       /> */}
     </footer>
   </section>
 );
}

export default ChatMessages;
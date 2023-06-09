import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    console.log('cai no chats')
return (
        <div className="background">
        <PrettyChatWindow
            projectId={'55b276ea-41cc-4feb-8e03-829d0187585b'}
            username={props.user.username}
            secret={props.user.secret}
        />
        </div>
    );
};

export default ChatsPage;
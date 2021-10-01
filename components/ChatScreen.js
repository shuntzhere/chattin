import { Avatar, IconButton } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";
import AttachmentIcon from "@material-ui/icons/Attachment";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import { useCollection } from "react-firebase-hooks/firestore";
import { Message } from "./Message";

export const ChatScreen = ({ chat, messages }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [messagesSnapshot] = useCollection(
    db
      .collection("chats")
      .doc(router.query.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ));
    }
  };
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInformation>
          <h3>recipientEmail</h3>
          <p>Last seen :</p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachmentIcon />
          </IconButton>
          <IconButton>
            <MoreVertRoundedIcon />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer>
        {/* show messages */}
        {showMessages()}
        <EndOfMessage />
      </MessageContainer>
    </Container>
  );
};

const Container = styled.div``;
const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;
const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }

  > p {
    font-size: 14px;
    color: gray;
  }
`;
const HeaderIcons = styled.div``;

const MessageContainer = styled.div``;

const EndOfMessage = styled.div``;

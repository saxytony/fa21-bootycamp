import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Button } from "semantic-ui-react";

const LikesButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <Button onClick={() => setLikes(likes + 1)} style={styles.buttonStyle}>
      <div style={styles.buttonContainer}>
        <div style={styles.likesCounter}>{likes}</div>
        <AiFillHeart size={20} color="#64BEFD" />
      </div>
    </Button>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: "black",
    color: "white",
    marginLeft: "50%",
    marginTop: "5%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  likesCounter: {
    marginRight: "10px",
    lineHeight: "20px",
  },
};

export { LikesButton };

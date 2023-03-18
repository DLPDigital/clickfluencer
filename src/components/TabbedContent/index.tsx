import React from "react";
import StyledButton from "../Button/StyledButton";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from "@chakra-ui/react";
import { GameState } from "@/types/gamestate";
import StyledProgress from "../ProgressBar";

type Props = {
  handlePostClickDelay: () => void;
  posts: number | undefined;
  likes: number;
  followers: number;
  state: GameState;
  handleClearClick: () => void;
  progress: number;
};

export const TabbedContent: React.FC<Props> = ({
  handlePostClickDelay,
  posts,
  likes,
  followers,
  state,
  handleClearClick,
  progress
}) => {
  console.log("progress on here", progress);
  return (
    <Tabs>
      <TabList>
        <Tab>Main</Tab>
        <Tab>Upgrades</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <StyledButton onClick={handlePostClickDelay}>Post</StyledButton>
          <progress max="100" value={progress} />
          <div>
            <p>Posts: {posts}</p>
            <p>Likes: {likes}</p>
            <p>Followers: {followers}</p>
            {followers > 0 && (
              <p>Last follower at: {state.lastFollowerLikes}</p>
            )}
            <StyledButton onClick={handleClearClick}>Reset</StyledButton>
          </div>
        </TabPanel>
        <TabPanel>
          <StyledButton disabled={followers < 10}>Hire Intern</StyledButton>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

import { useNavigate } from "react-router-dom";
import {BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()

  const OnNavigateHandler= ()=> navigate(route)

  return (
    <DirectoryItemContainer onClick={OnNavigateHandler}>
      <BackgroundImage
        imageUrl = {imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

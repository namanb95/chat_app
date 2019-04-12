import React from "react";
import module_css from "./css/user_tag_bar.module.scss";
import js_css from "./css/user_tag_bar.css.js";
import Chat_Image from "../../state_less/chat_image";

export default function UserTag(props) {
  console.log(props, "tag");

	let { data , selected ,toggleTag} = props;

  return (
    <div className={`${module_css.tagLayout} ${selected ? module_css.selectedTag : ''}`} onClick={()=>toggleTag(props.index)} >
      <div className={module_css.imageWrapper}>
        <Chat_Image imageData={data} imageSize={"M"} />
      </div>
			<div className={module_css.nameWrapper}>
				{data.name}
			</div>
    </div>
  );
}

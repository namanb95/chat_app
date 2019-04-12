import module_css from "./css/image_upload.module.scss";
import js_css from "./css/image_upload.css.js";

import React, { Component } from "react";
import Chat_Image from "../../state_less/chat_image";

export default class ImageUpload extends Component {
  onUploadClick = () => {
    this.hiddenFileInput.current.click()
  };

	onFileValChange=(e)=>{
		let files = Array.from(e.target.files);
		let data = new FormData()
		files.map((file,i)=>{
			data.append(i,file)
		})
		fetch("/lofin",{
      method: 'POST',
      body: data
    });
	}

  render() {
    this.hiddenFileInput = React.createRef();
    return (
      <div className={module_css.layout}>
        <div className={module_css.uploadOverlay}>
          <div onClick={this.onUploadClick}>
            <i class="fas fa-cloud-upload-alt" />
          </div>
        </div>
        <Chat_Image {...this.props} />
        <input
					onChange={this.onFileValChange}
          ref={this.hiddenFileInput}
          hidden
          type="file"
					name={this.props.name}
					multiple
        />
      </div>
    );
  }
}

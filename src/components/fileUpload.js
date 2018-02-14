import React from 'react';
import ReactDOM from 'react-dom';
import '../login.css'

const axios =require('axios');
export function uploadSuccess({ data }) {
    return {
        type: 'UPLOAD_DOCUMENT_SUCCESS',
        data,
    };
}

export function uploadFail(error) {
    return {
        type: 'UPLOAD_DOCUMENT_FAIL',
        error,
    };
}

export function uploadDocumentRequest({ file, name }) {
    let data = new FormData();
    data.append('file', document);
    data.append('name', name);

    return (dispatch) => {
        axios.post('/files', data)
            .then(response => dispatch(uploadSuccess(response))
                .catch(error => dispatch(uploadFail(error));
    };
}


class FileUpload extends React.Component {
// Component method
    handleFileUpload=({ file })=> {
        const file = files[0];
        this.props.actions.uploadRequest({
            file,
            name: 'Awesome Cat Pic'
        })
    }



    render() {
        return (
            <input type="file" onChange={this.handleFileUpload} />
        )
    }
}




export default Login;
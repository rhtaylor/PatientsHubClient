// import React from 'react'
// import { DirectUploadProvider } from 'react-activestorage-provider' 

// export function PostForm() {
//     function handleAttachment(avatar) {
//         const body = JSON.stringify({ post: { title: "avatar", images: avatar } })
//         fetch('/posts.json', { method: 'POST', body })
//     }

//     return (
//         <DirectUploadProvider multiple onSuccess={handleAttachment} render={"YES"} />
//     )
// } 

// <ActiveStorageProvider
//     endpoint={{
//         path: `api/vi/${model}`,
//         model: model,
//         host: localhost: 3000,
//         method: 'POST'
//     }}  
//     render={({ handleUpload, uploads, ready }) => (
//         <div>
//             <input
//                 type="file"
//                 disabled={!ready}
//                 onChange={e => {
//                     return handleUpload(e.currentTarget.files)
//                 }}
//             />
//             {uploads.map(upload => {
//                 switch (upload.state) {
//                     case 'waiting':
//                         return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
//                     case 'uploading':
//                         return (
//                             <p key={upload.id}>
//                                 Uploading {upload.file.name}: {upload.progress}%
//                             </p>
//                         )
//                     case 'error':
//                         return (
//                             <Fragment>
//                                 <p key={upload.id}>
//                                     Error uploading {upload.file.name}: {upload.error}
//                                 </p>
//                             </Fragment>
//                         )
//                     case 'finished':
//                         return (
//                             <Fragment>
//                                 <p key={upload.id}>Finished uploading  {upload.file.name}</p>
//                             </Fragment>)
//                     default:
//                         return null;
//                 }
//             })}
//         </div>
//     )}
// />
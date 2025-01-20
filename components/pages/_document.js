// // pages/_document.js
// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           {/* Kommunicate script */}
//           <script
//             type="text/javascript"
//             dangerouslySetInnerHTML={{
//               __html: `
//                 (function(d, m){
//                   var kommunicateSettings = {
//                     "appId": "23208f4f5f2ce416d0a4019b5b3dbe5c2", // Replace with your app ID
//                     "popupWidget": true,
//                     "automaticChatOpenOnNavigation": true
//                   };
//                   var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//                   s.src = "https://widget.kommunicate.io/v2/kommunicate.js";
//                   var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//                   s.onload = function() {
//                     window.kommunicate = m;
//                     m.init(kommunicateSettings);
//                   };
//                 })(document, window.kommunicate || {});
//               `,
//             }}
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

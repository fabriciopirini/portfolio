import { useEffect, useState } from 'react'

export const GraphQLLogo = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} {...props}>
    <g fill="#E434AA">
      <path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656zm0 0" />
      <path d="M12.734 87.105H115.23v5.31H12.734zm0 0" />
      <path d="M66.031 119.688L14.766 90.09l2.656-4.602 51.266 29.602zm0 0M110.566 42.543L59.301 12.941l2.656-4.597 51.266 29.597zm0 0" />
      <path d="M17.434 42.523l-2.657-4.601 51.27-29.598 2.656 4.598zm0 0" />
      <path d="M109.621 96.852L58.375 8.09l4.598-2.656 51.25 88.761zm0 0M16.8 34.398h5.313v59.204h-5.312zm0 0" />
      <path d="M105.887 34.398h5.312v59.204h-5.312zm0 0" />
      <path d="M65.129 117.441l-2.32-4.02 44.586-25.745 2.32 4.02zm0 0" />
      <path d="M118.238 95.328c-3.07 5.344-9.918 7.168-15.261 4.098-5.344-3.074-7.168-9.922-4.098-15.266 3.074-5.344 9.922-7.168 15.266-4.097 5.375 3.105 7.199 9.921 4.093 15.265M29.09 43.84c-3.074 5.344-9.922 7.168-15.266 4.097-5.344-3.074-7.168-9.921-4.097-15.265 3.074-5.344 9.921-7.168 15.265-4.098 5.344 3.106 7.168 9.922 4.098 15.266M9.762 95.328c-3.075-5.344-1.25-12.16 4.093-15.266 5.344-3.07 12.16-1.246 15.266 4.098 3.07 5.344 1.246 12.16-4.098 15.266-5.375 3.07-12.191 1.246-15.261-4.098M98.91 43.84c-3.07-5.344-1.246-12.16 4.098-15.266 5.344-3.07 12.16-1.246 15.265 4.098 3.07 5.344 1.247 12.16-4.097 15.266-5.344 3.07-12.192 1.246-15.266-4.098M64 126.656a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 104.32a11.158 11.158 0 0111.168 11.168c0 6.145-4.992 11.168-11.168 11.168M64 23.68a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 1.344a11.158 11.158 0 0111.168 11.168A11.158 11.158 0 0164 23.68" />
    </g>
  </svg>
)

export const NodejsLogo = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="119"
      height="134"
      viewBox="0 0 119 134"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M54.298 132.025L37.979 122.364C35.542 121.001 36.731 120.518 37.535 120.241C40.1236 119.428 42.6017 118.298 44.913 116.876C45.1058 116.785 45.319 116.745 45.5318 116.76C45.7447 116.775 45.95 116.845 46.128 116.962L58.665 124.402C58.8992 124.523 59.1587 124.586 59.422 124.586C59.6854 124.586 59.9449 124.523 60.179 124.402L109.06 96.1872C109.288 96.05 109.476 95.8563 109.607 95.6248C109.738 95.3934 109.807 95.1321 109.807 94.8662V38.4592C109.808 38.1886 109.738 37.9225 109.605 37.6867C109.473 37.4509 109.281 37.2533 109.05 37.1132L60.189 8.92322C59.961 8.79157 59.7023 8.72226 59.439 8.72226C59.1757 8.72226 58.917 8.79157 58.689 8.92322L9.83701 37.1132C9.60333 37.2493 9.40908 37.4438 9.27337 37.6777C9.13766 37.9116 9.06516 38.1768 9.06301 38.4472V94.8522C9.06288 95.118 9.13302 95.379 9.26632 95.6089C9.39961 95.8388 9.59132 96.0293 9.82201 96.1612L23.208 103.895C30.476 107.529 34.917 103.246 34.917 98.9402V43.2682C34.9161 43.0822 34.9522 42.8978 35.0233 42.7259C35.0945 42.554 35.1991 42.3979 35.3313 42.2669C35.4634 42.1359 35.6203 42.0326 35.7928 41.9629C35.9653 41.8933 36.15 41.8587 36.336 41.8612H42.527C42.712 41.8603 42.8954 41.896 43.0665 41.9664C43.2377 42.0368 43.3931 42.1404 43.524 42.2713C43.6548 42.4021 43.7584 42.5576 43.8288 42.7287C43.8992 42.8998 43.9349 43.0832 43.934 43.2682V98.9682C43.934 108.658 38.648 114.225 29.459 114.225C26.633 114.225 24.406 114.225 18.191 111.167L5.36401 103.771C3.80496 102.862 2.51129 101.56 1.61178 99.995C0.71227 98.4302 0.238287 96.6571 0.237013 94.8522V38.4472C0.234062 36.6429 0.706361 34.8697 1.60639 33.3059C2.50642 31.7422 3.80242 30.443 5.36401 29.5392L54.293 1.31222C55.8689 0.451222 57.6358 0 59.4315 0C61.2272 0 62.9942 0.451222 64.57 1.31222L113.437 29.5512C114.996 30.4581 116.29 31.7579 117.189 33.321C118.089 34.8841 118.563 36.6557 118.564 38.4592V94.8652C118.56 96.6678 118.085 98.4381 117.185 100C116.286 101.563 114.994 102.863 113.437 103.771L64.571 132C63.0044 132.902 61.2276 133.375 59.42 133.37L59.426 133.395C57.6263 133.395 55.8582 132.922 54.298 132.025ZM74.524 94.5252C53.137 94.5252 48.653 84.7072 48.653 76.4732C48.6529 76.2877 48.6894 76.1041 48.7606 75.9328C48.8318 75.7615 48.9361 75.606 49.0676 75.4752C49.1992 75.3444 49.3553 75.2409 49.527 75.1707C49.6987 75.1006 49.8825 75.065 50.068 75.0662H56.381C56.7194 75.0655 57.0468 75.1862 57.3037 75.4064C57.5606 75.6266 57.73 75.9317 57.781 76.2662C58.736 82.6992 61.575 85.9432 74.507 85.9432C84.807 85.9432 89.189 83.6162 89.189 78.1532C89.189 75.0082 87.941 72.6712 71.938 71.1052C58.552 69.7842 50.281 66.8352 50.281 56.1292C50.281 46.2672 58.602 40.3942 72.537 40.3942C88.186 40.3942 95.944 45.8262 96.923 57.4942C96.9392 57.6922 96.9137 57.8914 96.8483 58.0789C96.7829 58.2665 96.6789 58.4383 96.543 58.5832C96.4089 58.7247 96.2478 58.8377 96.0691 58.9155C95.8904 58.9933 95.6979 59.0344 95.503 59.0362H89.147C88.8274 59.0368 88.5172 58.928 88.268 58.7279C88.0188 58.5278 87.8455 58.2484 87.777 57.9362C86.247 51.1702 82.552 49.0042 72.507 49.0042C61.263 49.0042 59.953 52.9202 59.953 55.8572C59.953 59.4172 61.495 60.4572 76.667 62.4632C91.692 64.4632 98.825 67.2722 98.825 77.8312C98.825 88.4762 89.942 94.5812 74.452 94.5812L74.524 94.5252Z"
        fill="#689F63"
      />
    </svg>
  )
}

export const ReactLogo = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} {...props}>
    <g fill="#61DAFB">
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
    </g>
  </svg>
)

export const TypeScriptLogo = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
    <path
      data-name="original"
      fill="#007acc"
      d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
    />
  </svg>
)

export const NextjsLogo = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="134"
    height="134"
    viewBox="0 0 134 134"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M71.845 131.987C103.201 131.987 128.62 106.568 128.62 75.212C128.62 43.856 103.201 18.437 71.845 18.437C40.489 18.437 15.07 43.856 15.07 75.212C15.07 106.568 40.489 131.987 71.845 131.987Z"
      fill="white"
    />
    <path
      d="M62.477 0.128909C62.191 0.154909 61.277 0.245909 60.459 0.310909C50.973 1.2284 41.7933 4.16623 33.5372 8.92686C25.2812 13.6875 18.14 20.1606 12.594 27.9109C6.3888 36.5252 2.35549 46.5105 0.836979 57.0179C0.328564 60.2248 0.127651 63.4728 0.236979 66.7179C0.127651 69.963 0.328564 73.2111 0.836979 76.4179C2.66495 88.7414 7.8988 100.309 15.9486 109.818C23.9984 119.326 34.5441 126.397 46.397 130.234C50.973 131.683 55.6851 132.66 60.46 133.151C64.7108 133.372 68.9702 133.372 73.221 133.151C81.5894 132.333 89.7301 129.952 97.221 126.133C98.367 125.547 98.588 125.391 98.432 125.261C98.332 125.183 93.445 118.633 87.586 110.717L76.93 96.3279L63.584 76.5749C56.237 65.7159 50.198 56.8359 50.146 56.8359C50.094 56.8359 50.046 65.5989 50.016 76.3149C49.977 95.0779 49.964 95.8329 49.73 96.2759C49.5024 96.7955 49.0957 97.2161 48.584 97.4609C48.167 97.6689 47.803 97.7079 45.837 97.7079H43.584L42.984 97.3299C42.6131 97.0971 42.3118 96.7685 42.112 96.3789L41.839 95.7929L41.865 69.6859L41.904 43.5659L42.304 43.0579C42.5762 42.7387 42.9025 42.4699 43.268 42.2639C43.802 42.0039 44.01 41.9779 46.263 41.9779C48.919 41.9779 49.363 42.0779 50.052 42.8369C50.252 43.0449 57.474 53.9309 66.12 67.0429C74.766 80.1549 86.592 98.0599 92.399 106.849L102.946 122.826L103.48 122.474C108.556 119.1 113.159 115.063 117.165 110.469C125.557 100.863 131 89.0405 132.842 76.4189C133.35 73.2121 133.551 69.964 133.442 66.7189C133.551 63.4738 133.35 60.2258 132.842 57.0189C131.014 44.6952 125.78 33.127 117.731 23.6184C109.681 14.1097 99.135 7.0385 87.282 3.20191C82.7698 1.76726 78.1237 0.794604 73.415 0.298909C72.165 0.168909 63.558 0.0249092 62.477 0.128909ZM89.743 40.4159C90.0528 40.5724 90.3285 40.7887 90.5542 41.0523C90.7799 41.316 90.9511 41.6217 91.058 41.9519C91.158 42.2909 91.188 49.5299 91.158 65.8449L91.119 89.2569L86.991 82.9289L82.85 76.6009V59.5829C82.85 48.5829 82.902 42.3949 82.98 42.0959C83.0729 41.7495 83.235 41.4255 83.4566 41.1435C83.6781 40.8615 83.9545 40.6272 84.269 40.4549C84.803 40.1819 84.998 40.1549 87.042 40.1549C88.975 40.1559 89.313 40.1819 89.743 40.4159Z"
      fill="black"
    />
  </svg>
)

export const JavaScriptLogo = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
    <path
      fill="#323330"
      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
    />
  </svg>
)

export const VercelLogo = ({ className, ...props }) => (
  <svg
    viewBox="0 0 256 222"
    width="256"
    height="222"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    className={className}
    {...props}
  >
    <path fill="#fff" d="m128 0 128 221.705H0z" />
  </svg>
)

export const AzureLogo = ({ className, ...props }) => {
  const [uniqueId, setUniqueId] = useState('')

  useEffect(() => {
    setUniqueId(`id_${Math.random().toString(36).substring(2, 9)}`)
  }, [])

  return (
    <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path
        fill={`url(#a_${uniqueId})`}
        d="M33.34 6.54h26.04l-27.03 80.1a4.15 4.15 0 0 1-3.94 2.81H8.15a4.14 4.14 0 0 1-3.93-5.47L29.4 9.38a4.15 4.15 0 0 1 3.94-2.83z"
      />
      <path
        fill="#0078d4"
        d="M71.17 60.26H29.88a1.91 1.91 0 0 0-1.3 3.31l26.53 24.76a4.17 4.17 0 0 0 2.85 1.13h23.38z"
      />
      <path
        fill={`url(#b_${uniqueId})`}
        d="M33.34 6.54a4.12 4.12 0 0 0-3.95 2.88L4.25 83.92a4.14 4.14 0 0 0 3.91 5.54h20.79a4.44 4.44 0 0 0 3.4-2.9l5.02-14.78 17.91 16.7a4.24 4.24 0 0 0 2.67.97h23.29L71.02 60.26H41.24L59.47 6.55z"
      />
      <path
        fill={`url(#c_${uniqueId})`}
        d="M66.6 9.36a4.14 4.14 0 0 0-3.93-2.82H33.65a4.15 4.15 0 0 1 3.93 2.82l25.18 74.62a4.15 4.15 0 0 1-3.93 5.48h29.02a4.15 4.15 0 0 0 3.93-5.48z"
      />
      <defs>
        <linearGradient
          id={`a_${uniqueId}`}
          x1="-1032.17"
          x2="-1059.21"
          y1="145.31"
          y2="65.43"
          gradientTransform="matrix(1 0 0 -1 1075 158)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#114a8b" />
          <stop offset="1" stopColor="#0669bc" />
        </linearGradient>
        <linearGradient
          id={`b_${uniqueId}`}
          x1="-1023.73"
          x2="-1029.98"
          y1="108.08"
          y2="105.97"
          gradientTransform="matrix(1 0 0 -1 1075 158)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity=".3" />
          <stop offset=".07" stopOpacity=".2" />
          <stop offset=".32" stopOpacity=".1" />
          <stop offset=".62" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={`c_${uniqueId}`}
          x1="-1027.16"
          x2="-997.48"
          y1="147.64"
          y2="68.56"
          gradientTransform="matrix(1 0 0 -1 1075 158)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3ccbf4" />
          <stop offset="1" stopColor="#2892df" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const PlaywrightLogo = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="400"
    height="400"
    viewBox="0 0 400 400"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M136.444 221.556C123.558 225.213 115.104 231.625 109.535 238.032C114.869 233.364 122.014 229.08 131.652 226.348C141.51 223.554 149.92 223.574 156.869 224.915V219.481C150.941 218.939 144.145 219.371 136.444 221.556ZM108.946 175.876L61.0895 188.484C61.0895 188.484 61.9617 189.716 63.5767 191.36L104.153 180.668C104.153 180.668 103.578 188.077 98.5847 194.705C108.03 187.559 108.946 175.876 108.946 175.876ZM149.005 288.347C81.6582 306.486 46.0272 228.438 35.2396 187.928C30.2556 169.229 28.0799 155.067 27.5 145.928C27.4377 144.979 27.4665 144.179 27.5336 143.446C24.04 143.657 22.3674 145.473 22.7077 150.721C23.2876 159.855 25.4633 174.016 30.4473 192.721C41.2301 233.225 76.8659 311.273 144.213 293.134C158.872 289.185 169.885 281.992 178.152 272.81C170.532 279.692 160.995 285.112 149.005 288.347ZM161.661 128.11V132.903H188.077C187.535 131.206 186.989 129.677 186.447 128.11H161.661Z"
      fill="#2D4552"
    />
    <path
      d="M193.981 167.584C205.861 170.958 212.144 179.287 215.465 186.658L228.711 190.42C228.711 190.42 226.904 164.623 203.57 157.995C181.741 151.793 168.308 170.124 166.674 172.496C173.024 167.972 182.297 164.268 193.981 167.584ZM299.422 186.777C277.573 180.547 264.145 198.916 262.535 201.255C268.89 196.736 278.158 193.031 289.837 196.362C301.698 199.741 307.976 208.06 311.307 215.436L324.572 219.212C324.572 219.212 322.736 193.41 299.422 186.777ZM286.262 254.795L176.072 223.99C176.072 223.99 177.265 230.038 181.842 237.869L274.617 263.805C282.255 259.386 286.262 254.795 286.262 254.795ZM209.867 321.102C122.618 297.71 133.166 186.543 147.284 133.865C153.097 112.156 159.073 96.0203 164.029 85.204C161.072 84.5953 158.623 86.1529 156.203 91.0746C150.941 101.747 144.212 119.124 137.7 143.45C123.586 196.127 113.038 307.29 200.283 330.682C241.406 341.699 273.442 324.955 297.323 298.659C274.655 319.19 245.714 330.701 209.867 321.102Z"
      fill="#2D4552"
    />
    <path
      d="M161.661 262.296V239.863L99.3324 257.537C99.3324 257.537 103.938 230.777 136.444 221.556C146.302 218.762 154.713 218.781 161.661 220.123V128.11H192.869C189.471 117.61 186.184 109.526 183.423 103.909C178.856 94.612 174.174 100.775 163.545 109.665C156.059 115.919 137.139 129.261 108.668 136.933C80.1966 144.61 57.179 142.574 47.5752 140.911C33.9601 138.562 26.8387 135.572 27.5049 145.928C28.0847 155.062 30.2605 169.224 35.2445 187.928C46.0272 228.433 81.663 306.481 149.01 288.342C166.602 283.602 179.019 274.233 187.626 262.291H161.661V262.296ZM61.0848 188.484L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6614 203.743 61.0848 188.484 61.0848 188.484Z"
      fill="#E2574C"
    />
    <path
      d="M341.786 129.174C329.345 131.355 299.498 134.072 262.612 124.185C225.716 114.304 201.236 97.0224 191.537 88.8994C177.788 77.3834 171.74 69.3802 165.788 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.098C297.093 344.47 343.53 242.92 357.644 190.238C364.157 165.917 367.013 147.5 367.799 135.625C368.695 122.173 359.455 126.078 341.786 129.174ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756ZM223.42 268.713C182.403 256.698 176.077 223.99 176.077 223.99L286.262 254.796C286.262 254.791 264.021 280.578 223.42 268.713ZM262.377 201.495C262.377 201.495 276.107 180.126 299.422 186.773C322.736 193.411 324.572 219.208 324.572 219.208L262.377 201.495Z"
      fill="#2EAD33"
    />
    <path
      d="M139.88 246.04L99.3324 257.532C99.3324 257.532 103.737 232.44 133.607 222.496L110.647 136.33L108.663 136.933C80.1918 144.611 57.1742 142.574 47.5704 140.911C33.9554 138.563 26.834 135.572 27.5001 145.929C28.08 155.063 30.2557 169.224 35.2397 187.929C46.0225 228.433 81.6583 306.481 149.005 288.342L150.989 287.719L139.88 246.04ZM61.0848 188.485L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6615 203.743 61.0848 188.485 61.0848 188.485Z"
      fill="#D65348"
    />
    <path
      d="M225.27 269.163L223.415 268.712C182.398 256.698 176.072 223.99 176.072 223.99L232.89 239.872L262.971 124.281L262.607 124.185C225.711 114.304 201.232 97.0224 191.532 88.8994C177.783 77.3834 171.735 69.3802 165.783 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.097L211.655 321.5L225.27 269.163ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756Z"
      fill="#1D8D22"
    />
    <path
      d="M141.946 245.451L131.072 248.537C133.641 263.019 138.169 276.917 145.276 289.195C146.513 288.922 147.74 288.687 149 288.342C152.302 287.451 155.364 286.348 158.312 285.145C150.371 273.361 145.118 259.789 141.946 245.451ZM137.7 143.451C132.112 164.307 127.113 194.326 128.489 224.436C130.952 223.367 133.554 222.371 136.444 221.551L138.457 221.101C136.003 188.939 141.308 156.165 147.284 133.866C148.799 128.225 150.318 122.978 151.832 118.085C149.393 119.637 146.767 121.228 143.776 122.867C141.759 129.093 139.722 135.898 137.7 143.451Z"
      fill="#C04B41"
    />
  </svg>
)

export const TailwindCSSLogo = ({ className, ...props }) => {
  const [uniqueId, setUniqueId] = useState('')

  useEffect(() => {
    setUniqueId(`id_${Math.random().toString(36).substring(2, 9)}`)
  }, [])

  return (
    <svg
      viewBox="0 0 256 154"
      width="256"
      height="154"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      className={className}
      {...props}
    >
      <path
        fill={`url(#a_${uniqueId})`}
        d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
      />
      <defs>
        <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id={`a_${uniqueId}`}>
          <stop stopColor="#2298BD" offset="0%" />
          <stop stopColor="#0ED7B5" offset="100%" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const SanityLogo = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="103"
    height="132"
    viewBox="0 0 103 132"
    fill="none"
    shapeRendering="geometricPrecision"
    className={className}
    {...props}
  >
    <path
      d="M11.16 16.8252C11.16 34.6012 22.333 45.1812 44.709 50.7602L68.415 56.1602C89.589 60.9382 102.479 72.8062 102.479 92.1412C102.634 100.587 99.84 108.823 94.579 115.432C94.579 96.1402 84.421 85.7172 59.921 79.4512L36.644 74.2512C18.003 70.0732 3.61697 60.3162 3.61697 39.3142C3.53463 31.1837 6.19047 23.262 11.157 16.8242"
      fill="#E84031"
      shapeRendering="geometricPrecision"
    />
    <path
      opacity="0.7"
      d="M80.025 87.4058C90.133 93.7578 94.568 102.65 94.568 115.406C86.199 125.936 71.492 131.851 54.209 131.851C25.117 131.851 4.758 117.78 0.237 93.3378H28.171C31.771 104.562 41.29 109.762 54.002 109.762C69.517 109.762 79.833 101.629 80.04 87.3618"
      fill="#E84031"
      shapeRendering="geometricPrecision"
    />
    <path
      opacity="0.7"
      d="M25.688 43.177C21.0888 40.4979 17.2997 36.6249 14.722 31.968C12.172 27.3412 10.9399 22.1035 11.16 16.825C19.236 6.38101 33.285 0 50.41 0C80.046 0 97.193 15.38 101.42 37.025H74.545C71.584 28.491 64.158 21.846 50.632 21.846C36.175 21.846 26.318 30.115 25.746 43.177"
      fill="#E84031"
      shapeRendering="geometricPrecision"
    />
  </svg>
)

export const FigmaLogo = ({ className, ...props }) => (
  <svg
    width="65"
    height="96"
    viewBox="0 0 65 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    className={className}
    {...props}
  >
    <g clipPath="url(#clip0_912_3)">
      <path
        d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z"
        fill="#0ACF83"
        shapeRendering="geometricPrecision"
      />
      <path
        d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z"
        fill="#A259FF"
        shapeRendering="geometricPrecision"
      />
      <path
        d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z"
        fill="#F24E1E"
        shapeRendering="geometricPrecision"
      />
      <path
        d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z"
        fill="#FF7262"
        shapeRendering="geometricPrecision"
      />
      <path
        d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z"
        fill="#1ABCFE"
        shapeRendering="geometricPrecision"
      />
    </g>
    <defs>
      <clipPath id="clip0_912_3">
        <rect width="53.3333" height="80" fill="white" shapeRendering="geometricPrecision" />
      </clipPath>
    </defs>
  </svg>
)

export const GmailLogo = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42" className={className} {...props}>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" />
        <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" />
        <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" />
      </g>
      <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" />
      <path
        fill="#c5221f"
        fillRule="nonzero"
        d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
      />
    </g>
  </svg>
)

export const OutlookLogo = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-.12979373 0 33.25199672 32" className={className} {...props}>
    <path
      fill="#0364b8"
      d="M28.596 2H11.404A1.404 1.404 0 0 0 10 3.404V5l9.69 3L30 5V3.404A1.404 1.404 0 0 0 28.596 2z"
    />
    <path
      fill="#0a2767"
      d="M31.65 17.405A11.341 11.341 0 0 0 32 16a.666.666 0 0 0-.333-.576l-.013-.008-.004-.002L20.812 9.24a1.499 1.499 0 0 0-.145-.083 1.5 1.5 0 0 0-1.334 0 1.49 1.49 0 0 0-.145.082L8.35 15.415l-.004.002-.012.007A.666.666 0 0 0 8 16a11.344 11.344 0 0 0 .35 1.405l11.492 8.405z"
    />
    <path fill="#28a8ea" d="M24 5h-7l-2.021 3L17 11l7 6h6v-6z" />
    <path fill="#0078d4" d="M10 5h7v6h-7z" />
    <path fill="#50d9ff" d="M24 5h6v6h-6z" />
    <path fill="#0364b8" d="m24 17-7-6h-7v6l7 6 10.832 1.768z" />
    <path fill="none" d="M10.031 5H30" />
    <path fill="#0078d4" d="M17 11h7v6h-7z" />
    <path fill="#064a8c" d="M10 17h7v6h-7z" />
    <path fill="#0078d4" d="M24 17h6v6h-6z" />
    <path
      fill="#0a2767"
      d="m20.19 25.218-11.793-8.6.495-.87s10.745 6.12 10.909 6.212a.528.528 0 0 0 .42-.012l10.933-6.23.496.869z"
      opacity=".5"
    />
    <path
      fill="#1490df"
      d="m31.667 16.577-.014.008-.003.002-10.838 6.174a1.497 1.497 0 0 1-1.46.091l3.774 5.061 8.254 1.797v.004A1.498 1.498 0 0 0 32 28.5V16a.666.666 0 0 1-.333.577z"
    />
    <path
      d="M32 28.5v-.738l-9.983-5.688-1.205.687a1.497 1.497 0 0 1-1.46.091l3.774 5.061 8.254 1.797v.004A1.498 1.498 0 0 0 32 28.5z"
      opacity=".05"
    />
    <path
      d="M31.95 28.883 21.007 22.65l-.195.11a1.497 1.497 0 0 1-1.46.092l3.774 5.061 8.254 1.797v.004a1.501 1.501 0 0 0 .57-.83z"
      opacity=".1"
    />
    <path
      fill="#28a8ea"
      d="M8.35 16.59v-.01h-.01l-.03-.02A.65.65 0 0 1 8 16v12.5A1.498 1.498 0 0 0 9.5 30h21a1.503 1.503 0 0 0 .37-.05.637.637 0 0 0 .18-.06.142.142 0 0 0 .06-.02 1.048 1.048 0 0 0 .23-.13c.02-.01.03-.01.04-.03z"
    />
    <path
      d="M18 24.667V8.333A1.337 1.337 0 0 0 16.667 7H10.03v7.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v10h8.667A1.337 1.337 0 0 0 18 24.667z"
      opacity=".1"
    />
    <path
      d="M17 25.667V9.333A1.337 1.337 0 0 0 15.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v11h7.667A1.337 1.337 0 0 0 17 25.667z"
      opacity=".2"
    />
    <path
      d="M17 23.667V9.333A1.337 1.337 0 0 0 15.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v9h7.667A1.337 1.337 0 0 0 17 23.667z"
      opacity=".2"
    />
    <path
      d="M16 23.667V9.333A1.337 1.337 0 0 0 14.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v9h6.667A1.337 1.337 0 0 0 16 23.667z"
      opacity=".2"
    />
    <path
      fill="#0078d4"
      d="M1.333 8h13.334A1.333 1.333 0 0 1 16 9.333v13.334A1.333 1.333 0 0 1 14.667 24H1.333A1.333 1.333 0 0 1 0 22.667V9.333A1.333 1.333 0 0 1 1.333 8z"
    />
    <path
      fill="#fff"
      d="M3.867 13.468a4.181 4.181 0 0 1 1.642-1.814A4.965 4.965 0 0 1 8.119 11a4.617 4.617 0 0 1 2.413.62 4.14 4.14 0 0 1 1.598 1.733 5.597 5.597 0 0 1 .56 2.55 5.901 5.901 0 0 1-.577 2.666 4.239 4.239 0 0 1-1.645 1.794A4.8 4.8 0 0 1 7.963 21a4.729 4.729 0 0 1-2.468-.627 4.204 4.204 0 0 1-1.618-1.736 5.459 5.459 0 0 1-.567-2.519 6.055 6.055 0 0 1 .557-2.65zm1.75 4.258a2.716 2.716 0 0 0 .923 1.194 2.411 2.411 0 0 0 1.443.435 2.533 2.533 0 0 0 1.541-.449 2.603 2.603 0 0 0 .897-1.197 4.626 4.626 0 0 0 .286-1.665 5.063 5.063 0 0 0-.27-1.686 2.669 2.669 0 0 0-.866-1.24 2.387 2.387 0 0 0-1.527-.473 2.493 2.493 0 0 0-1.477.439 2.741 2.741 0 0 0-.944 1.203 4.776 4.776 0 0 0-.007 3.44z"
    />
    <path fill="none" d="M0 0h32v32H0z" />
  </svg>
)

import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CopyIcon2 from '@material-ui/icons/FileCopy'

const CopyIcon = ({ icon }) => {
  return (
    <>
      <CopyToClipboard text={icon}>
        <button className="w-100 br3 mt1 pa1 hover-dark-gray hover-bg-black-10 pointer">
          {icon} <CopyIcon2 />
        </button>
      </CopyToClipboard>
    </>
  )
}
export default CopyIcon

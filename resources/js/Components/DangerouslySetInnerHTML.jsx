import DOMPurify from 'dompurify'
import React from 'react'


function DangerouslySetInnerHTML({data}) {
    const sanitizedHtml = DOMPurify.sanitize(data);
  return (
    <div dangerouslySetInnerHTML={{ __html:sanitizedHtml }} />
  )
}

export default DangerouslySetInnerHTML
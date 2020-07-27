import React from 'react'
import styled from 'styled-components'
import { Input, Icon, Button } from 'semantic-ui-react'
import { withFormik } from 'formik'

import FileUpload from './FileUpload'

const SendMessageWrapper = styled.div`
  grid-column: 3;
  padding: 20px;
  display: grid;
  grid-template-columns: 4% auto;
`

const ENTER_KEY = 13

const SendMessage = ({
  placeholder,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  channelId,
}) => (
  <SendMessageWrapper>
    <FileUpload channelId={channelId}>
      <Button icon>
        <Icon name="plus" />
      </Button>
    </FileUpload>
    <Input
      onKeyDown={(e) => {
        if (e.keyCode === ENTER_KEY && !isSubmitting) {
          handleSubmit()
        }
      }}
      onBlur={handleBlur}
      onChange={handleChange}
      name="message"
      value={values.message}
      placeholder={`Message #${placeholder}`}
    />
  </SendMessageWrapper>
)

export default withFormik({
  mapPropsToValues: () => ({ message: '' }),
  handleSubmit: async (
    values,
    { props: { onSubmit }, setSubmitting, resetForm }
  ) => {
    if (!values.message || !values.message.trim()) {
      setSubmitting(false)
      return
    }
    await onSubmit(values.message)
    // await mutate({
    //   variables: { channelId, text: values.message },
    // })
    resetForm(false)
  },
})(SendMessage)

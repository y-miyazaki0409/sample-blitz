import React from "react"

type QuestionFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const QuestionForm = ({ initialValues, onSubmit }: QuestionFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      <div>Put your form fields here. But for now, just click submit</div>
      <div>{JSON.stringify(initialValues)}</div>

      <input placeholder="Question" />
      <input placeholder="Choice 1" />
      <input placeholder="Choice 2" />
      <input placeholder="Choice 3" />

      <button>Submit</button>
    </form>
  )
}

export default QuestionForm

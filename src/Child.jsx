

const Child = ({formData}) => {
  return (
    <div className=" mt-3">
        <h1>{formData.username}</h1>
        <h3>{formData.password}</h3>
    </div>
  )
}

export default Child
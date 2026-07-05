import img from "../../assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="text-center py-16">
      <img className="inline-block" src={img} alt="Loader" width={100} height={100} />
    </div>
  )
}

export default Loading
